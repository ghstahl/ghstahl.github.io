(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.src = {})));
}(this, (function (exports) { 'use strict';

    function getSpaHost() {
        return 'http://localhost:8888/';
    }

    function getCurrentContext() {
        return "harvester";
    }

    function getCss() {
        return getSpaHost() + "src/build/plugins/" + getCurrentContext() + "/styles/" + getCurrentContext() + ".css";
    }

    function fetchProductHarvest(partialUrl) {
        // do a thing, possibly async, then…
        var url = "https://wizardappapi.azurewebsites.net/api/RemoteJsonFile/open?file=" + partialUrl;
        return ESPA.plugins.fetchService.fetch(url);
    }

    function valueAsPromise(value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    }

    var __useDefault = "<div class=\"container\">\r\n    <h1 class=\"display-3\">\r\n        Harvester\r\n    </h1>\r\n    <p>\r\n        <form id=\"my-harvest-form\">\r\n            <% for ( var i = 0; i < harvestRecords.length; i++ ) { \r\n                var harvestRecord = harvestRecords[i];%>\r\n            <input id=\"<%= harvestRecord.id %>\" type=\"radio\" name=\"page\" value=\"<%= harvestRecord.value %>\">\r\n            <%= harvestRecord.label %><br>\r\n\r\n            <% } %>\r\n\r\n\r\n        </form>\r\n\r\n\r\n    </p>\r\n\r\n    \r\n    <p id=\"error\"></p>\r\n\r\n\r\n\r\n</div>";

    var _routeName = 'page-harvest';

    var _wizardPage = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName;
        },
        onNext: function onNext() {
            console.log("onNext");
            var currentPageState = _viewData.currentPageState;
            var wizardState = ESPA.plugins.state.get().wizardState;
            var promise = new Promise(function (resolve, reject) {
                // do a thing, possibly async, then…
                fetchProductHarvest(currentPageState.harvestUrl).then(function (result) {
                    if (result.response.status != 200) {
                        var el = document.getElementById('error');
                        el.innerHTML = "harvest has been rejected!";
                        resolve(false);
                    } else {
                        var json = result.json;
                        wizardState.product_harvest = json;
                        return json;
                    }
                }).then(function (productRecord) {
                    var url = productRecord['wizard-package-url-dev'];
                    url = 'http://localhost:8888/dist/espa/plugins/forest/1.0.0/main.js';
                    var entryPage = productRecord['entry-page'];
                    entryPage = 'page-forest';
                    ESPA.plugins.load(url).then(function () {
                        ESPA.navigate(entryPage, {
                            directive: ESPA.plugins.wizardEngine.navigationDirective.Next,
                            prevPage: 'page-harvester',
                            wizardState: wizardState
                        });
                        document.getElementById('loader').style.display = 'none';
                    });
                    resolve(true);
                }).catch(function (error) {
                    reject(false);
                    console.log('There has been a problem with your fetch operation: ', error.message);
                });
            });
            return promise;
        },
        onBack: function onBack() {
            console.log("onBack");
            return valueAsPromise(true);
        },
        onCancel: function onCancel() {
            console.log("onCancel");
            return valueAsPromise(true);
        }
    });

    var _viewData = null;
    var _pageRecord = {
        factoryScope: null,
        tpl: __useDefault,
        wizardPage: _wizardPage,
        registerRouteCallback: _registerRouteCallback
    };

    var factory = _wizardPage.makeFactory(_pageRecord);

    var _harvestRecords = [{
        id: "rad1",
        value: "harvest/product-instance-one.json",
        label: "Product One"
    }, {
        id: "rad2",
        value: "harvest/product-instance-two.json",
        label: "Product Two"
    }, {
        id: "rad3",
        value: "harvest/product-instance-three.json",
        label: "Product Three"
    }];

    function _registerRouteCallback(data) {
        _viewData = data;
        _wizardPage.augmentViewData(_routeName, _viewData);
        var wizardState = _viewData.wizardState;
        var currentPageState = _viewData.currentPageState;
        if (currentPageState.radioId === undefined) {
            currentPageState.radioId = _harvestRecords[0].id;
            currentPageState.harvestUrl = _harvestRecords[0].value;
        }
        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss())]).then(function (results) {
            _viewData = Object.assign(_viewData, {});
            _viewData.harvestRecords = _harvestRecords;

            var backPage = _wizardPage.getBackPage(_viewData);
            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: backPage,
                currentPage: _wizardPage,
                nextPage: "page-id-token",
                back: backPage ? true : false,
                next: true,
                cancel: true,
                finish: false
            });
            _displayView();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView() {
        var currentPageState = _viewData.currentPageState;
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord.factoryScope.tpl, _viewData);
        document.getElementById('main-container').style.display = 'block';

        var bindRecord = {};
        _harvestRecords.forEach(function (entry) {
            bindRecord["click #" + entry.id] = _radHandler;
            console.log(entry);
        });

        ESPA.plugins.bindEvents(bindRecord);
        document.getElementById(currentPageState.radioId).checked = true;
    }

    function _radHandler(e) {
        var currentPageState = _viewData.currentPageState;
        currentPageState.radioId = e.srcElement.id;
        currentPageState.harvestUrl = e.srcElement.value;
    }

    factory();

    //Make sure to set proper env for your main
    ESPA.plugins = ESPA.plugins || {};
    ESPA.plugins.env = 'prod';

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=main.js.map
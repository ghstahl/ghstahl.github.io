(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.src = {})));
}(this, (function (exports) { 'use strict';

    function getSpaHost() {
        return 'http://localhost:8888/';
    }

    function getCurrentContext() {
        return "myplugin";
    }

    function getCss() {
        return getSpaHost() + 'src/build/plugins/' + getCurrentContext() + '/styles/' + getCurrentContext() + '.css';
    }

    function getDummyJsonAsPromise() {
        return ESPA.plugins.getRequest("local", {
            url: 'src/build/myapp/mock/dummy.json',
            cache: true
        });
    }

    function valueAsPromise(value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    }

    var __useDefault = "<div class=\"container\">\r\n    <h1 class=\"display-3\">\r\n        <%= user %>\r\n    </h1>\r\n    <p>\r\n        <form>\r\n            <input id=\"rad1\" type=\"radio\" name=\"page\" value=\"page-two\"> Page Two<br>\r\n            <input id=\"rad2\" type=\"radio\" name=\"page\" value=\"page-three\"> Page Three<br>\r\n        </form>\r\n        <input id=\"activationKey\" placeholder=\"enter your activation key...\">\r\n        <input id=\"submitActivationKey\" type=\"button\" value=\"Submit Activation Key\">\r\n    </p>\r\n\r\n    </p>\r\n    <p id=\"activationKeyEcho\"></p>\r\n    <ul id=\"my-list\">\r\n        <% for ( var i = 0; i < entitlements.length; i++ ) { \r\n                var entitlement = entitlements[i];%>\r\n        <li>\r\n            <%= entitlement.name %>\r\n        </li>\r\n\r\n        <% } %>\r\n\r\n\r\n    </ul>\r\n\r\n\r\n\r\n</div>";

    var _routeName = 'page-one';

    var _wizardPage = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName;
        },
        onNext: function onNext() {
            console.log("onNext");
            return valueAsPromise(true);
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
    var serviceData = null;
    var _pageRecord = {
        factoryScope: null,
        tpl: __useDefault,
        wizardPage: _wizardPage,
        registerRouteCallback: _registerRouteCallback
    };

    var factory = _wizardPage.makeFactory(_pageRecord);

    function _registerRouteCallback(data) {
        _viewData = data;
        _wizardPage.augmentViewData(_routeName, _viewData);
        var wizardState = _viewData.wizardState;
        var currentPageState = _viewData.currentPageState;
        if (currentPageState.radioId === undefined) {
            currentPageState.radioId = "rad1";
        }
        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData = results[1];
            _viewData = Object.assign(_viewData, serviceData);
            state.identity.forEach(function (entry) {
                if (entry.name == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier") {
                    _viewData.user = entry.value;
                }
                console.log(entry);
            });
            _viewData.entitlements = state.entitlements;

            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: _wizardPage.getBackPage(_viewData),
                currentPage: _wizardPage,
                nextPage: "page-two",
                back: true,
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

        ESPA.plugins.bindEvents({
            'click #submitActivationKey': _onSumbitActivationKey,
            'click #rad1': _radHandler,
            'click #rad2': _radHandler
        });
        document.getElementById(currentPageState.radioId).checked = true;
    }

    function _radHandler(e) {
        var currentPageState = _viewData.currentPageState;
        currentPageState.radioId = e.srcElement.id;
        var value = e.srcElement.value;
        var state = ESPA.plugins.wizardEngine.getCurrentState();
        state.nextPage = value;
    }

    function _onSumbitActivationKey(e) {
        e.preventDefault();
        var today = new SimpleDate(2000, 2, 28);
        today.addDays(1);
        var state = ESPA.plugins.state.get();
        var dd = document.getElementById('activationKey');
        state.activationKey = dd.value;
        dd = document.getElementById('activationKeyEcho');
        dd.value = state.activationKey;
    }

    var __useDefault$1 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">Page Two</h1>\r\n    <p>\r\n        <input id=\"activationKey\" placeholder=\"enter your activation key...\">\r\n        <input id=\"submitActivationKey\" type=\"button\" value=\"Submit Activation Key\"></p>\r\n\r\n    </p>\r\n    <p id=\"activationKeyEcho\"></p>\r\n\r\n</div>";

    var _routeName$1 = "page-two";
    var _wizardPage$1 = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName$1;
        },
        onNext: function onNext() {
            console.log("onNext");
            return valueAsPromise(true);
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

    var _viewData$1 = null;
    var serviceData$1 = null;
    var _pageRecord$1 = {
        factoryScope: null,
        tpl: __useDefault$1,
        wizardPage: _wizardPage$1,
        registerRouteCallback: _registerRouteCallback$1
    };

    var factory$1 = _wizardPage$1.makeFactory(_pageRecord$1);

    function _registerRouteCallback$1(data) {
        _viewData$1 = data;
        _wizardPage$1.augmentViewData(_routeName$1, _viewData$1);
        var wizardState = _viewData$1.wizardState;
        var currentPageState = _viewData$1.currentPageState;

        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData$1 = results[1];
            _viewData$1 = Object.assign(_viewData$1, serviceData$1);

            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: _wizardPage$1.getBackPage(_viewData$1),
                currentPage: _wizardPage$1,
                nextPage: null,
                back: true,
                next: false,
                finish: true,
                cancel: true
            });
            _displayView$1();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$1() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord$1.factoryScope.tpl, _viewData$1);
        document.getElementById('main-container').style.display = 'block';

        ESPA.plugins.bindEvents({
            'click #submitActivationKey': _onSumbitActivationKey$1
        });
    }

    function _onSumbitActivationKey$1(e) {
        e.preventDefault();
        var state = ESPA.plugins.state.get();
        var dd = document.getElementById('activationKey');
        state.activationKey = dd.value;
        dd = document.getElementById('activationKeyEcho');
        dd.value = state.activationKey;
    }

    var __useDefault$2 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">Page Three</h1>\r\n\r\n</div>";

    var _routeName$2 = "page-three";
    var _wizardPage$2 = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName$2;
        },
        onNext: function onNext() {
            console.log("onNext");
            return valueAsPromise(true);
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

    var _viewData$2 = null;
    var serviceData$2 = null;
    var _pageRecord$2 = {
        factoryScope: null,
        tpl: __useDefault$2,
        wizardPage: _wizardPage$2,
        registerRouteCallback: _registerRouteCallback$2
    };

    var factory$2 = _wizardPage$2.makeFactory(_pageRecord$2);

    function _registerRouteCallback$2(data) {
        _viewData$2 = data;
        _wizardPage$2.augmentViewData(_routeName$2, _viewData$2);
        var wizardState = _viewData$2.wizardState;
        var currentPageState = _viewData$2.currentPageState;

        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData$2 = results[1];
            _viewData$2 = Object.assign(_viewData$2, serviceData$2);

            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: _wizardPage$2.getBackPage(_viewData$2),
                currentPage: _wizardPage$2,
                nextPage: null,
                back: true,
                next: false,
                finish: true,
                cancel: true
            });
            _displayView$2();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$2() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord$2.factoryScope.tpl, _viewData$2);
        document.getElementById('main-container').style.display = 'block';

        ESPA.plugins.bindEvents({});
    }

    function fetchIdToken() {
        var details = {
            'grant_type': "arbitrary_identity",
            'client_id': "arbitrary-resource-owner-client",
            'client_secret': "secret",
            'scope': "wizard",
            'arbitrary_claims': "{'preferred_username': ['porky@pig.com'],'name': ['porky@pig.com']}",
            'subject': "PorkyPig",
            'arbitrary_amrs': "['agent:username:agent0@supporttech.com','agent:challenge:fullSSN','agent:challenge:homeZip']",
            'arbitrary_audiences': "['cat','dog']",
            'custom_payload': "{'b':['cat','dog'],'a': {'0': {'Street1': '0 Montana Ave','Street2': null,'Street3': null,'Zip': '90403','City': 'Santa Monica','State': 'California','Country': 'USA'},'1': {'Street1': '1 Montana Ave','Street2': null,'Street3': null,'Zip': '90403','City': 'Santa Monica','State': 'California','Country': 'USA'}}}"
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // do a thing, possibly async, then…
        return ESPA.plugins.fetchService.fetch('https://p7identityserver4.azurewebsites.net/connect/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: formBody
        });
    }
    function bind(id_token) {
        var details = {
            'id_token': id_token
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // do a thing, possibly async, then…
        return ESPA.plugins.fetchService.fetch('https://wizardappapi.azurewebsites.net/api/Identity/bind', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: formBody
        });
    }
    function fetchIdentity(access_token) {
        // do a thing, possibly async, then…
        return ESPA.plugins.fetchService.fetch('https://wizardappapi.azurewebsites.net/api/Identity/closed', {
            headers: {
                "Authorization": "Bearer " + access_token,
                "x-authScheme": "One"
            }
        });
    }
    function fetchProductHarvest(partialUrl) {
        // do a thing, possibly async, then…
        var url = 'https://wizardappapi.azurewebsites.net/api/RemoteJsonFile/open?file=' + partialUrl;
        return ESPA.plugins.fetchService.fetch(url);
    }
    function fetchEntitlements(access_token) {
        // do a thing, possibly async, then…
        return ESPA.plugins.fetchService.fetch('https://wizardappapi.azurewebsites.net/api/RemoteJsonFile/closed?file=entitlements.json', {
            headers: {
                "Authorization": "Bearer " + access_token,
                "x-authScheme": "One"
            }
        });
    }

    var __useDefault$3 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">access_token</h1>\r\n    <p>\r\n\r\n        <input id=\"access_token\" placeholder=\"enter your access_token...\" value=\"<%= currentPageState.access_token%>\">\r\n    </p>\r\n    <p id=\"access_token_error\"></p>\r\n\r\n</div>";

    var _routeName$3 = 'page-access-token';
    var _wizardPage$3 = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName$3;
        },
        onNext: function onNext() {
            console.log("onNext");
            var el = document.getElementById('access_token');
            var state = ESPA.plugins.state.get();
            state.access_token = el.value;
            var promise = Promise.all([fetchIdentity(state.access_token).then(function (result) {
                return result;
            }).catch(function (error) {
                ESPA.logger.error(e);
                throw new Error('apiPost error');
            }), fetchEntitlements(state.access_token).then(function (result) {
                return result;
            }).catch(function (error) {
                ESPA.logger.error(e);
                throw new Error('apiPost error');
            })]).then(function (results) {
                var success = false;
                var identityResult = results[0];
                var entitlementResult = results[1];
                if (identityResult.response.status != 200) {
                    var el = document.getElementById('access_token_error');
                    el.innerHTML = "access_token has been rejected!";
                } else {
                    state.identity = identityResult.json;
                    success = true;
                }
                if (entitlementResult.response.status != 200) {
                    var el = document.getElementById('access_token_error');
                    el.innerHTML = "entitlementResult!";
                } else {
                    state.entitlements = entitlementResult.json.entitlements;
                }
                return success;
            }).catch(function (e) {
                ESPA.logger.error(e);
                return Promise.reject({
                    error: '_registerRouteCallback promise chain terminated'
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

    var _viewData$3 = null;
    var serviceData$3 = null;

    var _pageRecord$3 = {
        factoryScope: null,
        tpl: __useDefault$3,
        wizardPage: _wizardPage$3,
        registerRouteCallback: _registerRouteCallback$3
    };

    var factory$3 = _wizardPage$3.makeFactory(_pageRecord$3);

    function _registerRouteCallback$3(data) {
        _viewData$3 = data;
        _wizardPage$3.augmentViewData(_routeName$3, _viewData$3);
        var wizardState = _viewData$3.wizardState;
        var currentPageState = _viewData$3.currentPageState;
        currentPageState.access_token = wizardState.access_token;

        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss())]).then(function (results) {
            _viewData$3 = Object.assign(_viewData$3, serviceData$3);
            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: _wizardPage$3.getBackPage(_viewData$3),
                currentPage: _wizardPage$3,
                nextPage: "page-one",
                back: true,
                next: true,
                cancel: true,
                finish: false
            });
            _displayView$3();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$3() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord$3.factoryScope.tpl, _viewData$3);
        document.getElementById('main-container').style.display = 'block';

        ESPA.plugins.bindEvents({});
        var state = ESPA.plugins.state.get();
        if (state.access_token) {
            var el = document.getElementById('access_token');
            el.value = state.access_token;
        }
    }

    var __useDefault$4 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">id_token</h1>\r\n    <p>\r\n\r\n        <input id=\"id_token\" placeholder=\"enter your id_token...\" value=\"<%= currentPageState.id_token%>\">\r\n    </p>\r\n    <p id=\"id_token_error\"></p>\r\n\r\n</div>";

    var _routeName$4 = 'page-id-token';
    var _wizardPage$4 = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName$4;
        },
        onNext: function onNext() {
            console.log("onNext");
            var el = document.getElementById('id_token');
            var wizardState = ESPA.plugins.state.get().wizardState;
            var id_token = el.value;
            var promise = new Promise(function (resolve, reject) {
                // do a thing, possibly async, then…
                bind(id_token).then(function (result) {
                    if (result.response.status != 200) {
                        var el = document.getElementById('id_token_error');
                        el.innerHTML = "id_token has been rejected!";
                        resolve(false);
                    } else {
                        var json = result.json;
                        wizardState.access_token = json.access_token;
                        resolve(true);
                    }
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

    var _viewData$4 = null;
    var serviceData$4 = null;

    var _pageRecord$4 = {
        factoryScope: null,
        tpl: __useDefault$4,
        wizardPage: _wizardPage$4,
        registerRouteCallback: _registerRouteCallback$4
    };

    var factory$4 = _wizardPage$4.makeFactory(_pageRecord$4);

    function _registerRouteCallback$4(data) {
        _viewData$4 = data;
        _wizardPage$4.augmentViewData(_routeName$4, _viewData$4);

        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss()), fetchIdToken()]).then(function (results) {
            var idTokenResult = results[1];
            _viewData$4 = Object.assign(_viewData$4, serviceData$4);

            if (idTokenResult.response.status != 200) {
                var el = document.getElementById('id_token_error');
                el.innerHTML = "id_token has not been created!";
            } else {
                var json = idTokenResult.json;
                _viewData$4.currentPageState.id_token = json.id_token;
            }
            var backPage = _wizardPage$4.getBackPage(_viewData$4);
            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: backPage,
                currentPage: _wizardPage$4,
                nextPage: "page-access-token",
                back: backPage ? true : false,
                next: true,
                cancel: true,
                finish: false
            });
            _displayView$4();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$4() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord$4.factoryScope.tpl, _viewData$4);
        document.getElementById('main-container').style.display = 'block';

        if (_viewData$4.currentPageState.id_token) {
            var el = document.getElementById('id_token');
            el.value = _viewData$4.currentPageState.id_token;
        }
    }

    var __useDefault$5 = "<div class=\"container\">\r\n    <h1 class=\"display-3\">\r\n        Harvestor\r\n    </h1>\r\n    <p>\r\n        <form id=\"my-harvest-form\">\r\n            <% for ( var i = 0; i < harvestRecords.length; i++ ) { \r\n                var harvestRecord = harvestRecords[i];%>\r\n            <input id=\"<%= harvestRecord.id %>\" \r\n            type=\"radio\" \r\n            name=\"page\" \r\n            value=\"<%= harvestRecord.value %>\">\r\n            <%= harvestRecord.label %><br>\r\n \r\n            <% } %>\r\n\r\n\r\n        </form>\r\n\r\n\r\n    </p>\r\n\r\n    </p>\r\n    <p id=\"error\"></p>\r\n\r\n\r\n\r\n</div>";

    var _routeName$5 = 'page-harvest';

    var _wizardPage$5 = ESPA.plugins.factoryWizardPage({
        getRouteName: function getRouteName() {
            return _routeName$5;
        },
        onNext: function onNext() {
            console.log("onNext");
            var currentPageState = _viewData$5.currentPageState;
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
                        resolve(true);
                    }
                }).catch(function (error) {
                    reject(false);
                    console.log('There has been a problem with your fetch operation: ', error.message);
                });
            });
            return promise;

            return valueAsPromise(true);
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

    var _viewData$5 = null;
    var serviceData$5 = null;
    var _pageRecord$5 = {
        factoryScope: null,
        tpl: __useDefault$5,
        wizardPage: _wizardPage$5,
        registerRouteCallback: _registerRouteCallback$5
    };

    var factory$5 = _wizardPage$5.makeFactory(_pageRecord$5);

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

    function _registerRouteCallback$5(data) {
        _viewData$5 = data;
        _wizardPage$5.augmentViewData(_routeName$5, _viewData$5);
        var wizardState = _viewData$5.wizardState;
        var currentPageState = _viewData$5.currentPageState;
        if (currentPageState.radioId === undefined) {
            currentPageState.radioId = _harvestRecords[0].id;
            currentPageState.harvestUrl = _harvestRecords[0].value;
        }
        var state = ESPA.plugins.state.get();
        return Promise.all([ESPA.loadResource.css(getCss()), getDummyJsonAsPromise()]).then(function (results) {
            serviceData$5 = results[1];
            _viewData$5 = Object.assign(_viewData$5, serviceData$5);
            _viewData$5.harvestRecords = _harvestRecords;

            var backPage = _wizardPage$5.getBackPage(_viewData$5);
            ESPA.plugins.wizardEngine.setCurrentState({
                backPage: backPage,
                currentPage: _wizardPage$5,
                nextPage: "page-id-token",
                back: backPage ? true : false,
                next: true,
                cancel: true,
                finish: false
            });
            _displayView$5();
        }).catch(function (e) {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
    }

    function _displayView$5() {
        var currentPageState = _viewData$5.currentPageState;
        document.getElementById('loader').style.display = 'none';
        document.getElementById('wizard-content').innerHTML = ESPA.tmpl(_pageRecord$5.factoryScope.tpl, _viewData$5);
        document.getElementById('main-container').style.display = 'block';

        var bindRecord = {};
        _harvestRecords.forEach(function (entry) {
            bindRecord['click #' + entry.id] = _radHandler$1;
            console.log(entry);
        });

        ESPA.plugins.bindEvents(bindRecord);
        document.getElementById(currentPageState.radioId).checked = true;
    }

    function _radHandler$1(e) {
        var currentPageState = _viewData$5.currentPageState;
        currentPageState.radioId = e.srcElement.id;
        currentPageState.harvestUrl = e.srcElement.value;
    }

    factory();
    factory$1();
    factory$2();
    factory$3();
    factory$4();
    factory$5();

    //Make sure to set proper env for your main
    ESPA.plugins = ESPA.plugins || {};
    ESPA.plugins.env = 'dev';

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=main.js.map
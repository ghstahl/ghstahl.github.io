import {
    getCss,
    bindEvents
} from '../utils.js';
import {
    getDummyJsonAsPromise
} from '../services/dummy.js';
import {
    getState
} from '../services/state-machine.js';

import {
    factory as factoryWizardPage
} from '../services/wizard-page.js';
import * as wizardEngine from "../services/wizard-engine.js"
import * as promisesHelpers from "../helpers/promises.js"

import tpl from '../views/page-one.html';

const wizardPage = factoryWizardPage({
    onNext: function () {
        console.log("onNext");
        return promisesHelpers.valueAsPromise(true);
    },
    onBack: function () {
        console.log("onBack");
        return promisesHelpers.valueAsPromise(true);
    },
    onCancel: function () {
        console.log("onCancel");
        return promisesHelpers.valueAsPromise(true);
    }
});



let viewData = null;
let serviceData = null;
let factoryScope = null;

const factory = ((injected) => {
    const self = {
        cfg: (injected && injected.cfg) ? injected.cfg : null,
        tpl: (injected && injected.tpl) ? injected.tpl : tpl
    }

    //overridding
    factoryScope = ESPA.factoryMixin(self, injected);

    init();

    return factoryScope;
});

function init() {
    ESPA.registerRoute('page-one', _registerRouteCallback);
}

function _registerRouteCallback(data) {
    viewData = data || {};
    var state = getState();
    return Promise.all([
            ESPA.loadResource.css(getCss()),
            getDummyJsonAsPromise()
        ])
        .then((results) => {
            serviceData = results[1];
            viewData = Object.assign(viewData, serviceData);
            state.identity.forEach(function (entry) {
                if (entry.name == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier") {
                    viewData.user = entry.value;

                }

                console.log(entry);
            });
            viewData.entitlements = state.entitlements;
            _displayView();
        })
        .catch(e => {
            ESPA.logger.error(e);
            return Promise.reject({
                error: '_registerRouteCallback promise chain terminated'
            });
        });
}

function _displayView() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('wizard-content').innerHTML = ESPA.tmpl(factoryScope.tpl, viewData);
    document.getElementById('main-container').style.display = 'block';

    bindEvents({
        'click #submitActivationKey': _onSumbitActivationKey
    });
    wizardEngine.setCurrentState({
        currentPage: wizardPage,
        nextPage: "page-two",
        backPage: "page-access-token",
        back: true,
        next: true,
        cancel: true
    });

}

function _onSumbitActivationKey(e) {
    e.preventDefault();
    const today = new SimpleDate(2000, 2, 28);
    today.addDays(1);
    var state = getState();
    var dd = document.getElementById('activationKey');
    state.activationKey = dd.value;
    dd = document.getElementById('activationKeyEcho');
    dd.value = state.activationKey;
}


export {
    factory,
    _registerRouteCallback
};
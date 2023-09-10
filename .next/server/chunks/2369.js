"use strict";
exports.id = 2369;
exports.ids = [2369];
exports.modules = {

/***/ 61324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _appcallserver = __webpack_require__(56937);
function _default(id) {
    // Since we're using the Edge build of Flight client for SSR [1], here we need to
    // also use the same Edge build to create the reference. For the client bundle,
    // we use the default and let Webpack to resolve it to the correct version.
    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26
    const { createServerReference  } = typeof window === "undefined" ? __webpack_require__(35927) : __webpack_require__(67597);
    return createServerReference(id, _appcallserver.callServer);
}

//# sourceMappingURL=action-client-wrapper.js.map

/***/ }),

/***/ 53009:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return createActionProxy;
    }
});
const SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
function createActionProxy(id, bound, action, originalAction) {
    function bindImpl(_, ...boundArgs) {
        const currentAction = this;
        const newAction = async function(...args) {
            if (originalAction) {
                return originalAction(newAction.$$bound.concat(args));
            } else {
                // In this case we're calling the user-defined action directly.
                return currentAction(...newAction.$$bound, ...args);
            }
        };
        for (const key of [
            "$$typeof",
            "$$id",
            "$$FORM_ACTION"
        ]){
            // @ts-ignore
            newAction[key] = currentAction[key];
        }
        // Rebind args
        newAction.$$bound = (currentAction.$$bound || []).concat(boundArgs);
        // Assign bind method
        newAction.bind = bindImpl.bind(newAction);
        return newAction;
    }
    Object.defineProperties(action, {
        $$typeof: {
            value: SERVER_REFERENCE_TAG
        },
        $$id: {
            value: id
        },
        $$bound: {
            value: bound
        },
        bind: {
            value: bindImpl
        }
    });
}

//# sourceMappingURL=action-proxy.js.map

/***/ })

};
;
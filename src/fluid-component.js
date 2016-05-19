(function () {
    'use strict';

    function FluidComponent() {
        var scope = {};
        var _componentManager;
        var _this = this;
        _this.component = component;
        _this.getManager = getManager;
        _this.getScope = getScope;
        return _this;
        function component(name, options) {
            return {
                __$: options.handler,
                requires: options.requires,
                runs: options.runs,
                setComponentManager: function (componentManager) {
                    _componentManager = componentManager;
                },
                execute: function (callback, context) {
                    try {
                        if (_componentManager) {
                            _componentManager.execute(name, scope, context, options, callback);
                        } else {
                            throw 'Missing component manager.';
                        }
                    } catch (err) {
                        if (callback) {
                            callback(err);
                        }
                    }
                },
                name: name,
                target: options.target
            };
        }

        function getManager() {
            return _componentManager;
        }

        function getScope() {
            return scope;
        }
    }

    module.exports = FluidComponent;
    
})();
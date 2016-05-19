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
        function execute(options, manager, callback) {
            try {
                if (!options.target) {
                    throw 'Property target is required.';
                }
                if (!options.name) {
                    throw 'Property name is required.';
                }
                if (!manager) {
                    throw 'Missing component manager.';
                }
                var tempComp = component(options.name, {
                    target: options.target,
                    local: options.local
                });
                tempComp.setComponentManager(manager);
                tempComp.execute(callback, options.context);
            } catch (err) {
                if (callback) {
                    callback(err);
                }
            }

        }
    }

    module.exports = FluidComponent;

})();
(function () {
    'use strict';

    function FluidComponent() {
        var scope = {};
        var _componentManager;
        var _this = this;
        _this.component = component;
        _this.getManager = getManager;
        return _this;
        function component(name, options) {
            return {
                __$: options.handler,
                requires: options.requires,
                runs: options.runs,
                setComponentManager: function (componentManager) {
                    _componentManager = componentManager;
                },
                execute: function (error, context) {
                    try {
                        if (_componentManager) {
                            _componentManager.execute(error, name, context, options);
                        } else {
                            throw 'Missing component manager.';
                        }
                    } catch (err) {
                        if (error) {
                            error(err);
                        }
                    }
                },
                scope: scope,
                name: name,
                target: options.target
            };
        }

        function getManager() {
            return _componentManager;
        }
    }

    module.exports = FluidComponent;


})();
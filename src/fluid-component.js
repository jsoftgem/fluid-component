(function () {
    'use strict';
    var lodash = require('lodash');

    function FluidComponent() {
        var scope = {};
        return {
            component: function (name, options) {
                return {
                    requires: options.requires,
                    runs: options.runs,
                    setComponentManager: function (componentManager) {
                        this.componentManager = componentManager;
                        lodash.set(componentManager.handlers, name, options.handler);
                    },
                    execute: function (error, context) {
                        try {
                            if (this.componentManager) {
                                var targetComponent = this.componentManager.get(options.target);
                                var handler = this.componentManager.getHandler(options.target);
                                if (!handler) {
                                    throw 'Execution failed. Missing handler function for component ' + options.target + '.';
                                }
                                if (targetComponent) {
                                    setTimeout(function () {
                                        handler(name, options.local, targetComponent.scope, context);
                                    });
                                }
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
        };
    }

    module.exports = FluidComponent;


})();
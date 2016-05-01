(function () {
    'use strict';
    var lodash = require('lodash');
    module.exports = {
        component: function (name, options) {
            var scope = {};
            return {
                setComponentManager: function (componentManager) {
                    this.componentManager = componentManager;
                    lodash.set(componentManager.handlers, name, options.handler);
                },
                execute: function (error, context) {
                    try {
                        if (this.componentManager) {
                            var targetComponent = this.componentManager.get(options.target);
                            var handler = this.componentManager.getHandler(options.target);
                            if (!hadler) {
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
                        error(err);
                    }
                },
                scope: scope,
                name: name
            };
        }
    };


})();
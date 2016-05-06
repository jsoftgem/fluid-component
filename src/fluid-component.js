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
                        this.componentManager.setHandler(name, options.handler);
                    },
                    execute: function (error, context) {
                        try {
                            if (this.componentManager) {
                                this.componentManager.execute(error, name, context, options);
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
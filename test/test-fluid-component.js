(function () {
    'use strict';
    var chai = require('chai');
    var expect = chai.expect;

    var IdeComponent = require('../src/fluid-component.js');
    var fluidComponent = new IdeComponent();
    var sampleComponent;
    describe('ide component specifications', function () {

        beforeEach(function () {
            sampleComponent = fluidComponent.component('sample', {
                handler: function (source, local, scope, context) {
                }
            });
        });

        it('should be defined', function () {
            expect(IdeComponent).to.be.defined;
            expect(IdeComponent.createComponent).to.be.defined;
        });

        it('should set the name to sample', function () {
            expect(sampleComponent.name).to.be.equal('sample');
        });

        it('should create execute function', function () {
            expect(sampleComponent.execute).to.be.defined;
        });

        it('should create scope', function () {
            expect(sampleComponent.scope).to.be.defined;
        });
        
        it('should create setComponentManager', function () {
            expect(sampleComponent.setComponentManager).to.be.defined;
        });

        it('should passed instance of FluidComponent', function () {
            expect(sampleComponent instanceof IdeComponent).to.be.defined;
        });

    });

})();
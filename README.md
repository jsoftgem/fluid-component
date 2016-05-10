# fluid-component
 
  A helper class for creating pluggable components.
 
 [![NPM](https://nodei.co/npm/fluid-component.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fluid-component.png?downloads=true&downloadRank=true&stars=true)
  
## Installation
`npm install fluid-component --save`

## Getting stared
 - sample-component.js
 ```
    var FluidComponent = require('fluid-component');
    module.exports = FluidComponent.component('SomeComponent', {
        handler: function (source, local, scope, context) {
        
        }
    });
 ```
 
 - index.js
 ```
    var sampleComponent = require('./sample-component.js');
    
      sampleComponent.execute(function(err){
       //error
      },
      funciton(){
       // done
      });
    
 ```


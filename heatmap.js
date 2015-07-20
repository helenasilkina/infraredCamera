/*
* Create heap map from infrared data 
* 
* @param: data - lists in json format
* @author: Helena Silkina
*/


// import d3.js
"use strict";

var heatMap = (function() {
  function create(data) {
    console.log('create heat map');
  };
  
  function update(data) {
    if (data.changed) {
      heatMap.create(data);
    }
    console.log('update heat map');
  }
  
  return {
    create: create,
    update: update
  }
})()

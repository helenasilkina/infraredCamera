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
    drawCanvas();
    drawMap(data);
  };
  
  function update(data) {
    if (data.changed) {
      drawMap(data);
    }
    console.log('update heat map');
  }
  
  function drawCanvas(object) {
    var canvas = object || {};
    console.log('draw canvas');
  }
  
  function drawMap(data) {
    var map = data || [];
    console.log('draw map');
  }
  
  return {
    create: create,
    update: update
  }
})()

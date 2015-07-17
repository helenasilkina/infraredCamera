// import d3.js

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

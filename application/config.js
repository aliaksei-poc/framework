config = (function(){

  var configData = {
    getAddonsUrl: 'http://ecsc00104140:3000/add-ons'
  };

  return {
    get: function(name){
      return configData[name]
    }
  }
})();
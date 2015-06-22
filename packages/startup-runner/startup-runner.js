StartupRunner = function(func){
  this.func = func;
};

StartupRunner.prototype.run = function(){
  this.func();
};
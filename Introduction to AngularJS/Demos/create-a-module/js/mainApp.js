
//The [] signals the dependancies
angular.module('mainApp',[]).config([function(){
  console.log('Configuration hook');
}])
.run([function(){
  console.log('Run hook');
}]);

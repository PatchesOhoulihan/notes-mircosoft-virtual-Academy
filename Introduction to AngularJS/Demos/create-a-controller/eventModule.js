angular.module('eventModule', [])
.config([function (){
    console.log('EventModule::config');
}])
.run([function () {

}])
.controller('EventCtrl',['$scope', function($scope){
    $scope.title = "Say something for the record, tell the people what you feel";
    $scope.menu = [
        {
            name:"Events",
            href:"index.html"
        },
        {
            name: "Contact",
            href:"contact.html"
        }
    ]
}]);

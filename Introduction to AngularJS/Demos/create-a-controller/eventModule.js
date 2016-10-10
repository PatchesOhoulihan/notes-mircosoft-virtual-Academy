angular.module('eventModule', [])
    .config([function () {
        console.log('EventModule::config');
    }])
    .run([function () {

    }])
    .controller('EventCtrl', ['$scope', function ($scope) {
        $scope.title = "Say something for the record, tell the people what you feel, fuck the record and fuck the people";
        $scope.menu = [
            {
                name: "Events",
                href: "index.html"
            },
            {
                name: "Contact",
                href: "contact.html"
            }
        ];

        $scope.index = 0;

        $scope.getIndex = function () {
            return ($scope.index);
        }

        $scope.setIndex = function (val) {
            $scope.index = val;
        }
    }])
    .controller('EventItemCtrl', ['$scope', function ($scope) {
        $scope.itemTitle = 'Something completly different';
        $scope.description = 'Web Devs, if you liked the Introduction to AngularJS session in the Single Page Applications with jQuery or AngularJS course, roll up your sleeves for even more coding fun! Back by popular demand, experts Stacey Mulcahy and Christopher Harris';
        $scope.imgSrc = "assets/img/toThepic.jpg";
        $scope.date = "January 24, 2015";
    }])

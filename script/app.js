 var app = angular.module('form', []);

 app.controller('formController', function formController($scope){



     $scope.userData = [
         {
             id: '1',
             name: 'Neddard Stark',
             email: 'ned@stark.got'
         },
         {
             id: '2',
             name: 'Arya Stark',
             email: 'arya@stark.com'
         },
         {
             id: '3',
             name: 'Stannis Lannister',
             email: 'stannis@lannister.got'
         }
     ];

     var idCounter = $scope.userData.length;

     $scope.addData = function () {
         idCounter ++;
         $scope.userData.push({id: idCounter, name: $scope.userDataName, email: $scope.userDataEmail});

         console.log($scope.userData.length, $scope.userData);
     };
     
     $scope.deleteData = function(user) {

         console.log($scope.userData.indexOf(user));

         $scope.userData.splice($scope.userData.indexOf(user), 1);
     };

     $scope.editData = function () {
         
     };

 });


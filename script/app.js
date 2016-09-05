 var app = angular.module('form', []);

 app.controller('formController', function formController($scope){
     
     
     $scope.showEdit = { showEditBox: false};
     $scope.showNew = true;
     
     
     $scope.userData = [
         {
             id: '1',
             name: 'Neddard Stark',
             email: 'ned@stark.got',
             showEditBox: false
         },
         {
             id: '2',
             name: 'Arya Stark',
             email: 'arya@stark.com',
             showEditBox: false
         },
         {
             id: '3',
             name: 'Stannis Lannister',
             email: 'stannis@lannister.got',
             showEditBox: false
         }
     ];

     $scope.userEdit = angular.copy($scope.userData);

     $scope.addData = function () {
         var idCounter = $scope.userData.length + 1;
         
         $scope.userData.push({
             id: '' + idCounter, 
             name: $scope.userDataName, 
             email: $scope.userDataEmail});
         
         $scope.userEdit = angular.copy($scope.userData);
     };
     
     $scope.deleteData = function(user) {
         $scope.userData.splice($scope.userData.indexOf(user), 1);
         $scope.userEdit = angular.copy($scope.userData);
     };

     $scope.editData = function () {
        angular.copy($scope.userEdit, $scope.userData);

         $scope.userEdit = angular.copy($scope.userData);
     };

     $scope.cancel = function () {
         $scope.userEdit = angular.copy($scope.userData);
     }

 });


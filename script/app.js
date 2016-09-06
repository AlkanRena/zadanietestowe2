 var app = angular.module('form', []);

 app.controller('formController', function formController($scope){
     
     $scope.showEdit = { showEditBox: false};
     $scope.showNew = false;
     
     $scope.userData = [
         {
             id: '1000001',
             name: 'Neddard Stark',
             email: 'ned@stark.got',
             showEditBox: false
         },
         {
             id: '1000002',
             name: 'Arya Stark',
             email: 'arya@stark.com',
             showEditBox: false
         },
         {
             id: '1000003',
             name: 'Stannis Lannister',
             email: 'stannis@lannister.got',
             showEditBox: false
         }
     ];
    
     // Creating machine for id
     var idCounter = 100000 + $scope.userData.length;

     $scope.userEdit = angular.copy($scope.userData);

     $scope.addData = function () {
         idCounter = idCounter + 1;
         $scope.userData.push({
                 id: '' + idCounter,
                 name: $scope.userDataNew.name,
                 email: $scope.userDataNew.email,
                 showEditBox: false});
         $scope.userEdit = angular.copy($scope.userData);
     };

     $scope.clearData = function () {
         $scope.userDataNew.name = [];
         $scope.userDataNew.email = [];
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


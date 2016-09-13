 angular.module('form', [])
        .controller('formController', function formController($scope){



             $scope.userData = [
                 {
                     id: '100001',
                     name: 'Neddard Stark',
                     email: 'ned@stark.got',
                     showEditBox: false
                 },
                 {
                     id: '100002',
                     name: 'Arya Stark',
                     email: 'arya@stark.com',
                     showEditBox: false
                 },
                 {
                     id: '100003',
                     name: 'Stannis Lannister',
                     email: 'stannis@lannister.got',
                     showEditBox: false
                 }
             ];

            $scope.showNew = false;


             // Creating machine for id
             var idCounter = 100000 + $scope.userData.length;

             $scope.userEdit = angular.copy($scope.userData);
             $scope.addData = addData;
             $scope.clearDataInput = clearDataInput;
             $scope.deleteData = deleteData;
             $scope.editData = editData;
             $scope.cancel = cancel;

            function addData() {
                idCounter = idCounter + 1;
                $scope.userData.push({
                    id: '' + idCounter,
                    name: $scope.userDataNew.name,
                    email: $scope.userDataNew.email,
                    showEditBox: false});
                $scope.userEdit = angular.copy($scope.userData);
            }
            function clearDataInput() {
                $scope.userDataNew.name = [];
                $scope.userDataNew.email = [];
            }
            function deleteData(user) {
                $scope.userData.splice($scope.userData.indexOf(user), 1);
                $scope.userEdit = angular.copy($scope.userData);
            }
            function editData() {
                angular.copy($scope.userEdit, $scope.userData);
                $scope.userEdit = angular.copy($scope.userData);
            }
            function cancel() {
                $scope.userEdit = angular.copy($scope.userData);
            }
         });


var usersFactory = angular.module('allusersfactory', [])

  .factory('allUsers', allUsers);

  allUsers.$inject = ['$http'];
  function allUsers($http){

    function allUsersCall(){

      return $http({
        method: "GET"
        ,url: "/api/users"
      })
      .then(function(data){
        self.data = data;
        return data;
      })
    }

    return allUsersCall;
    //
  }

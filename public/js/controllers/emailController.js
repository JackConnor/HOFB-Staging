var app = angular.module('emailController', ['allusersfactory', 'singleuserfactory', 'newuserfactory', 'newemailfactory'])

  .controller('emailCtrl', emailCtrl)

  emailCtrl.$inject = ['$http', 'allUsers', 'singleUser', 'newUser', 'newEmail']
  function emailCtrl($http, allUsers, singleUser, newUser, newEmail){
    var self = this;

    console.log('production');

    ///////get all users
    console.log(    allUsers()   );

    //////use factory to search a single user
    var url = "5660e162312d9bf1f2d2dce6";
    console.log(singleUser(url));

    /////post a new user

    /////collect all of our emails on splash page
    $('.collectEmail').on('click', function(){
      var emailAddress = $('.emailInput').val();
      console.log(emailAddress);
      var date = new Date();
      console.log(date);
      newEmail({email: emailAddress, date: date});
    })

    /////collect all of our emails on splash page, still need to add the html for this
    $('.collectEmail').on('click', function(){
      var emailAddress = $('.emailInput').val();
      var date = new Date();
      newEmail({email: emailAddress, date: date});
    })

    if(window.location.hash.split('/')[1] == 'getemail'){
      $http({
        method: "GET"
        ,url: "/api/emailcaptures"
      })
      .then(function(emails){
        console.log(emails);
        var allMail = [];
        for (var i = 0; i < emails.data.length; i++) {
          allMail.push(emails.data[i].email)
        }
        function unique(list) {
          var result = [];
          $.each(list, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
          });
          return result;
        }
        self.allEmails = unique(allMail);
        console.log(self.allEmails);

      })
    }

  ////////end email controller//////
  ////////////////////////////////////
  ////////////////////////////////////
  }

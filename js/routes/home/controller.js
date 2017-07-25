angular.module('tickets-app')
    .controller('searchController', function ($scope, $rootScope, dataService) {
      $scope.getKeyword = function () {
        var keyword = $scope.keyword
        dataService.getKeywordSearch(keyword)
          .then(function (response) {
            console.log(response)
          })
      }
    })

    .controller('dailyController', function ($scope, $rootScope, dataService) {
        // YYYY-MM-DDTHH:mm:ssZ ---> format date
      var date = (new Date()).toISOString().split('.')
      date = date.shift() + 'Z'
      dataService.getDaily(date)
                .then(function (response) {
                  console.log(response)
                  var completeEvents = response.data._embedded.events
                  $scope.events = completeEvents.slice(0, 4)
                })
      // }
    })

    // .controller('relevantController', function ($scope, $rootScope, dataService) {
    //  // $scope.getRelevant = function () {
    //   var keyword = $scope.event
    //   dataService.getKeywordSearch(keyword)
    //             .then(function (response) {
    //               console.log(response)
    //             })
    //  // }
    // })

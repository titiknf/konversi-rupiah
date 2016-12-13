angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

    .state('kontrolTab.konversiKeRupiah', {
    url: '/Konversi',
    views: {
      'tab1': {
        templateUrl: 'templates/konversiKeRupiah.html',
        controller: 'konversiKeRupiahCtrl'
      }
    }
  })

  .state('kontrolTab.tambahData', {
    url: '/tambahData',
    views: {
      'tab2': {
        templateUrl: 'templates/tambahData.html',
        controller: 'tambahDataCtrl'
      }
    }
  })

  .state('kontrolTab.lihatData', {
    url: '/LihatData',
    views: {
      'tab3': {
        templateUrl: 'templates/lihatData.html',
        controller: 'lihatDataCtrl'
      }
    }
  })

  .state('kontrolTab', {
    url: '/menuBawah',
    templateUrl: 'templates/kontrolTab.html',
    abstract:true
  })

  .state('kontrolTab.listUang', {
    url: '/listUang',
    views: {
      'tab1': {
        templateUrl: 'templates/listUang.html',
        controller: 'listUangCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('kontrolTab.prosesKonversi', {
    url: '/prosesKonversi/:detail_uang',//uangParam itu dari controller dia sebuah parameter
    views: {
      'tab1': {
        templateUrl: 'templates/prosesKonversi.html',
        controller: 'prosesKonversiCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('/login');
});
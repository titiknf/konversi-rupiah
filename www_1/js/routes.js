angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

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
  }})

  .state('kontrolTab.proses', {
    url: '/proses',
    views: {
      'tab1': {
        templateUrl: 'templates/proses.html',
        controller: 'prosesCtrl'
      }
  }})

  .state('hasilKonversi', {
    url: '/hasilKonversi',
    templateUrl: 'templates/hasilKonversi.html',
    controller: 'hasilKonversiCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/menuBawah/Konversi')

  

});
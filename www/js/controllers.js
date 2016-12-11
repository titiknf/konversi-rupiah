angular.module('app.controllers', [])
  
.controller('konversiKeRupiahCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('tambahDataCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lihatDataCtrl', function($scope,$http,$ionicLoading,$stateParams,$ionicPopup,$state){
	$scope.showPopup = function($judul,$subjudul,$user){
		var mypopup = $ionicPopup.show({
			title 	    : $judul,
			subTitle 	: $subjudul,
			buttons 	: [
				{//first button
					text	: 'Yes',
					onTap	: function(e){
						$http.get('http://localhost/konversiMU/delete.php?id='+$user).then(function(result){
							if(result.data=="1"){
								$state.go('lihatData');
							}
						})
					}
				},
				{//second button
					text	: 'Batal',
					onTap	: function(e){

					}
				}

			]
		})
	}

	$scope.Hapus = function(data){
		$scope.showPopup("Confirmaation","Yakin mau ngehapus " + data + " ? " , data)
	}

	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang = result.data;
		$ionicLoading.hide();
	})

	$scope.doRefresh = function(){
	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang = result.data;
		$ionicLoading.hide();
	})
	}
})
      
.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('listUangCtrl',function ($scope, $http, $ionicLoading) {
	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang = result.data;
		$ionicLoading.hide();
	})
})
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
.controller('prosesKonversiCtrl', function ($scope,$http,$ionicLoading,$stateParams){
	var id = $stateParams.detail_id;

	$scope.data = {
		id: '',
		MataUang: '',
		nilai: '',
		bTombol: '',
		hasil: '',
		nominalRp: ''
	}

	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataByUang.php?id=' + id)
	.then(function(result){
		$scope.data.id 			= result.data[0].id;
		$scope.data.MataUang 	= result.data[0].MataUang;
		$scope.data.nilai		= result.data[0].nilai;

		$ionicLoading.hide();

		$scope.hasil = 0;
		$scope.nominalRp = 0;
		$scope.nominalnonRp = result.data[0].nilai;
		$scope.onClickKonversi = function(){
		}
			$scope.hasil = $scope.nominalRp * $scope.nominalnonRp;
		})




});
 
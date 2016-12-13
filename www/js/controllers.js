angular.module('app.controllers', [])
  
.controller('konversiKeRupiahCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('tambahDataCtrl', function ($scope,$http,$ionicLoading,$ionicPopup,$state) {
 $scope.userMatkul = {
			id :'',
			MataUang : '',
			nilai : ''
	}


	$scope.showPopup = function(judul,subjudul){
		var popup = $ionicPopup.show(
			{
				title 		: judul,
				subTittle 	: subjudul,
				scope 		: $scope,
				buttons		: [
					{
						text  : 'Oke',
						type  : 'button-calm',
						onTap : function(e){
							$scope.userMatkul = {
								id :'',
								MataUang : '',
								nilai : ''
							}

						}
					}
					,{
						text  : '<b>Kembali</b>',
						type  : 'button-assertive',
						onTap : function(e){
							$state.go('kontrolTab.tambahData');
						}

					}
				]
			}
		);
	}
	
	$scope.tambahData = function(userMatkul){
		var baseUrl = "http://localhost/konversiMU/";
		
		$ionicLoading.show();
		
		$http.post(baseUrl + "insertDuwek.php",{
			MataUang	: userMatkul.MataUang,
			nilai		: userMatkul.nilai,
			id			: userMatkul.id
		})
		.then(function(result){
			$scope.status = result.data;
			console.log(result.data);
			if(result.data=="2"){
				$scope.showPopup("Primary Key","not Allowed");
			}
			else if(result.data=="1"){
				$scope.showPopup("Sukses","proses insert sukses");
			}
			else{
				$scope.showPopup("Error Mo","check konfigurasi anda")
			}


			$ionicLoading.hide();
		})
		
		
	}

})
   
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
      
.controller('welcomeCtrl', function ($scope, $stateParams) {
})
   
.controller('listUangCtrl',function ($scope, $http, $ionicLoading) {
	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang = result.data;
		$ionicLoading.hide();
	})
})
   
.controller('loginCtrl', function ($scope, $http, $ionicLoading, $state) {
	$scope.login = function(User){
		var user = User.nama;
		var pass = User.password;
		$http.get('http://localhost/konversiMU/getlogin.php?user='+user+'&pass='+pass)
		.then(function(result){
			if (result.data == "1") {
				alert('Sukses Login');
				$state.go('kontrolTab.konversiKeRupiah');
			}
			else{
				alert('Username dan Password salah');
			}
		})
	}
})
   
.controller('signupCtrl', function ($scope,$http,$ionicLoading,$ionicPopup,$state) {
 $scope.akun = {
			nama 	 : '',
			password : '',
			id 		 : '',
			type 	 : ''
	}


	$scope.showPopup = function(judul,subjudul){
		var popup = $ionicPopup.show(
			{
				title 		: judul,
				subTittle 	: subjudul,
				scope 		: $scope,
				buttons		: [
					{
						text  : 'Oke',
						type  : 'button-calm',
						onTap : function(e){
							// $state.go('login');
						}

					}
					
					,{
						text  : '<b>Kembali</b>',
						type  : 'button-assertive',
						onTap : function(e){
							$state.go('signup');
						}

					}
				]
			}
		);
	}
	
	$scope.pendaftaran = function(akun){
		var baseUrl = "http://localhost/konversiMU/";
		
		$ionicLoading.show();
		
		$http.post(baseUrl + "pendaftaranAkun.php",{
			nama		: akun.nama,
			password	: akun.password,
			id 		 	: akun.id,
			type 	 	: akun.type
		})
		.then(function(result){
			$scope.status = result.data;
			console.log(result.data);
			if(result.data=="2"){
				$scope.showPopup("Primary Key","not Allowed");
			}
			else if(result.data=="1"){
				$scope.showPopup("Sukses","proses insert sukses");
			}
			else{
				$scope.showPopup("Error Mo","check konfigurasi anda")
			}


			$ionicLoading.hide();
		})
		
		
	}

})
 
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
		});

    




});
 
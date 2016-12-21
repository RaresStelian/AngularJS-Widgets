(function(){

	angular.module('app',[])
		.controller('mainCtrl', function ($scope) {
			$scope.user1={
				name:"Rares-Stelian Pop",
				adress:{
					street:"Andrei-Muresanu",
					city:"Bistrita",
					Planet:"Earth"
				},
				friends: [
				'ana',
				'maria',
				'iulia'
				]
			}
			$scope.user2={
				name:"Iulia-Andreea Borgovan",
				adress:{
					street:"Sucevei",
					city:"Bistrita",
					Planet:"Earth"
				},
				friends: [
				'Alina',
				'Mara',
				'Andreea'
				]
			}
		}),
		
	angular.module('app')	
		.directive('userInfoCard', function() 
			 {
				return {
					templateUrl:"userInfoCard.html",
					restrict:'E',
					scope:{
						user: '=',
						initialCollapsed:'@collapsed'
					},
					controller:function ($scope) {
						//$scope.collapsed=false;
						$scope.collapsed=($scope.initialCollapsed==='true');
						$scope.KnightMe=function(user){
						user.rank="Knight";
						}
						$scope.collapse=function(){
							$scope.collapsed=!$scope.collapsed;
						}
						$scope.removeFriend=function(friend){
							var idx=$scope.user.friends.indexOf(friend);
							if(idx > -1){
								$scope.user.friends.splice(idx , 1 );
							}
						}	
					}					
			}
		});

	angular.module('app')	
		.directive('removeFriend', function(){
			return{
				restrict:'E',
				templateUrl:"removeFriend.html",
				scope: {
					notifyParent:'&method'
				},
				controller: function($scope){
					$scope.removing=false; 
						$scope.startRemove=function(){
							$scope.removing=true;
						}	
						$scope.cancelRemove=function(){
							$scope.removing=false;
						}	
						$scope.confirmRemove=function(){
							$scope.notifyParent();
						}
				}
			}
		});
	angular.module('app')
		.directive('adress',function () 
		    {
		   		return {
		   			restrict: 'E',
		   			scope:true,
		   			templateUrl:'adress.html',
		   			controller:function($scope){
		   				$scope.collapsed=false;
		   				$scope.collapseAdress=function(){
		   				$scope.collapsed=true;
		   				};
		   				$scope.expandAdress=function(){
		   				$scope.collapsed=false;
		   				}
		   			}
		   			   
		   		}
	    });
			   	
			   

}());
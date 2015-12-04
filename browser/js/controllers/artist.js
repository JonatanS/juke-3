app.controller('ArtistCtrl', function ($scope, $rootScope, PlayerFactory, ArtistFactory, $stateParams) {
	ArtistFactory.fetchById($stateParams.id)
	.then(function (artist) {
		$scope.artist = artist;
		console.log(artist);
	});

});
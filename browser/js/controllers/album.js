app.controller('AlbumCtrl', function ($scope, $rootScope, PlayerFactory, AlbumFactory, $stateParams) {

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song, optionalSongList) {
		//console.log('OPT:' + optionalSongList);
		var songs = optionalSongList ? optionalSongList : $scope.album.songs;
		PlayerFactory.start(song, songs);
	};

	AlbumFactory.fetchById($stateParams.id)
	.then(function (album) {
		$scope.album = album;
		console.log($scope.album.songs);
	});
});

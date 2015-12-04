app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});
	$rootScope.$on('changeView', function (evt, data) {
		console.log("GOT IT");
		$scope.showMe = (data.name == 'allAlbums');
	});
	$scope.viewAlbum = function (albumId) {
		$rootScope.$broadcast('changeView', {
			name: 'oneAlbum',
			id: albumId
		});
	};
});

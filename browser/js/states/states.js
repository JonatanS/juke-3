
app.config(function ($stateProvider) {

	// Album states
	$stateProvider.state('albums', {
        templateUrl: '/templates/albums.html',
        controller: 'AlbumsCtrl',
        url: '/albums'
	});

	$stateProvider.state('album', {
		templateUrl: '/templates/album.html',
		controller: 'AlbumCtrl',
		url: '/albums/:id'
	})



	$stateProvider.state('artists', {
		templateUrl: '/templates/artists.html',
		controller: 'ArtistsCtrl',
		url: '/artists'
	});
});


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


	// Artist states
	$stateProvider.state('artists', {
		templateUrl: '/templates/artists/artists.html',
		controller: 'ArtistsCtrl',
		url: '/artists'
	});

	$stateProvider.state('artist', {
		templateUrl: '/templates/artists/artist.html',
		controller: 'ArtistCtrl',
		url: '/artists/:id'
	});

	//CHILD STATES
		// Album states
	$stateProvider.state('artist.albums', {
        templateUrl: '/templates/artists/albums.html',
        url: '/artists/:id/albums'
	});
	$stateProvider.state('artist.songs', {
        templateUrl: '/templates/artists/songs.html',
        url: '/artists/:id/songs',
        controller: 'AlbumCtrl'
	});
});

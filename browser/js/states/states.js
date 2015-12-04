
app.config(function ($stateProvider) {
	$stateProvider.state('allAlbums', {
        templateUrl: '/templates/albums.html',
        controller: 'AlbumsCtrl',
        url: '/albums'
	});
	$stateProvider.state('allArtists', {
		templateUrl: '/templates/artists.html',
		controller: 'ArtistsCtrl',
		url: '/artists'
	});
});
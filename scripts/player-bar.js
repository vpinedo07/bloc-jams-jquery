{
    $('button#play-pause').on('click', function () {
        player.playPause();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function () {
        if (player.playState === 'playing') {

            //Obtiene el número de canción actual del array Songs
            const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

            //Obtiene el número de la siguiente canción
            const nextSongIndex = currentSongIndex + 1;

            //Identifica si se está reproduciendo una canción del álbum
            if (nextSongIndex < album.songs.length) {
                //Obtiene los datos de la siguiente canción 
                const nextSong = album.songs[nextSongIndex];
                player.playPause(nextSong);
            }
        }

    });
}
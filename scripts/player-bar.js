{

    $('button#play-pause').on('click', function () {
        helper.playPauseAndUpdate(); //player.playPause();
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
                helper.playPauseAndUpdate(nextSong); //player.playPause(nextSong);
            }
        }

    });

    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
    });

    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);
    });

    setInterval(() => {
        //console.log("Acción");
        if (player.playState !== 'playing') {
            return;
        }

        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;

        $('#time-control .current-time').text(player.prettyTime(currentTime));

        $('#time-control input').val(percent);

    }, 1000);

    $('button#previous').on('click', function () {
        if (player.playState === 'playing') {

            //Obtiene el número de canción actual del array Songs
            const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

            //Obtiene el número de la siguiente canción
            const previousSongIndex = currentSongIndex - 1;

            //Identifica si se está reproduciendo una canción del álbum
            if (previousSongIndex >= 0) {
                //Obtiene los datos de la siguiente canción 
                const previousSong = album.songs[previousSongIndex];
                helper.playPauseAndUpdate(previousSong);//player.playPause(previousSong);
            }
        }

    });
}
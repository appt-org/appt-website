# Audio description - Jetpack Compose

In Jetpack Compose, the [`MediaPlayer`](https://developer.android.com/reference/android/media/MediaPlayer) has support for multiple audio tracks. Use the [`selectTrack`](https://developer.android.com/reference/android/media/MediaPlayer#selectTrack(int)) method to select the correct audio track.

The code example belows shows a basic implementation of selecting an audio description track embedded inside a video.

```kotlin
var mediaPlayer: MediaPlayer? by remember { mutableStateOf(null) }
var error by remember { mutableStateOf<String?>(null) }
val currentContext = LocalContext.current

DisposableEffect(Unit) {
    val player = MediaPlayer.create(currentContext, R.raw.video)
    mediaPlayer = player

    try {
        player.trackInfo.forEachIndexed { index, trackInfo ->
            if (trackInfo.trackType == MediaPlayer.TrackInfo.MEDIA_TRACK_TYPE_AUDIO) {
                player.selectTrack(index)
                return@forEachIndexed
            }
        }
        player.start()
    } catch (e: Exception) {
        e.printStackTrace()
        error = e.message
    }

    onDispose {
        player.release()
        mediaPlayer = null
    }
}
```

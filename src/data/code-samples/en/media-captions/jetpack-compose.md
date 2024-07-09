# Captions - Jetpack Compose

In Jetpack Compose, captions can be added by using [`TimedText`](https://developer.android.com/reference/android/media/TimedText) inside a [`MediaPlayer`](https://developer.android.com/reference/android/media/MediaPlayer). The code example below shows a basic example.

```kotlin
val context = LocalContext.current
var mediaPlayer by remember { mutableStateOf<MediaPlayer?>(null) }
var error by remember { mutableStateOf<String?>(null) }

DisposableEffect(Unit) {
    // Create a MediaPlayer instance and set up timed text
    val player = MediaPlayer.create(context, R.raw.video)
    try {
        val mimeType = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            MediaFormat.MIMETYPE_TEXT_SUBRIP
        } else {
            MediaPlayer.MEDIA_MIMETYPE_TEXT_SUBRIP
        }

        player.addTimedTextSource("/assets/appt.srt", mimeType)
        player.trackInfo.forEachIndexed { index, trackInfo ->
            if (trackInfo.trackType == MediaPlayer.TrackInfo.MEDIA_TRACK_TYPE_TIMEDTEXT) {
                player.selectTrack(index)
                return@forEachIndexed
            }
        }
        player.setOnTimedTextListener { _, timedText ->
            // Handle timed text display here
        }
        player.start()
    } catch (e: Exception) {
        e.printStackTrace()
        error = e.message
    }
    mediaPlayer = player
    onDispose {
        player.release()
        mediaPlayer = null
    }
}
```

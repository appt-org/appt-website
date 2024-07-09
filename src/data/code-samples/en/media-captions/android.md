# Captions - Android

On Android, captions can be added by using [`TimedText`](https://developer.android.com/reference/android/media/TimedText) inside a [`MediaPlayer`](https://developer.android.com/reference/android/media/MediaPlayer). The code example below shows a basic example.

```kotlin
val player = MediaPlayer.create(this, R.raw.video)
val mimeType = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
    MediaFormat.MIMETYPE_TEXT_SUBRIP
} else {
    MediaPlayer.MEDIA_MIMETYPE_TEXT_SUBRIP
}
try {
    player.addTimedTextSource("/assets/appt.srt", mimeType)
    player.trackInfo.forEachIndexed { index, trackInfo ->
        if (trackInfo.trackType == TrackInfo.MEDIA_TRACK_TYPE_TIMEDTEXT) {
            player.selectTrack(index)
            return@forEachIndexed
        }
    }
    player.setOnTimedTextListener(this)
    player.start()
} catch (e: Exception) {
    e.printStackTrace()
}
```

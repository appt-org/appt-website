# Live captions - Jetpack Compose

In Jetpack Compose, we recommend using a library such as [`Media3`](https://github.com/androidx/media), also known as `ExoPlayer`, to support live captions. Media3 is developed by Google and is an open-source alternative to Android's [`MediaPlayer`](https://developer.android.com/reference/android/media/MediaPlayer) for audio and video playback. Many code examples can be found in the [Camera & Media dev center](https://developer.android.com/media). You can use [`DefaultTrackSelector`](https://developer.android.com/reference/kotlin/androidx/media3/exoplayer/trackselection/DefaultTrackSelector) in combination with [`DefaultHttpDataSource.Factory`](https://developer.android.com/reference/androidx/media3/datasource/DefaultHttpDataSource.Factory) to show subtitles.

```kotlin
val context = LocalContext.current
var exoPlayer by remember { mutableStateOf<ExoPlayer?>(null) }

DisposableEffect(Unit) {
    // Create a track selector with preferred text language
    val trackSelector = DefaultTrackSelector(context).apply {
        setParameters(buildUponParameters().setPreferredTextLanguage("nl"))
    }
    val player = ExoPlayer.Builder(context)
        .setTrackSelector(trackSelector)
        .build()
    val dataSourceFactory = DefaultHttpDataSource.Factory()
        .setUserAgent(Util.getUserAgent(context, "Appt"))
        .setAllowCrossProtocolRedirects(true)
    // Prepare the media source
    val mediaUri = Uri.parse("https://appt.org/live-video")
    val mediaSource = HlsMediaSource.Factory(dataSourceFactory)
        .createMediaSource(MediaItem.fromUri(mediaUri))
    player.setMediaSource(mediaSource)
    player.prepare()
    player.playWhenReady = true
    exoPlayer = player
    onDispose {
        player.release()
        exoPlayer = null
    }
}
```

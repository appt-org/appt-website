# Frequent flashes - Android

On Android, flashing content often uses [`Executors`](https://developer.android.com/reference/java/util/concurrent/Executors), [`Handler`](https://developer.android.com/reference/android/os/Handler), or [`Timer`](https://developer.android.com/reference/java/util/Timer). Check if these objects are used to show more than three flashes per second.

If your app contains any videos, also check if these contain more than three flashes per second.

```kotlin
private val handler = Handler(Looper.getMainLooper())
private val flashRunnable = object : Runnable {
    override fun run() {
        toggleFlashing()
        handler.postDelayed(this, 333) // Do not do this
    }
}

val flashingTextView = findViewById(R.id.flashingTextView)
flashingTextView.text = "Flashing Content"

isFlashing = true
handler.post(flashRunnable)
```

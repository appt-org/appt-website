# Bold text - Jetpack Compose

Android 12 has added the [`fontWeightAdjustment`](https://developer.android.com/reference/android/content/res/Configuration#fontWeightAdjustment) property. The property returns an integer between `1` and `1000`, which indicates the current user preference for increasing font weight. The constant [`FontStyle.FONT_WEIGHT_BOLD`](https://developer.android.com/reference/android/graphics/fonts/FontStyle#FONT_WEIGHT_BOLD) has a value of `700`.

```kotlin
@Composable
fun prefersBoldFont(): Boolean {
    val context = LocalContext.current
    val configuration = LocalConfiguration.current
    return if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) {
        false
    } else {
        configuration.fontWeightAdjustment >= FontStyle.FONT_WEIGHT_BOLD
    }
}
```

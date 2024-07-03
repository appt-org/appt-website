# Screen orientation - Jetpack Compose

In Jetpack Compose, make sure that the [`android:screenOrientation`](https://developer.android.com/guide/topics/manifest/activity-element#screen) attribute is not used anywhere.

Open Android Studio and press the Shift key twice to open the search dialog. Search for _“android:screenOrientation”_. In case there are search results, remove the attribute.

You probably need to make additional code adjustments to ensure all orientations work as intended.

There are two main approaches to changing the UI based on orientation in Jetpack Compose.

The first approach is to use the [`LocalConfiguration`](https://developer.android.com/reference/kotlin/androidx/compose/ui/platform/package-summary#localconfiguration) object to get the current screen orientation and change the UI based on that.

```kotlin
@Composable
fun ConfigChangeExample() {
    val configuration = LocalConfiguration.current
    when (configuration.orientation) {
        Configuration.ORIENTATION_LANDSCAPE -> {
            // Landscape logic
        }
        else -> {
            // Portrait logic
        }
    }
}
```

The second approach is to use the [`WindowSizeClass`](https://developer.android.com/reference/kotlin/androidx/compose/material3/windowsizeclass/package-summary) library. It allows you to cover more cases, such as different screen types (tablet, foldable, smartphone) or different situations (open/closed foldable, split window mode, etc.) to build an adaptive layout for all devices.

```kotlin
@Composable
fun WindowSizeExample(widthSizeClass: WindowWidthSizeClass) {
    when(widthSizeClass) {
        WindowWidthSizeClass.Expanded -> // orientation is landscape in most devices including foldables (width 840dp+)
        WindowWidthSizeClass.Medium -> // Most tablets are in landscape, larger unfolded inner displays in portrait (width 600dp+)
        WindowWidthSizeClass.Compact -> // Most phones in portrait
    }
}
```

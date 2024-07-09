# Element identification - Jetpack Compose

In Jetpack Compose, you should create your own `Composable`, that wraps standard `Composable` to re-use functionality across multiple screens.

In Android Studio, you can use the `Find Usages` option to check if resources are used on multiple screens. Go to your `drawable` folder, right click, and select the `Find Usages` option. You can also use the shortcut `Option + F7` on Mac, or `Alt + F7` on Windows.

```kotlin
// Custom close icon composable, which can be used in all place to provide correct accessibility label
@Composable
fun ApptCloseIcon(modifier: Modifier = Modifier) {
    Icon(
        painter = painterResource(R.drawable.ic_close),
        contentDescription = "Close", // you should get this label from strings.xml
        modifier = modifier
    )
}
```

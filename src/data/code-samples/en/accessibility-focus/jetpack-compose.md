# Accessibility focus - Jetpack Compose

In Jetpack Compose, to request focus for a `Composable`, you need to attach the [`focusRequester`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusRequester), and then call it from the desired place. The `Composable` must be focusable for this to take effect.

```kotlin
// Request focus on Composition start
val focusRequester = remember { FocusRequester() }
TextField(
    // ... textField setup
    modifier = Modifier.focusRequester(focusRequester)
)

LaunchedEffect(Unit) {
    focusRequester.requestFocus()
}
```

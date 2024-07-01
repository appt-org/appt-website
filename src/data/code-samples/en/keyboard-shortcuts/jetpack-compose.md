# Keyboard shortcuts - Jetpack Compose

In Jetpack Compose, you can use the [`onKeyEvent`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).onKeyEvent(kotlin.Function1)) modifier to activate shortcuts. This modifier gives you a reference to [`KeyEvent`](https://developer.android.com/reference/kotlin/androidx/compose/ui/input/key/KeyEvent), which can be used to determine key presses.

Use the [`isShiftPressed`](https://developer.android.com/reference/kotlin/androidx/compose/ui/input/key/KeyEvent#(androidx.compose.ui.input.key.KeyEvent).isShiftPressed()) or [`isCtrlPressed`](https://developer.android.com/reference/kotlin/androidx/compose/ui/input/key/KeyEvent#(androidx.compose.ui.input.key.KeyEvent).isCtrlPressed()) properties to ensure that shortcuts are not activated by accident.

```kotlin
Box(
    modifier = Modifier
        .onKeyEvent { event ->
            when (event.type) {
                KeyEventType.KeyUp -> {
                    if (event.key == Key.F && event.isCtrlPressed) {
                        // open find window
                        true
                    } else {
                        false
                    }
                }
                else -> false
            }
        }
) {
    // Box content...
}
```

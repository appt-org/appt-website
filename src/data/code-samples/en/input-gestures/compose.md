# Input gestures - Jetpack Compose

In Jetpack Compose, you can use [`pointerInput`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).pointerInput(kotlin.Any,kotlin.coroutines.SuspendFunction1)) modifier to handle common type of gestures.

A gesture should not be the only way to trigger actions. Make sure to provide a second way, such as a button, to trigger the same action.

```kotlin
Box(
    modifier = Modifier
        .pointerInput(Unit) {
            detectTransformGestures { _, _, zoom, _ ->
                // Provide alternative
            }
        }
) {
    // Scalable Box content ...
}
```

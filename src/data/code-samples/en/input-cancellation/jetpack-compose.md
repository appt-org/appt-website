# Input cancellation - Jetpack Compose

In Jetpack Compose, ypu should avoid execution actions before user finishes the click gesture (such as click or long press). Standard `Composables` or `Composables` with the [`clickable`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).clickable(kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,kotlin.Function0)) modifier have built-in support for cancellation.

If you need more fine-grained control over gestures, you need to wait for the action to be released. This can be done, by using for example, [`tryAwaitRelease`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/PressGestureScope#tryAwaitRelease()) for click actions.

```kotlin
        Box(
            modifier = Modifier
                .pointerInput(Unit) {
                    detectTapGestures(
                        onPress = {
                            if (tryAwaitRelease()) {
                                // your action ...   
                            }
                        }
                    )
                }
        )
```

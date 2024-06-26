# Element focus change - Jetpack Compose

In Jetpack Compose, you can use the [`onFocusChanged`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).onFocusChanged(kotlin.Function1)) modifier to listen for focus changes. It contains a property such, as [`isFocused`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusState#isFocused()), to check if composable currently has focus.

```kotlin
        Button(
            onClick = { /* Your click handling */ },
            modifier = Modifier
                .onFocusChanged {
                    if (it.isFocused) {
                        // logic in case view is focused
                    }
                }
        ) {
            // Button content ...
        }
```

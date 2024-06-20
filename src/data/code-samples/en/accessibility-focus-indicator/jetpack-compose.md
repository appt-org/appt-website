# Accessibility focus indicator - Android

In Jetpack Compose, you can easily create a focus indicator by using either the [`border`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary?hl=en#Card(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.material3.CardColors,androidx.compose.material3.CardElevation,androidx.compose.foundation.BorderStroke,kotlin.Function1)) property or the [`border`](https://developer.android.com/develop/ui/compose/modifiers-list#Border) modifier. Another way, is by implementing a custom `Indication`. You can read [official documentation](https://developer.android.com/develop/ui/compose/touch-input/focus/react-to-focus#advanced-visual-cues) for more details.

```kotlin
var color by remember { mutableStateOf(Color.White) }
Card(
    modifier = Modifier
        .onFocusChanged {
            color = if (it.isFocused) Color.Green else Color.White
        }
        .border(3.dp, color)
) {
    // Card content...
}
```

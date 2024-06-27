# Input errors - Jetpack Compose

With Jetpack Compose, you can use [`error`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).error(kotlin.String)) to let the assistive technologies know that an element has an error.

When used with [`liveRegion`]((https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).liveRegion()) the error will be read out when it appears.

```kotlin
// boolean to trigger error
var hasError: Boolean = true

modifier = Modifier.semantics {
        if (hasError) {
            error(errorText)
            liveRegion = LiveRegionMode.Polite
        }
    }
```
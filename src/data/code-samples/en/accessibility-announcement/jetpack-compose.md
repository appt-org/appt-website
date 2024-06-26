# Accessibility announcement - Jetpack Compose

With Jetpack Compose, you can use the [`liveRegion`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).liveRegion()) to announce changes in layout.

A live region only triggers when a change in the element has been detected.
It can also be triggered by saving the state.

Note: be careful with LiveRegionMode.Assertive, this will interrupt all ongoing speech.

```kotlin
// Remember state
var liveRegionEnabled by remember { mutableStateOf(false) } 

// Enable live region
if (somethingChanged) {
    liveRegionEnabled = true
}

// Define live region mode for element
modifier = Modifier.semantics {
    if (liveRegionEnabled) {
        liveRegion = LiveRegionMode.Polite
    }
}
```
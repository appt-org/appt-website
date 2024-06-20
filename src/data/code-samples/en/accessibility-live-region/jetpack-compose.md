# Accessibility live region - Android

In Jetpack Compose, a live region can be set inside [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier. To interrupt ingoing speech, also known as being assertive, use [`LiveRegionMode.Assertive`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/LiveRegionMode#Assertive()). To wait for ongoing speech, also known as being polite, use [`LiveRegionMode.Polite`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/LiveRegionMode#Polite()).

```kotlin
    Text(
        modifier = Modifier.semantics {
            liveRegion = LiveRegionMode.Polite // or LiveRegionMode.Assertive
        }
    )
```

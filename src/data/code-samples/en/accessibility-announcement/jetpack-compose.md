# Accessibility announcement - Jetpack Compose

In Jetpack Compose, to notify `Composable` state changes, you can use the [`liveRegion`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary.html#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).liveRegion()) property from [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier.

You can choose from two options for `liveRegion`:

+ [`LiveRegionMode.Polite`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/LiveRegionMode#Polite()) , which waits for the speech announcement in progress to complete

+ [`LiveRegionMode.Assertive`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/LiveRegionMode#Assertive()), which interrupts ongoing speech to immediately announce changes

If you don't specify the `liveRegion` property, it indicates to Compose that updates to this field would not be announced.

```kotlin
    var changingText by remember{ mutableStateOf("Changing text") }
    Text(
        text = changingText,
        modifier = Modifier.semantics {
            liveRegion = LiveRegionMode.Polite
            contentDescription = changingText // workaround for bug
        }
    )
```

Important: there is a [known issue](https://issuetracker.google.com/issues/225780131) with `liveRegion`, which prevents speech announcements when the `text` parameter is changed. The current workaround is to assign the same text to the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary.html#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) field.

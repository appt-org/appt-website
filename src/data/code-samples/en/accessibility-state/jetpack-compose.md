# Accessibility state - Jetpack Compose

In Jetpack Compose, you can use the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) modifier to set various accessibility properties.

You can set an accessibilty state by using the [`stateDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).stateDescription()) property. You can also use the [`selected`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).selected()) property to indicate a selected state.

```kotlin
Box(
    modifier = Modifier.semantics {
        // Custom state
        stateDescription = "Expanded"

        // Selected
        selected = true
    }
)
```

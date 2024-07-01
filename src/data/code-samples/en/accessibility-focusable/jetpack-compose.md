# Accessibility focusable - Jetpack Compose

In Jetpack Compose, you can use the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) to hide an element (like an image) from assistive technologies.
Set the `contentDescription` property to `null`, the assistive technology will then look for the [`text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).text()) property inside the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier, so make sure that isn't set.

If `Composable` doesn't expose the `contentDescription` property, you can use the `invisibleToUser` property inside the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier, to hide an element from assistive techonologies.

If, on the contrary, you want to make a certain element focusable, use the `focusable` modifier. By design, some `Composables` are focusable, such as a `Button` or a `Composable` with the `clickable` modifier attached to it.

```kotlin
// Set contentDescription to null
Image(
    painter = /* your Painter */,
    contentDescription = null,
)

// Make element invisible for assistive techonologies
Text(
    text = "",
    modifier = Modifier.semantics {
        invisibleToUser()
    }
)

// Make element focusable
Box(modifier = Modifier.focusable()) {
    // Box content...
}
```

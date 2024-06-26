# Accessibility focusable - Jetpack Compose

With Jetpack Compose, you can use the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) to hide an element (like an image) from assistive technologies.
Set the contentDescription to null, the assistive technology will then look for the [`text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).text()) element, so make sure that isn't set.

You can also use [`clearAndSetSemantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) to hide an element from assistive technologies.
It can be used to override any other semantics and set new properties. When left empty, the element will be ignored.

```kotlin
// Set contentDescription to null
modifier = Modifier.semantics {
    contentDescription = null
}

// Clear all semantics from element
modifier = Modifier.clearAndSetSemantics { 
    // Add nothing here to hide this element from assistive technologies
}
```

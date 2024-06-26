# Accessibility value - Jetpack Compose

With Jetpack Compose, you can use [`clearAndSetSemantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()).
This can be used to override any other semantics and set new properties.

```kotlin
// Override so label and value will be read out together
modifier = Modifier.clearAndSetSemantics {
    text = AnnotatedString("$label\n${value}")
}
```

# Accessibility value - Jetpack Compose

In Jetpack Compose, you can use the [`clearAndSetSemantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()).
This can be used to override any other semantics and set new properties.

```kotlin
// Override so label and value will be read out together
val label = "Text label"
val value = "Text value"
Text(
    text = value,
    modifier = Modifier.clearAndSetSemantics {
        text = AnnotatedString("$label\n${value}")
    }
)
```

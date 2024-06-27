# Descriptive headers - Jetpack Compose

In Jetpack Compose, headers can be marked as [`heading`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).heading()).

```kotlin
Text(
    text = "Heading text",
    modifier = Modifier.clearAndSetSemantics {
        heading()
    }
)
```

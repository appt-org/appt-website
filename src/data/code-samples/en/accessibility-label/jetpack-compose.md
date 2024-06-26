# Accessibility label - Jetpack Compose

With Jetpack Compose, you can use the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) or [`text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).text()) attribute to set an accessibility label.
Content description is used for more visual elements, like icons and images. Text is used for text elements.

You can pass any kind of [`AnnotatedString`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString) for greater control over pronunciation.

```kotlin
// set contentDescription
modifier = Modifier.semantics {
    contentDescription = "Appt"
}

// set text
modifier = Modifier.semantics {
    text = AnnotatedString("Appt")
}
```

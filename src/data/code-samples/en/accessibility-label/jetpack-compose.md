# Accessibility label - Jetpack Compose

In Jetpack Compose, you can use the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) or [`text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).text()) properties to set an accessibility label.
`ContentDescription` is used for more visual elements, like icons and images. `Text` is used for text elements.

You can pass any kind of [`AnnotatedString`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString) for greater control over pronunciation.

```kotlin
// set contentDescription
Box(modifier = Modifier.semantics {
    contentDescription = "Appt"
}) {
    // Box content...
}

// set text
Box(modifier = Modifier.semantics {
    text = AnnotatedString("Appt")
}) {
    // Box content...
}
```

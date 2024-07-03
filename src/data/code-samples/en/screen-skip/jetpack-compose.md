# Skip content - Jetpack Compose

In Jetpack Compose, skipping content is mostly relevant to [`TalkBack`](https://appt.org/en/docs/android/features/talkback) users. TalkBack includes a `local context menu` which allows users to jump to the following content types:

- Headings
- Links
- Controls
- Text
  - Paragraphs
  - Lines
  - Characters
  - Words

Jumping to `headings` and `links` is used most often.

Provide appropriate accessibility markup to your content by using either [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) or other methods, depending on the situation.

```kotlin
// Mark headings
Text(
    text = "Heading text",
    modifier = Modifier.clearAndSetSemantics {
        heading()
    }
)

// Mark links
val textWithLink = buildAnnotatedString {
    append("Learn more about ")
    // adding clickable url
    withLink(
        LinkAnnotation.Url(
            url = "https://appt.org",
            // adding style for the url
            styles = TextLinkStyles(
                style = SpanStyle(textDecoration = TextDecoration.Underline, color = Color.Blue)
            )
        )
    ) {
        append("Appt")
    }
}
Text(textWithLink)
```

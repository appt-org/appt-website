# Accessibility link - Jetpack Compose

In Jetpack Compose, starting from [`compose-ui 1.7.0`](https://developer.android.com/jetpack/androidx/releases/compose-ui#1.7.0-alpha07) you can use [`LinkAnnotation.Url`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/LinkAnnotation.Url) of [`AnnotatedString`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString) to add an inline link to the text.

Clicking on the link will automatically open it in the default browser.

```kotlin
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

Important: Starting from [`compose-ui 1.7.0`](https://developer.android.com/jetpack/androidx/releases/compose-ui#1.7.0-alpha07) [`ClickableText`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/package-summary#ClickableText(androidx.compose.ui.text.AnnotatedString,androidx.compose.ui.Modifier,androidx.compose.ui.text.TextStyle,kotlin.Boolean,androidx.compose.ui.text.style.TextOverflow,kotlin.Int,kotlin.Function1,kotlin.Function1)) and [`pushUrlAnnotation`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString.Builder#pushUrlAnnotation(androidx.compose.ui.text.UrlAnnotation)) will be deprecated.

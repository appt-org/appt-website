# Accessibility language - Jetpack Compose

In Jetpack Compose, you can use [`AnnotatedString`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString) inside the text `Composable` and then use [`SpanStyle`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/SpanStyle#localeList()) to set locale for a specific part of the text.

```kotlin
val text = buildAnnotatedString {  
    // Setting locale to Dutch for Appt string
    withStyle(style = SpanStyle(localeList = LocaleList("nl"))) {  
        append("Appt")  
    }  
}  
Text(text = text)
```

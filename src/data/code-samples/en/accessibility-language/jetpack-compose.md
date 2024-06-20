# Accessibility language - Jetpack Compose

In Jetpack Compose, you can use [`AnnotatedString`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/AnnotatedString) inside text `Composable`, and set locale using [`SpanStyle`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/SpanStyle#localeList()).

```kotlin
val text = buildAnnotatedString {  
    withStyle(style = SpanStyle(localeList = LocaleList("nl"))) {  
        append("Appt")  
    }  
}  
Text(text = text)
```

# Localization - Jetpack Compose

In Jetpack Compose, you can use the [`createConfigurationContext`](https://developer.android.com/reference/android/content/Context#createConfigurationContext(android.content.res.Configuration)) method to load resources in the correct locale. This is especially important for users of screen readers.

```kotlin
val context = LocalContext.current
val localizedContext = remember {
    val locales = LocaleList.forLanguageTags("nl-NL")
    val configuration = context.resources.configuration
    configuration.setLocales(locales)
    context.createConfigurationContext(configuration)
}
val localizedString = localizedContext.resources.getString(R.string.appt)

Text(text = localizedString)
```

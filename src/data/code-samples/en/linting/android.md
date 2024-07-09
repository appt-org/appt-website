# Linting - Android

On Android, you can use [`Android Lint`](https://developer.android.com/studio/write/lint) to improve the quality of your code.

`Android Lint` is bundled with Android Studio and enabled by default. It automatically performs checks for Kotlin, Java and XML source files.

You can suppress lint warning by using the [`@SuppressLint`](https://developer.android.com/reference/kotlin/android/annotation/SuppressLint) annotation. This can be useful in situations where a lint check is not relevant, or it is the only possible way to implement the desired behavior.

To manually run configured lint and other IDE inspections, select `Code > Inspect Code`. The results of the inspection appear in the `Inspection Results` window.

```kotlin
// Suppressing java script enabled warning
val webView: WebView
@SuppressLint("SetJavaScriptEnabled")
webView.settings.javaScriptEnabled = true
```

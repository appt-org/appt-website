# Accessibility name - Jetpack Compose

In Jetpack Compose, the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) attribute is used to set an accessibility name.

```kotlin
Box(modifier = Modifier.semantics {
    contentDescription = "Appt"
}) {
    // Box content...
}
```

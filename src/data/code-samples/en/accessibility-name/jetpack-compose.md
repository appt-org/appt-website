# Accessibility name - Jetpack Compose

With Jetpack Compose, the [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) attribute is used to set an accessibility name.

```kotlin
modifier = Modifier.semantics {
    contentDescription = "Appt"
}
```

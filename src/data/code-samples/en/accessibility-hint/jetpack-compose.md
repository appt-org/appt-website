# Accessibility hint - Jetpack Compose

In Jetpack Compose, you can use [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) parameter inside [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) modifier block to set a hint.

```kotlin
Button(
    onClick = { /*Handle button click*/ },
    modifier = Modifier.semantics { contentDescription = "Opens the Appt website" }
) {
    // Button content...
}
```

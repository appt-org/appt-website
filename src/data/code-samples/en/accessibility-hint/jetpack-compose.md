# Accessibility hint - Jetpack Compose

In Jetpack Compose, you can use [`contentDescription`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).contentDescription()) parameter inside [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) modifier block to set a hint.

For the [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(androidx.compose.ui.text.input.TextFieldValue,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)) composable, you can use the `placeholder` parameter to set a hint.

```kotlin
// Set hint for a Button
Button(
    onClick = { /*Handle button click*/ },
    modifier = Modifier.semantics { contentDescription = "Opens the Appt website" }
) {
    // Button content...
}

// Set hint for a TextField
TextField(
    value = "",
    onValueChange = { /* State update logic */ },
    placeholder = { Text("Opens the Appt website") }
)
```

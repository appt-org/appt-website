# Input keyboard type - Android

In Jetpack Compose, you can set a keyboard type by using the [`KeyboardType`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType) class in `keyboardOptions` property of [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(kotlin.String,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)).

The following constants are defined for `KeyboardType`:

- `Unspecified`: default keyboard type
- `Text`: for entering regular text
- `Ascii`: for entering ASCII characters
- `Number`: for entering digits
- `Phone`: for entering phone numbers
- `Uri`: for entering URIs
- `Email`: for entering email addressses
- `Password`: for entering password
- `NumberPassword`: for entering number password
- `Decimal`: for entering decimals

Example of using `KeyboardType`:

```kotlin
    TextField(
        value = "",
        onValueChange = { /* State update logic */ },
        keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number)
    )
```

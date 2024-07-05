# Input keyboard type - Android

In Jetpack Compose, you can set a keyboard type by using the [`KeyboardType`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType) class in `keyboardOptions` property of [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(kotlin.String,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)).

The following constants are defined for `KeyboardType`:

- [`Ascii`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Ascii()): for entering ASCII characters
- [`Decimal`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Decimal()): for entering decimals
- [`Email`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Email()): for entering email addresses
- [`Number`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Number()): for entering digits
- [`NumberPassword`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#NumberPassword()): for entering number password
- [`Password`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Password()): for entering password
- [`Phone`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Phone()): for entering phone numbers
- [`Text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Text()): for entering regular text
- [`Unspecified`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Unspecified()): default keyboard type
- [`Uri`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Uri()): for entering URIs

Example of using `KeyboardType`:

```kotlin
TextField(
    value = "",
    onValueChange = { /* State update logic */ },
    keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number)
)
```

# Input keyboard type - Android

In Jetpack Compose, you can set a keyboard type by using the [`KeyboardType`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType) class in `keyboardOptions` property of [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(kotlin.String,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)).

The following constants are defined for `KeyboardType`:

- [`Unspecified`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Unspecified()): default keyboard type
- [`Text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Text()): for entering regular text
- [`Ascii`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Ascii()): for entering ASCII characters
- [`Number`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Number()): for entering digits
- [`Phone`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Phone()): for entering phone numbers
- [`Uri`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Uri()): for entering URIs
- [`Email`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Email()): for entering email addressses
- [`Password`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Password()): for entering password
- [`NumberPassword`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#NumberPassword()): for entering number password
- [`Decimal`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType#Decimal()): for entering decimals

Example of using `KeyboardType`:

```kotlin
TextField(
    value = "",
    onValueChange = { /* State update logic */ },
    keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number)
)
```

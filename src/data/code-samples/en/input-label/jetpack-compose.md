# Input label - Android

In Jetpack Compose, there is no built-in way to link a label between different composables. You can vote for this feature in the following [Google issue tracker ticket](https://issuetracker.google.com/issues/165034732).

As an alternative, you can use the `label` property of [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(kotlin.String,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)) to provide a hint to the user. Such `label` would be automatically announcement by accessibility service.

```kotlin
    TextField(
        value = "",
        onValueChange = { /* State update logic */ },
        label = { Text("Enter your name") }
    )
```

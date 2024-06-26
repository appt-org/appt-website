# Input errors - Jetpack Compose

In Jetpack Compose, you can use [`error`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).error(kotlin.String)) function inside the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier to announce an error message to the accessibility service. Such message will be automatically announced but will not be shown to user. To show the message, use `label` property of [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(androidx.compose.ui.text.input.TextFieldValue,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)) in conjunction with `isError`, which automatically changes the appearance of the [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(androidx.compose.ui.text.input.TextFieldValue,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)).

```kotlin
        var errorMessage by remember { mutableStateOf("") }
        val isError = remember(errorMessage) { errorMessage.isNotEmpty() }

        TextField(
            value = "",
            label = {
                Text(errorMessage.ifEmpty { "TextField label" })
            },
            isError = isError,
            onValueChange = { /* State update logic */ },
            modifier = Modifier
                .semantics {
                    if (errorMessage.isNotEmpty()) {
                        error(errorMessage)
                    }
                }
        )
```

Important: Check if the import `androidx.compose.ui.semantics.error` is present when using the [`error`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).error(kotlin.String)) function; otherwise, Kotlin will use the standard [`error`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/error.html) function, which throws an `IllegalStateException` with your message.

# Search functionality - Jetpack Compose

In Jetpack Compose, there is no built-in Composable to perform a search. Instead, you need to create one using the [`TextField`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#TextField(androidx.compose.ui.text.input.TextFieldValue,kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Boolean,kotlin.Boolean,androidx.compose.ui.text.TextStyle,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.text.input.VisualTransformation,androidx.compose.foundation.text.KeyboardOptions,androidx.compose.foundation.text.KeyboardActions,kotlin.Boolean,kotlin.Int,kotlin.Int,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,androidx.compose.material.TextFieldColors)) composable.

```kotlin
// Example of SearchView build using TextField
TextField(
    value = searchQuery,
    onValueChange = { searchQuery = it },
    modifier = Modifier
        .fillMaxWidth()
        .padding(8.dp),
    placeholder = {
        Text(text = "Search...")
    },
    singleLine = true,
    colors = TextFieldDefaults.textFieldColors(
        backgroundColor = Color.White,
        focusedIndicatorColor = Color.Blue,
        unfocusedIndicatorColor = Color.Gray
    )
)
```

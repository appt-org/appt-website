# Text truncation - Jetpack Compose

In Jetpack Compose, you can avoid text truncation by removing all instances of [`maxLines`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Text(kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.font.FontStyle,androidx.compose.ui.text.font.FontWeight,androidx.compose.ui.text.font.FontFamily,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextDecoration,androidx.compose.ui.text.style.TextAlign,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextOverflow,kotlin.Boolean,kotlin.Int,kotlin.Int,kotlin.Function1,androidx.compose.ui.text.TextStyle)) from your app. You should also avoid using fixed values for any heights or widths.

```kotlin
Text(
    text = "Appt",
    maxLines = 1 // Do not set maxLines
)

Column(
  modifier = Modifier
    .width(100.dp)  // Do not use fixed width
    .height(100.dp) // Do not use fixed height
) {
    // Content
}
```

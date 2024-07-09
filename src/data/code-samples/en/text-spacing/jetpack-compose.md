# Text spacing - Jetpack Compose

In Jetpack Compose, you can use the following properties to change text spacing:

- [`letterSpacing`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/TextStyle#letterSpacing()): set spacing between letters
- [`lineHeight`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/TextStyle#lineHeight()): set spacing between lines
- [`baselineShift`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/TextStyle#baselineShift()): change how much text is shifted up from current baseline
- [`LineHeightStyle.Alignment`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/style/LineHeightStyle.Alignment): defines how text is aligned in the space provided by the line height
- [`padding`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).padding(androidx.compose.ui.unit.Dp)): set spacing between paragraphs

```kotlin
Text(
    text = "Appt",
    style = TextStyle(
        letterSpacing = 3.sp,
        lineHeight = 20.sp,
        baselineShift = BaselineShift(1.5F),
        lineHeightStyle = LineHeightStyle(
            alignment = LineHeightStyle.Alignment.Proportional,
        )
    ),
    modifier = Modifier
        .padding(bottom = 20.dp)
)
```

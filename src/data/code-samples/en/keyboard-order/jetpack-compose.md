# Keyboard order - Jetpack Compose

In Jetpack Compose, to change the default focus traversal order for navigation, you can use the [`focusProperties`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/package-summary#(androidx.compose.ui.Modifier).focusProperties(kotlin.Function1)) modifier to specify the item that should receive focus when navigating up, down, or in any other direction.

You can use the following [`focusProperties`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/package-summary#(androidx.compose.ui.Modifier).focusProperties(kotlin.Function1)):

- [`next`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#next()): specifies which element should receive focus when navigating to the next.
- [`previous`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#previous()): specifies which element should receive focus when navigating to the previous.
- [`up`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#up()): specifies which element should receive focus when navigating up.
- [`down`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#down()): specifies which element should receive focus when navigating down.
- [`left`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#left()): specifies which element should receive focus when navigating to the left.
- [`right`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#right()): specifies which element should receive focus when navigating to the right.
- [`start`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#start()): specifies which element should receive focus when navigating to the left in LTR mode and right in RTL mode.
- [`end`](https://developer.android.com/reference/kotlin/androidx/compose/ui/focus/FocusProperties#end()): specifies which element should receive focus when navigating to the right in LTR mode and left in RTL mode.

```kotlin
// Create set of reference for each Composable
val (first, second, third, fourth) = remember { FocusRequester.createRefs() }
Button(
    onClick = { },
    modifier = Modifier
        .focusRequester(fourth)
        .focusProperties {
            down = third
            right = second
        }
) {
    // Button content...
}
```

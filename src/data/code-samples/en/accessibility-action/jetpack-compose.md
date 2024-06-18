# Accessibility action - Android

In Jetpack Compose, you can add custom actions for assistive technologies using the [`customActions`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).customActions()) property inside the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier.

```kotlin
    // add custom action
    Button(
        onClick = { /* Your click handler */ },
        modifier = Modifier
            .wrapContentSize()
            .semantics {
                customActions = listOf(
                    // your custom action
                    CustomAccessibilityAction(label = "Add bookmark") {
                        // Bookmark logic
                        true
                    }
                )
            }
    ) {
        Text("Bookmark button")
    }
```

There are several ways to override labels for default actions. For `Composables` that expose the `onClick` parameter, specify the [`label`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).onClick(kotlin.String,kotlin.Function0)) inside the [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier. The [`SemanticsActions`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/SemanticsPropertyReceiver) object provides a list of all predefined accessibility actions.

```kotlin
    // override label for button
    val buttonClickHandler: () -> Unit = { /* Your click handler */ }
    Button(
        onClick = buttonClickHandler,
        modifier = Modifier
            .semantics {
                onClick(label = "Add bookmark") {
                    buttonClickHandler.invoke()
                    true
                }
            }
    ) {
        // Button content
    }
```

If a `Composable` does not provide an `onClick` parameter, you can specify `label` when adding the [`clickable`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).clickable(kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,kotlin.Function0)) modifier.

```kotlin
    // override label for surface
    Surface(
        modifier = Modifier
            .clickable(onClickLabel = "Add bookmark") {
                /* Your click handler */
            }
    ) {
        // Surface content
    }
```

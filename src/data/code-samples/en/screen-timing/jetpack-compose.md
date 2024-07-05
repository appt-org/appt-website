# Adjustable timing - Jetpack Compose

On Android, a [`Toast`](https://developer.android.com/reference/android/widget/Toast) is often used display temporary messages. The display duration might be too short for people to read or hear the message.

We recommend displaying messages by using an [`AlertDialog`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#AlertDialog(kotlin.Function0,kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.ui.window.DialogProperties)) or [`Snackbar`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#snackbar) with the duration set to [`SnackbarDuration.Indefinite`](https://developer.android.com/reference/kotlin/androidx/compose/material3/SnackbarDuration#Indefinite). Don't forget to add a close button.

Also check whether [`Executors`](https://developer.android.com/reference/java/util/concurrent/Executors), [`Handler`](https://developer.android.com/reference/android/os/Handler) or [`Timer`](https://developer.android.com/reference/java/util/Timer) are used somewhere. If there are any time limits, make sure they can be extended.

```kotlin
val snackbarHostState = remember { SnackbarHostState() }
val scope = rememberCoroutineScope()
Scaffold(
    snackbarHost = { SnackbarHost(snackbarHostState) },
    floatingActionButton = {
        ExtendedFloatingActionButton(
            onClick = {
                // show snackbar as a suspend function
                scope.launch {
                    snackbarHostState.showSnackbar(
                        message = "Snackbar title",
                        actionLabel = "Appt",
                        withDismissAction = true,
                        duration = SnackbarDuration.Indefinite
                    )
                }
            }
        ) {
            // FAB content...
        }
    },
    content = { innerPadding ->
        // Scaffold content...
    }
)
```

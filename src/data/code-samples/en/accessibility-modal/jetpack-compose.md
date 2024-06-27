# Accessibility modal - Jetpack Compose

In Jetpack Compose, to set a title for an accessibility pane, you can use [`paneTitle`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).paneTitle()) inside [`semantics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)) block modifier.

It's recommended to set the pane title for high-level layouts, such as [`Scaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Scaffold(androidx.compose.foundation.layout.WindowInsets,androidx.compose.ui.Modifier,androidx.compose.material.ScaffoldState,kotlin.Function0,kotlin.Function0,kotlin.Function1,kotlin.Function0,androidx.compose.material.FabPosition,kotlin.Boolean,kotlin.Function1,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.ui.unit.Dp,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1)).

Please keep in mind that focus is not trapped when a pane title has been set.

```kotlin
Scaffold(modifier = Modifier.semantics {
    paneTitle = "Appt pane"
}) { paddingValues ->
    // Scaffold content...
}
```

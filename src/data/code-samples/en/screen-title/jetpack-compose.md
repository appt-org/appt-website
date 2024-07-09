# Screen title - Jetpack Compose

In Jetpack Compose, we recommend using a [`Scaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Scaffold(androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.material3.FabPosition,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) with an appropriate [`TopAppBar`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#TopAppBar(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function1,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,androidx.compose.material3.TopAppBarColors,androidx.compose.material3.TopAppBarScrollBehavior)) on each screen.

```kotlin
Scaffold(
    topBar = {
        TopAppBar(title = {
            Text("Appt homescreen")
        })
    }
) { innerPadding ->
    // Scaffold content ...
}
```

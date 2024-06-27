# Element position - Jetpack Compose

In Jetpack Compose, you should place your [`TopAppBar`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#TopAppBar(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,androidx.compose.material3.TopAppBarColors,androidx.compose.material3.TopAppBarScrollBehavior)) and [`BottomAppBar`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#BottomAppBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) in the same position on each screen. You can use [`Scaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Scaffold(androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.material3.FabPosition,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1)) to place such `Composables` consistently.

```kotlin
Scaffold(
    topBar = { TopAppBar( /* top app bar config */ ) },
    bottomBar = { BottomAppBar { /* bottom app bar content */ } }
) { paddingValues ->  
    // Scaffold content...
}
```

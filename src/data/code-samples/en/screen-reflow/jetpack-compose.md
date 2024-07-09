# Reflow - Jetpack Compose

In Jetpack Compose, all elements should be placed in a scrollable layout, such as a [`LazyList`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/package-summary#LazyColumn(androidx.compose.ui.Modifier,androidx.compose.foundation.lazy.LazyListState,androidx.compose.foundation.layout.PaddingValues,kotlin.Boolean,androidx.compose.foundation.layout.Arrangement.Vertical,androidx.compose.ui.Alignment.Horizontal,androidx.compose.foundation.gestures.FlingBehavior,kotlin.Boolean,kotlin.Function1)) or by adding [`verticalScroll`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).verticalScroll(androidx.compose.foundation.ScrollState,kotlin.Boolean,androidx.compose.foundation.gestures.FlingBehavior,kotlin.Boolean)) modifier to container Composables (e.g [`Column`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Column(androidx.compose.ui.Modifier,androidx.compose.foundation.layout.Arrangement.Vertical,androidx.compose.ui.Alignment.Horizontal,kotlin.Function1)) or [`Box`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Box(androidx.compose.ui.Modifier))). Never use fixed values for any heights or widths.

```kotlin
// Using LazyColumn
LazyColumn {
    item {
        Text(text = "Content should scroll!")
    }
}
// Using vericalScroll modifier
Column(modifier = Modifier.verticalScroll(rememberScrollState())) {
    Text(text = "Content should scroll!")
}
```

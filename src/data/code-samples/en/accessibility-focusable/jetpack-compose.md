# Accessibility focusable - Android

In Jetpack Compose, some `Composables` are focusable by design, such as a Button or a `Composable` with the [`clickable`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).clickable(kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,kotlin.Function0)) modifier attached to it. You can specifically add focusable behavior to a `Composable` using the [`focusable`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#(androidx.compose.ui.Modifier).focusable(kotlin.Boolean,androidx.compose.foundation.interaction.MutableInteractionSource)) modifier:

```kotlin
Box(Modifier.focusable()) {
    // Box content...
}
```

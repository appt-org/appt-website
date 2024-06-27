# Accessibility group - Jetpack Compose

With Jetpack Compose, you can group elements by using [`mergeDescendants`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)).
This will group all elements within this parent element and they will be focused and read out together.

```kotlin
modifier = Modifier.semantics(mergeDescendants = true) { }
```

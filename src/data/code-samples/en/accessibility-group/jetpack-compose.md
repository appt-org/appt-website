# Accessibility group - Jetpack Compose

In Jetpack Compose, you can group elements by using [`mergeDescendants`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.Modifier).semantics(kotlin.Boolean,kotlin.Function1)).
This will group all elements within this parent element and they will be focused and read out together.

```kotlin
// Merge all semantics of box elements
Box(modifier = Modifier
    .semantics(mergeDescendants = true) { }
) {
    // Box content ...
}
```

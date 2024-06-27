# Accessibility order - Jetpack Compose

With Jetpack Compose, you can use the [`traversalIndex`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).traversalIndex()) to alter the focus order of the screen.
The traversalIndex will give assistive technologies a clear order of traversing.

When a section of a screen is read out in an incorrect order, start by adding [`isTraversalGroup`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/package-summary#(androidx.compose.ui.semantics.SemanticsPropertyReceiver).isTraversalGroup()) to the parent Column, Row or Box. 
This will let assistive technologies know that this section is grouped and should be traversed, before moving on to a next section. 
Then add traversalIndex to elements in this group to fix any issues with the focus order.

It is possible to use isTraversalGroup and traversalIndex on the same element.

```kotlin
modifier = Modifier.semantics {
    isTraversalGroup = true
    traversalIndex = -1f
}
```
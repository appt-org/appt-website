# Accessibility role - Jetpack Compose

In Jetpack Compose you can use [`role`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role) to set the role of an element.

The following constants are defined for `Role`:

- `Button`: this element is a button
- `Checkbox`: this element is checkbox with two states (checked / unchecked)
- `DropdownList`: this element is drop down menu
- `Image`: this element is an image
- `RadioButton`: this element is a radio button
- `Switch`: this element is a switch
- `Tab`: this element is a tab which represents a single page of content using a text label and/or icon

```kotlin
Box(modifier = Modifier.semantics {
    role = Role.Button
})
```

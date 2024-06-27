# Accessibility role - Jetpack Compose

In Jetpack Compose you can use [`role`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role) to set the role of an element.

The following constants are defined for the `Role`:

- [`Button`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#Button()): this element is a button
- [`Checkbox`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#Checkbox()): this element is checkbox with two states (checked / unchecked)
- [`DropdownList`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#DropdownList()): this element is drop down menu
- [`Image`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#Image()): this element is an image
- [`RadioButton`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#RadioButton()): this element is a radio button
- [`Switch`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#Switch()): this element is a switch
- [`Tab`](https://developer.android.com/reference/kotlin/androidx/compose/ui/semantics/Role#Tab()): this element is a tab which represents a single page of content using a text label and/or icon

```kotlin
Box(modifier = Modifier.semantics {
    role = Role.Button
})
```

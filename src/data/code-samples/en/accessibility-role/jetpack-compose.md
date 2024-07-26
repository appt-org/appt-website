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
- [`ValuePicker`](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt;l=687?q=androidx.compose.ui.semantics.Role&ss=androidx%2Fplatform%2Fframeworks%2Fsupport): this element is a value picker and should support [accessibility scroll events](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent#TYPE_VIEW_SCROLLED)

For more information about the mapping, view the [`Role` class](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt;l=622?q=androidx.compose.ui.semantics.Role&ss=androidx%2Fplatform%2Fframeworks%2Fsupport), [`Role.toLegacyClassName()` method](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/autofill/AutofillUtils.android.kt;l=201?q=toLegacyClassName&ss=androidx%2Fplatform%2Fframeworks%2Fsupport) and [`populateAccessibilityNodeInfoProperties()` method](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/platform/AndroidComposeViewAccessibilityDelegateCompat.android.kt;l=759?q=classname&ss=androidx%2Fplatform%2Fframeworks%2Fsupport) in the Compose source code.

```kotlin
Box(modifier = Modifier.semantics {
    role = Role.Button
})
```

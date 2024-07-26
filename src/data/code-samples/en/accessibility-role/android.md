# Accessibility role - Android

On Android, you can use the [`setAccessibilityDelegate`](https://developer.android.com/reference/androidx/core/view/ViewCompat#setAccessibilityDelegate(android.view.View,androidx.core.view.AccessibilityDelegateCompat)) method of [`ViewCompat`](https://developer.android.com/reference/androidx/core/view/ViewCompat) to get a reference to [`AccessibilityNodeInfoCompat`](https://developer.android.com/reference/androidx/core/view/accessibility/AccessibilityNodeInfoCompat). This object contains many useful accessibility related methods.

You can set a role using the [`setRoleDescription`](https://developer.android.com/reference/androidx/core/view/accessibility/AccessibilityNodeInfoCompat#setRoleDescription(java.lang.CharSequence)) method. However, we recommend using the [`setClassName`](https://developer.android.com/reference/androidx/core/view/accessibility/AccessibilityNodeInfoCompat#setClassName(java.lang.CharSequence)) method over `setRoleDescription` to support multilingual roles. For example, set `Button::class.java.name` if an element behaves like a button. The role will be set to `Button` in English, and to its respective translation in other languages.

|Element type   | Class name                   |
|---------------|------------------------------|
|Button         | android.widget.Button        |
|Checkbox       | android.widget.CompoundButton|
|Drop down list | android.widget.Spinner       |
|Edit box       | android.widget.EditText      |
|Image          | android.widget.ImageView     |
|Toggle button  | android.widget.ToggleButton  |
|Radio button   | android.widget.RadioButton   |
|Progress bar   | android.widget.ProgressBar   |
|Value picker   | android.widget.NumberPicker  |

To indicate other element types, such as `Switch` or `Tab`, use `setRoleDescription`.

You can indicate a heading by using the [`setHeading`](https://developer.android.com/reference/androidx/core/view/accessibility/AccessibilityNodeInfoCompat#setHeading(boolean)) method. `ViewCompat` also contains a convenience method: [`setAccessibilityHeading`](https://developer.android.com/reference/androidx/core/view/ViewCompat#setAccessibilityHeading(android.view.View,%20boolean)).

```kotlin
ViewCompat.setAccessibilityDelegate(
    element,
    object : AccessibilityDelegateCompat() {
        override fun onInitializeAccessibilityNodeInfo(
            host: View,
            info: AccessibilityNodeInfoCompat
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)

            // Button
            info.className = Button::class.java.name

            // Image
            info.className = ImageView::class.java.name
            
            // Heading
            info.isHeading = true

            // Custom
            info.roleDescription = "Custom role"
        }
    }
)

// Convenience method
ViewCompat.setAccessibilityHeading(view, true)
```

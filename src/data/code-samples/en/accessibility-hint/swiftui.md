# Accessibility hint - SwiftUI

In SwiftUI, you can use the [`accessibilityHint`](https://developer.apple.com/documentation/swiftui/view/accessibilityhint(_:)-3i2vu) view modifier to provide an accessibility hint. When using VoiceOver, the accessibility hint is read after the element’s label and value, following a brief pause. This hint provides additional context about what will happen when the user interacts with the element. Use the hint to give users extra information about the outcome or the purpose of the element's action.

**Note:** Users have the option to disable accessibility hints in their device settings. Therefore, you should never place essential information in the hint. 

```swift
Button(action: {}, label: {
    Text("Search")
})
.accessibilityHint("Searches for accessibility articles")
```

# Text element - SwiftUI

In SwiftUI, you should use [`Text`](https://developer.apple.com/documentation/swiftui/text) view to display text. You can use [`textSelection`](https://developer.apple.com/documentation/swiftui/view/textselection(_:)) modifier to control whether users can select text within the view.

```swift
Text("Appt")
    .textSelection(.enabled)
```

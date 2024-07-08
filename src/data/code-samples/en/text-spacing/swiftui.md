# Text spacing - SwiftUI

In SwiftUI, text spacing can be achieved using a combination of modifiers:

- [`lineSpacing`](https://developer.apple.com/documentation/swiftui/view/linespacing(_:)): set spacing between lines
- [`kerning`](https://developer.apple.com/documentation/swiftui/text/kerning(_:)): set spacing between characters
- [`padding`](https://developer.apple.com/documentation/swiftui/view/padding(_:_:)): simulate paragraph spacing if needed.

```swift
Text("SwiftUI Text Example")
    // Line spacing
    .lineSpacing(20)
    // Letter spacing
    .kerning(3) 
    // Simulate paragraph spacing
    .padding(.bottom, 10)
```

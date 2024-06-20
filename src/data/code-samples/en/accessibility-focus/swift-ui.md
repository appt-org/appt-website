# Accessibility focus - SwiftUI

In SwiftUI, enhancing the accessibility of your app can be achieved by using the [accessibilityFocused(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:)) view modifier. This modifier allows you to bind an element's focus state to a boolean variable, enabling you to track and respond to focus changes in a dynamic and visually informative way.

```swift
// Property wrapper to track whether the email TextField is focused for accessibility
@AccessibilityFocusState private var isEmailFocused: Bool
@State private var email = ""
var body: some View {
    Form {
        TextField("Email", text: $email, prompt: Text("Email"))
            // Binds the focus state of this TextField to the 'isEmailFocused' property
            .accessibilityFocused($isEmailFocused)
    }
}
```

# Accessibility focus indicator - SwiftUI

On iOS, while it's not possible to alter the built-in focus indicators used by assistive technologies, you can visually enhance the accessibility of user interface elements by changing their appearance when they receive focus. This customization can help users better identify which element is active, especially those relying on visual cues.

In SwiftUI, you can dynamically change the visual appearance of views based on their focus state. For example, using the [`@AccessibilityFocusState`](https://developer.apple.com/documentation/swiftui/accessibilityfocusstate) property, you can track whether an element is focused and apply visual changes, such as altering the border color. This allows you to provide a clear, visual indicator of focus, improving the accessibility and usability of your app.

```swift
@AccessibilityFocusState private var isEmailFocused: Bool
@State private var email = ""
var body: some View {
    Form {
        TextField("Email", text: $email, prompt: Text("Email"))
            // Binds the focus state of this TextField to the 'isEmailFocused' property.
            .accessibilityFocused($isEmailFocused)
            // The border color changes based on whether the TextField is focused:
            .border(isEmailFocused ? .red : .clear)
    }
}
```

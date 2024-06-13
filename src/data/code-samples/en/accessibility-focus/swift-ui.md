# Accessibility focus - SwiftUI

In SwiftUI, you can use [accessibilityFocused(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:)) view modifier to set accessibility focus by binding it to the given boolean state value.

```Swift
var body: some View {
    @AccessibilityFocusState private var isEmailFocused: Bool
    @State private var email = ""

    var body: some View {
        TextField("email", text: $email, prompt: Text("email"))
            .accessibilityFocused($isEmailFocused)
    }
}
```

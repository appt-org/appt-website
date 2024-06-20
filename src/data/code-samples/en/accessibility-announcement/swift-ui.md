# Accessibility announcement - SwiftUI

In SwiftUI you track whenever the state of your app changes to post an accessibility message by using the [`UIAccessibility`](https://developer.apple.com/documentation/uikit/uiaccessibility) object. The [`post`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post) method can be used to post data to assistive technologies. Set the type to [`announcement`](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/1620176-announcement) and supply a `string` argument to announce something.

```swift
    @AccessibilityFocusState private var isEmailFocused: Bool
    @State private var email = ""
    var body: some View {
        Form {
            TextField("Email", text: $email, prompt: Text("Email"))
                // Bind the state change to a variable
                .accessibilityFocused($isEmailFocused)
        }
        // Track the state changes
        .onChange(of: isEmailFocused) { _, isEmailFocused in
            if isEmailFocused {
                // Post an announcement
                UIAccessibility.post(notification: .announcement, argument: "Email is selected for editing")
            }
        }
    }
```

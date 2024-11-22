# Target size - SwiftUI

In SwiftUI, to ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that all users, including those who rely on assistive technologies like VoiceOver, can easily interact with buttons without accidentally triggering them.

```swift
Button(action: {
    // Button action
}) {
    Text("Register")
        .padding() // Adds padding inside the button to make it large enough
        .frame(width: 24, height: 24) // Ensure the button's frame is at least 24x24 points
}

```

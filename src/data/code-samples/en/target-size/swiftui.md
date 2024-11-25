# Target size - SwiftUI

In SwiftUI, ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that all users, including those who rely on assistive technologies like [VoiceOver](/en/stats/screen-reader), can easily interact with buttons without accidentally triggering them.

```swift
HStack(spacing: 24) { // ensure minimum spacing between elements
    Button(action: {
        // Button action
    }) {
        Text("Register")
            .frame(minWidth: 24, minHeight: 24) // Ensure target has enough width and height
    }
    .buttonStyle(.borderedProminent)
    
    Button(action: {
        // Button action
    }) {
        Text("Login")
            .frame(minWidth: 24, minHeight: 24) // Ensure target has enough width and height
    }
    .buttonStyle(.borderedProminent)
}

```

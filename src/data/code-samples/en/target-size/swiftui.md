# Target size - SwiftUI

In SwiftUI, ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that users, can easily interact with buttons without accidentally triggering them.

```swift
HStack(spacing: 24) { // ensure minimum spacing between elements
    Button(action: {
        // Button action
    }) {
        Text("Register")
            // Ensure target has enough width and height
            .frame(minWidth: 24, minHeight: 24) 
    }
    .buttonStyle(.borderedProminent)
    
    Button(action: {
        // Button action
    }) {
        Text("Login")
            // Ensure target has enough width and height
            .frame(minWidth: 24, minHeight: 24)
    }
    .buttonStyle(.borderedProminent)
}

```

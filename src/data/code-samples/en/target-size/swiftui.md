# Target size - SwiftUI

In SwiftUI, ensure that interactive elements have a target size of at least 24x24 points and ideally 44x44 points. This size helps ensure that users can easily interact with targets such as buttons.

```swift
// Set sufficient spacing between elements
VStack(spacing: 24) { 
    Button(action: {
        // Button action
    }) {
        Text("Login")
            // Ensure target has sufficient width and height
            .frame(minWidth: 24, minHeight: 24) 
    }
}
```

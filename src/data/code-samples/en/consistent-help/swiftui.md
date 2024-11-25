# Consistent help - SwiftUI

In SwiftUI, place help buttons consistently across your app to enhance user experience and ensure that users can easily find assistance when needed. Help buttons should be positioned in a way that aligns with the app's overall layout and navigation patterns, such as in the top-right or bottom-right corners of a screen.

```swift
struct HelpButton: View {
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack {
                Image(systemName: "questionmark.circle.fill") // Help icon
                Text("Help")
            }
        }
    }
}
```

# Consistent help - SwiftUI

In SwiftUI, place help buttons consistently across your app to enhance user experience and ensure that users can easily find assistance when needed. Help buttons should be positioned in a way that aligns with the app's overall layout and navigation patterns, such as in the top-right or bottom-right corners of a screen.

```swift
struct HelpButton: View {
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: "questionmark.circle")
                .resizable()
                .scaledToFit()
                .frame(width: 20, height: 20)
                .accessibilityLabel("Help")
        }
        .buttonStyle(.plain)
    }
}

struct ContentView: View {
    var body: some View {
        VStack {
            // Place consistently across screens
            HelpButton {
                // Show help
            }
        }
    }
}
```

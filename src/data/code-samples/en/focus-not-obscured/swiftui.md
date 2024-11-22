# Focus not obscured - SwiftUI

In SwiftUI, to ensure accessibility compliance when overlaying UI elements, such as banners over a TextField, always consider the user's ability to interact with both elements effectively. Avoid permanently obscuring interactive elements like [`TextField`](https://developer.apple.com/documentation/swiftui/textfield), as this can prevent users from entering information and disrupt navigation.

The following example displays how not to compose the user interface that has a potential to obscure focus on focusable elements:

```swift
struct ContentView: View {
    @State private var text: String = ""
    @State private var showStickyNote: Bool = true
    
    var body: some View {
        ZStack { // Avoid obscuring elements by placing in ZStack
            // TextField at the bottom
            TextField("Your email address", text: $text)
            
            if showStickyNote {
                Text("View Promotional Offers")
                    .background(Color.yellow)
                    .cornerRadius(8)
                    .onTapGesture {
                        // Dismiss sticky note
                        withAnimation {
                            showStickyNote = false
                        }
                    }
            }
        }
    }
}
```

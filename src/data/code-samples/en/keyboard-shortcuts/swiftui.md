# Keyboard shortcuts - SwiftUI

In SwiftUI, you can use the [`keyboardShortcut`](https://developer.apple.com/documentation/swiftui/keyboardshortcut) view modifier to define key combinations that activate specific buttons or toggles. By specifying [`modifier`](https://developer.apple.com/documentation/swiftui/keyboardshortcut/modifiers) keys, you can prevent shortcuts from being accidentally activated.

```swift
@State private var isShowingSearchModal = false

var body: some View {
    VStack {
        Button("Search") {
            self.isShowingSearchModal = true
        }
        .keyboardShortcut("s", modifiers: .command)
        
        if isShowingSearchModal {
            SearchModalView(isShowing: $isShowingSearchModal)
        }
    }
}
```

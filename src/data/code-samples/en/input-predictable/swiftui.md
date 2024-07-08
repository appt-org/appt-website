# Input predictable - SwiftUI

In SwiftUI, when using the [`onChange`](https://developer.apple.com/documentation/swiftui/view/onchange(of:initial:_:)-4psgg) modifier to listen for changes in a [`TextField`](https://developer.apple.com/documentation/swiftui/textfield), ensure that you do not trigger a change in context when the text changes.

```swift
@State private var text = ""

var body: some View {
    TextField("Enter text", text: $text)
        .onChange(of: text) { _, newValue in
            // Handle text changes without changing the context.
            // You can add any validation or additional behaviour here.
        }
}
```

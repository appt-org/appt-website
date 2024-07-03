# Dark mode - SwiftUI

In SwiftUI, you can detect dark mode by checking if the [`colorScheme`](https://developer.apple.com/documentation/swiftui/environmentvalues/colorscheme) environment variable has been set to [`.dark`](https://developer.apple.com/documentation/swiftui/colorscheme/dark).

You can provide dark mode resources to let iOS automatically use the right resources. For example, inside `Assets.xcassets` you can add a `Dark` version for colors and images.

```swift
// Access the current color scheme environment value
@Environment(\.colorScheme) var colorScheme

var body: some View {
    Text("Appt")
        // Apply different colors depending on color scheme
        .foregroundColor(colorScheme == .light ? .black : .gray)
        .background(colorScheme == .light ? .white : .black)
}
```

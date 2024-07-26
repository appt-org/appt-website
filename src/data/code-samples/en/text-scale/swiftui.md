# Scale text - iOS

In SwiftUI, scaling text to match the user's preferred content size is straightforward. SwiftUI automatically supports [`Dynamic Type`](https://developer.apple.com/documentation/swiftui/dynamictypesize), which means your text will adapt to the user's preferred font size set in the device settings.

```swift
Text("Appt")
    // Scales text automatically
    .font(.title)
```

You can also customize the scaling behavior if you're using custom fonts or want more control. Use the [`custom(_:size:relativeTo:)`](https://developer.apple.com/documentation/swiftui/font/custom(_:size:relativeto:)) modifier method to ensure the text scales properly.

```swift
var body: some View {
    Text("Appt")
        .scaledFont(name: "Roboto-Regular", size: 24)
}

struct ScaledFont: ViewModifier {
    var name: String
    var size: CGFloat
    var relativeTo: Font.TextStyle
    
    func body(content: Content) -> some View {
        content
            .font(.custom(name,
                          size: size,
                          relativeTo: relativeTo))
    }
}

extension View {
    func scaledFont(name: String,
                    size: CGFloat,
                    relativeTo: Font.TextStyle = .body) -> some View {
        self.modifier(ScaledFont(name: name,
                                 size: size,
                                 relativeTo: relativeTo))
    }
}
```

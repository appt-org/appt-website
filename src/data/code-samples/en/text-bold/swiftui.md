# Bold text - SwiftUI

In SwiftUI, the [`legibilityWeight`](https://developer.apple.com/documentation/swiftui/environmentvalues/legibilityweight) environment variable can be used to check whether the user prefers bold text. By default, SwiftUI views automatically adapt to this preference. However, if you have manually set a specific font weight in your view, you should include a condition to check and respect the system's bold text setting to ensure readability.

```swift
@Environment(\.legibilityWeight) private var legibilityWeight

var body: some View {
    Text("Welcome to Appt")
        .fontWeight(legibilityWeight == .bold ? .bold : .regular)
}
```

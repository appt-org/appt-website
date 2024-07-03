# Descriptive headers - SwiftUI

In SwiftUI, headers can be created with [`Text`](https://developer.apple.com/documentation/swiftui/text) views and supplied with a `String` value.

It is recommended to set the font style to `.headline` and add the `.isHeader` trait to improve navigation when using assistive technologies.

```swift
Text("Appt Settings")
    // Sets the font style
    .font(.headline)
    // Adds the header trait for accessibility
    .accessibilityAddTraits(.isHeader)
```

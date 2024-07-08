# Contrast - SwiftUI

In SwiftUI, can use [Xcode's Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html) to detect contrast issues automatically.

You can also use the property of [`colorSchemeContrast`](https://developer.apple.com/documentation/swiftui/colorschemecontrast) environment variable to check if the user has enabled increased contrast in the Accessibility settings of their device.

```swift
// Access the current accessibility contrast scheme environment value
@Environment(\.colorSchemeContrast) private var colorSchemeContrast

var body: some View {
    Text("Appt")
        // Apply different colors depending on the contrast scheme
        .foregroundColor(colorSchemeContrast == .increased ? .black : .gray)
        .background(colorSchemeContrast == .increased ? .white : .black)
}
```

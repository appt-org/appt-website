# Accessibility order - SwiftUI

In SwiftUI, assistive technology like `VoiceOver` typically reads elements in a top-left to bottom-right order. However, you can customize this reading order using the [`accessibilitySortPriority`](https://developer.apple.com/documentation/swiftui/view/accessibilitysortpriority(_:)) view modifier. A higher priority value means the element is read earlier. Use `.accessibilityElement(children: .contain)` to group and manage the accessibility elements within stacks (`HStack`, `VStack`, or `ZStack`) to improve navigation when using assitive technologies.

```swift
VStack {
    Text("First Element")
        .accessibilitySortPriority(2) // Reads second
    Text("Second Element")
        .accessibilitySortPriority(3) // Reads first
    Text("Third Element")
        .accessibilitySortPriority(1) // Reads third
}
.accessibilityElement(children: .contain) // Groups the stack's children
```

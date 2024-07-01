# Keyboard order - SwiftUI

In SwiftUI, you can use the [`accessibilityRespondsToUserInteraction`](https://developer.apple.com/documentation/swiftui/view/accessibilityrespondstouserinteraction(_:)) view modifier to optimize keyboard navigation. By setting the property to `false`, the element will be skipped with keyboard navigation. Other assistive technologies, such as VoiceOver can still focus on the element. This way you can provide screen reader users with alternative text for images, but skip focus for keyboard users. When a hardware keyboard is connected and VoiceOver is enabled, the image will be focusable.

For more precise control over the keyboard order, you can use [`accessibilitySortPriority`](https://developer.apple.com/documentation/swiftui/view/accessibilitysortpriority(_:)) view modifier to specify the priority of the item when using [`Full Keyboard Access`](https://support.apple.com/en-is/guide/iphone/ipha4375873f/ios).

```swift
VStack {
    HStack {
        Text("Top Left")
            // Focused first
            .accessibilitySortPriority(4)
            // Allow interaction using Full Keyboard Access
            .accessibilityRespondsToUserInteraction(true)
            // Top Right View
        
        Text("Top Right")
            // Focused third
            .accessibilitySortPriority(2)
            .accessibilityRespondsToUserInteraction(true)
    }
    
    HStack {
        Text("Bottom Left")
            // Focused second
            .accessibilitySortPriority(3)
            .accessibilityRespondsToUserInteraction(true)
        
        Text("Bottom Right")
            // Not focusable by Full Keyboard Access
            .accessibilityRespondsToUserInteraction(false)
    }
}
```

# Accessibility role - SwiftUI

In SwiftUI, you can set an accessibility role by using the [`accessibility traits`](https://developer.apple.com/documentation/swiftui/accessibilitytraits) on views. This is done by using the [`accessibilityAddTraits`](https://developer.apple.com/documentation/swiftui/view/accessibilityaddtraits(_:)) modifier, which allows you to specify the role a view should play in the user interface. Traits can make a view act as a button, header, link, image, and more. You can also combine multiple traits to define complex roles.

```swift
// Button Trait
Text("Tap Me")
    .accessibilityAddTraits(.isButton)

// Header Trait
Text("Section Header")
    .font(.headline)
    .accessibilityAddTraits(.isHeader)

// Link Trait
Text("Visit Website")
    .foregroundColor(.blue)
    .underline()
    .accessibilityAddTraits(.isLink)

// Image Trait
Image(systemName: "star.fill")
    .accessibilityAddTraits(.isImage)

// Combined Traits: Button and Selected
Text("Selected Button")
    .accessibilityAddTraits([.isButton, .isSelected])
```

If you need to remove specific traits from a view, you can use the [`accessibilityRemoveTraits`](https://developer.apple.com/documentation/swiftui/view/accessibilityremovetraits(_:)) modifier.

```swift
// View containing an image that acts as a decorative element
Image(systemName: "envelope")
    .accessibilityRemoveTraits(.isImage)
```

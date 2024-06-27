# Accessibility state - SwiftUI

In SwiftUI, the [`AccessibilityTraits`](https://developer.apple.com/documentation/swiftui/accessibilitytraits) attribute can be used to indicate the accessibility state. The traits [`isSelected`](https://developer.apple.com/documentation/swiftui/accessibilitytraits/isselected) can be used to indicate the current state.

```swift
@State private var isSelected: Bool = false

var body: some View {
    CustomCheckbox(isSelected: $isSelected)
        .accessibilityAddTraits(isSelected ? [.isSelected] : [])
}
```

If your state is not `isSelected`, we recommended using the [`accessibilityValue`](https://developer.apple.com/documentation/swiftui/view/accessibilityvalue(_:)-2bwuz) view modifier to indicate the state.

```swift
@State private var isExpanded = false

var body: some View {
    ExpandableView()
        // Accessibility value indicates the state
        .accessibilityValue(isExpanded ? "Expanded": "Collapsed")
}
```

# Accessibility name - SwiftUI

In SwiftUI, the [`accessibilityLabel`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-7rljm) property is used as accessibility name.

```swift
Button {
    // Button action
} label: {
    Image(systemName: "magnifyingglass")
        //
        .accessibilityLabel("Search")
}
```

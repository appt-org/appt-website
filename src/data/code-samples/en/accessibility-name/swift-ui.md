# Accessibility name - SwiftUI

In SwiftUI, [`accessibilityLabel`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-7rljm) property is used as accessibility name.

```swift
Link(destination: URL(string: "https://appt.org/en/")!, label: {
    Text("appt.org")
})
.accessibilityLabel("Appt.org")
```

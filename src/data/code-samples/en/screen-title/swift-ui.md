# Screen title - SwiftUI

In SwiftUI, we recommend embedding your views in a [`NavigationStack`](https://developer.apple.com/documentation/swiftui/navigationstack) with an appropriate [`navigationTitle`](https://developer.apple.com/documentation/swiftui/view/navigationtitle(_:)-43srq) on each screen.

```swift
NavigationStack {
    VStack {
        Text("Welcome to the Appt homescreen")
    }
    .navigationTitle("Appt homescreen")
}
```

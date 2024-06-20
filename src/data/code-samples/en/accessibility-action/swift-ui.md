# Accessibility action - SwiftUI

In SwiftUI, you can add the [`accessibility action`](https://developer.apple.com/documentation/swiftui/view/accessibilityaction(_:_:)) modifier to add a custom action to the view when assistive technologies are activated. You can add multiple custom actions by calling the same method on the view multiple times.
Also you can define multiple custom actions by using [`accessibility actions`](https://developer.apple.com/documentation/swiftui/view/accessibilityactions(_:)) view modifier.

```swift
// Single custom accessibility action
var body: some View {
    ContentView()
    // Custom action
        .accessibilityAction(named: "Appt action") {
            // Logic
        }
}
```

```swift
// Multiple accessibility actions
var body: some View {
    ContentView()
    // Custom actions
        .accessibilityActions {
            Button("Appt action one") {
                // Logic
            }

            Button("Appt action two") {
                // Logic
            }
        }
}
```

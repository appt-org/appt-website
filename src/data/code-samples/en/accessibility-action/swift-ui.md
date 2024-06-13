# Accessibility action - SwiftUI

In SwiftUI framework, you can add a single [`accessibilityAction(named:_:)`](https://developer.apple.com/documentation/swiftui/view/accessibilityaction(_:_:)) modifier to add a custom action to the view when assistive technologies are activated. You can add multiple custom actions by calling the same method on the view.
Also you can define multiple accessibility actions using[`accessibilityActions(_:)`](https://developer.apple.com/documentation/swiftui/view/accessibilityactions(_:)).

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
// Define multiple accessibility actions
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

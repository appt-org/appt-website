# Element focus change - SwiftUI

In SwiftUI, you can track when a view becomes focused by using the [`@AccessibilityFocusState`](https://developer.apple.com/documentation/swiftui/accessibilityfocusstate) property. This property allows you to bind a focus state to the view. You attach the [`accessibilityFocused`](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:)) modifier to the view and link it to the focus state variable. To react to focus changes, utilize the [`onChange`](https://developer.apple.com/documentation/swiftui/view/onchange(of:perform:)) modifier. This combination enables you to execute custom actions whenever the view gains or loses focus.

```swift
// Define a focus state to track which view is focused
@AccessibilityFocusState private var isFocused: Bool

var body: some View {
    Text("Appt")
        .accessibilityFocused($isFocused) // Apply the focus state to this view
        .onChange(of: isFocused) { _, focused in
            if focused {
                // Handle the view becoming focused
            } else {
                // Handle the view losing focus
            }
        }
}
```

# Input errors - SwiftUI

In SwiftUI, we recommend using a [`Text`](https://developer.apple.com/documentation/swiftui/text) or [`Label`](https://developer.apple.com/documentation/swiftui/label) views to indicate an error. The error message should also be posted to assistive technologies by using an [`accessibility announcement`](../Techniques/accessibility-announcement.md).

You could also use a third party library to displaying instructions. Unfortunately, accessibility is often not considered in the implementations.

```swift
@State private var showError = false
@State private var errorMessage = ""

var body: some View {
    VStack {
        // Other UI elements here such as a TextField ...
        Button(action: {
            // Example action to trigger error
            showError = true
            errorMessage = "Invalid date, must be in the form DD/MM/YYYY, for example, 01/01/2000"
        }) {
            Text("Schedule Appointment")
        }
        
        if showError {
            Text(errorMessage)
                .foregroundColor(.red)
                .accessibilityLabel(errorMessage)
                .onAppear {
                    // Post an accessibility announcement
                    UIAccessibility.post(notification: .announcement,
                                         argument: errorMessage)
                }
        }
    }
}
```

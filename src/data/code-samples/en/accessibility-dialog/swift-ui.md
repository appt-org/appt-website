# Accessibility dialog - SwiftUI

In SwiftUI, you can [show alerts](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:presenting:actions:message:)-8584l) by using the `.alert` view modifier. The `alert` dialog presentation is determined by the `@State` variable. You should always include a close action with a `.cancel` button role. Assistive technologies automatically trap focus inside the alert while it's visible.

```swift
@State private var showingAlert = false

var body: some View {
    ContentView()
        .alert("Confirm Appt membership?", isPresented: $showingAlert) {
            Button("Proceed") {
                // Proceed
            }
            Button("Cancel", role: .cancel) {
                // Cancel
            }
        } message: {
            Text("Your bank account will be billed.")
        }
}
```

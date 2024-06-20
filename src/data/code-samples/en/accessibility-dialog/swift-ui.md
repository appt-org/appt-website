# Accessibility dialog - SwiftUI

In SwiftUI, you can [show alerts](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:presenting:actions:message:)-8584l) by using `.alert` view modifier. The `alert` style of the dialog is going to be presented according to `@State` variable. You should always add a close action with a `.cancel` button role. The focus of assistive technologies is automatically trapped inside the alert while it's visible.

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

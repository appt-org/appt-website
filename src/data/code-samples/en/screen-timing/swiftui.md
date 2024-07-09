# Adjustable timing - SwiftUI

In SwiftUI, third-party code libraries are sometimes used to display a temporary message, also known as a `Toast`. The display duration might be too short for people to read or hear the message.

We recommend showing messages by using an [`alert`](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:presenting:actions:)-4rhk6) modifier. Don't forget to add a close button.

Also check whether [`DispatchQueue`](https://developer.apple.com/documentation/dispatch/dispatchqueue) or [`Timer`](https://developer.apple.com/documentation/foundation/timer) is used somewhere. If there are time limits, make sure they can be extended.

```swift
// State to control the visibility of the "Settings Saved" alert
@State private var showSettingsSavedAlert = false

var body: some View {
    Button("Save Settings") {
        // Perform needed actions
        showSettingsSavedAlert = true
    }
    .alert(isPresented: $showSettingsSavedAlert) {
        // Show alert instead of a
        Alert(
            title: Text("Success"),
            message: Text("Your settings have been saved successfully."),
            dismissButton: .default(Text("Close"))
        )
    }
}
```

# Input instructions - SwiftUI

In SwiftUI, we recommend using a [`Text`](https://developer.apple.com/documentation/swiftui/text) or [`Label`](https://developer.apple.com/documentation/swiftui/label) views to show input instructions. The input instructions message should also be posted to assistive technologies by using an [`accessibility announcement`](../Techniques/accessibility-announcement.md).

You could also use a third party library to displaying instructions. Unfortunately, accessibility is often not considered in the implementations.

```swift
@State private var showInstruction = false
@State private var instructionMessage = ""

var body: some View {
    VStack {
        // Other UI elements here such as a TextField ...
        Button(action: {
            // Example action to display input instructions
            showInstruction = true
            instructionMessage = "Provide a date in form DD/MM/YYYY, for example, 01/01/2000"
        }) {
            Text("Schedule Appointment")
        }
        
        if showInstruction {
            Text(instructionMessage)
                .accessibilityLabel(instructionMessage)
                .onAppear {
                    // Post an accessibility announcement
                    UIAccessibility.post(notification: .announcement,
                                         argument: instructionMessage)
                }
        }
    }
}
```

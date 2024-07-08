# Input instructions - SwiftUI

In SwiftUI, we recommend using [`Text`](https://developer.apple.com/documentation/swiftui/text) or [`Label`](https://developer.apple.com/documentation/swiftui/label) views to show input instructions. The input instructions message should also be posted to assistive technologies by using an [`accessibility announcement`](https://appt.org/en/docs/swiftui/samples/accessibility-announcement).

```swift
@State private var showHelp = false
@State private var helpMessage = ""

var body: some View {
    VStack {
        // Other UI elements here such as a TextField ...
        Button(action: {
            // Example action to display input instructions
            showHelp.toggle()
            helpMessage = "Provide a date in form DD/MM/YYYY, for example, 01/01/2000"
        }) {
            Text(showHelp ? "Hide Help" : "Help")
        }
        
        if showHelp {
            Text(helpMessage)
        }
    }
}
```

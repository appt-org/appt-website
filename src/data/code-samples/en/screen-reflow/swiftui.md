# Reflow - SwiftUI

In SwiftUI, all elements should be placed in a scrollable layout, such as [`ScrollView`](https://developer.apple.com/documentation/swiftui/scrollview) or [`List`](https://developer.apple.com/documentation/swiftui/list) views. Never use fixed values for any heights or widths.

```swift
ScrollView {
    VStack {
        Text("Content should scroll!")
            .padding()
        
        // Add more views here if needed
        // For example:
        ForEach(0..<20) { index in
            Text("Additional content \(index)")
                .padding()
        }
    }
    .frame(maxWidth: .infinity) // Make sure content expands to fill the scrollable area
}
```

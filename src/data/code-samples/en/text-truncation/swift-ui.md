# Text truncation - SwiftUI

In SwiftUI, [`Text`](https://developer.apple.com/documentation/swiftui/text) views expand to multiple lines by default. To ensure that `Text` views display without truncation, verify that you haven't set a [`lineLimit`](https://developer.apple.com/documentation/swiftui/view/linelimit(_:)-513mb).

To further avoid text truncation, especially when the text content exceeds the available screen space, it's recommended to place the `Text` view inside a scrollable container like a [`ScrollView`](https://developer.apple.com/documentation/swiftui/scrollview).


```swift
ScrollView {
    VStack {
        Text("Appt")
        // Other views
    }
}
```

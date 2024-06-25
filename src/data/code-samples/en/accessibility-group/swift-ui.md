# Accessibility group - SwiftUI

In SwiftUI, you can group multiple elements by applying the [`.accessibilityElement(children:)`](https://developer.apple.com/documentation/swiftui/view/accessibilityelement(children:)) modifier with the [`.combine`](https://developer.apple.com/documentation/swiftui/accessibilitychildbehavior/combine) option to a parent view. This approach consolidates the accessibility elements into a single group. Additionally, ensure that you provide an [`accessibilityLabel`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv) to describe the group as a whole.

```swift
@State var stockPrice = "$123.45"
var body: some View {
    HStack {
        Text("Stock price:")
        Text(stockPrice)
    }
    // Combine all text elements into a single accessibility element
    .accessibilityElement(children: .combine)
    .accessibilityLabel("The stock price is: \(stockPrice)")
}
```

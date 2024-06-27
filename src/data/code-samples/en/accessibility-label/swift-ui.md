# Accessibility label - SwiftUI

In SwiftUI, the [`accessibilityLabel(_:)`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-5f0zj) view modifier is used to assign an accessibility label to a view. It's essential to keep the accessibility label concise yet meaningful for optimal usability.

```swift
Image("appt_logo")
    .accessibilityLabel("Appt logo")
```

You can enhance accessibility in SwiftUI by using the [`Text`](https://developer.apple.com/documentation/swiftui/text/init(_:)-2tl9f) initializer with an `AttributedString` parameter, offering precise control over pronunciation. For instance, you can spell out each character using [`.accessibilitySpeechPunctuation`](https://developer.apple.com/documentation/foundation/nsattributedstring/key/1620201-accessibilityspeechpunctuation) or specify a language with [`.accessibilitySpeechLanguage`](https://developer.apple.com/documentation/foundation/nsattributedstring/key/1620188-accessibilityspeechlanguage).

```swift
let attributeContainer = AttributeContainer([
    .accessibilitySpeechPunctuation: true,
    .accessibilitySpeechLanguage: "en_US"
])

// Initialize `AttributedString` with the desired text and the `AttributeContainer`
let attributedString = AttributedString("Appt", attributes: attributeContainer)
Text(attributedString)
```

When dealing with long labels, consider using [`accessibilityInputLabels`](https://developer.apple.com/documentation/swiftui/view/accessibilityinputlabels(_:)-6nafd) to provide alternative labels. The primary label comes first in the array, followed by optional alternative labels arranged in decreasing order of relevance.

```swift
Link(destination: URL(string: "https://appt.org/en/")!, label: {
    Text("Appt.org")
})
// Primary and alternative labels in descending order of importance
.accessibilityInputLabels([
    "Appt website",
    "Appt"
])
```

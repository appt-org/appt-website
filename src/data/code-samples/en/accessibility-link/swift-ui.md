# Accessibility link - SwiftUI

In SwiftUI, you can create rich text that includes clickable links using the [`AttributedString`](https://developer.apple.com/documentation/foundation/attributedstring) and its [`link`](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/3764633-link) attribute. This approach allows you to make specific parts of your text act as hyperlinks.

```swift
let attributedTextLink: AttributedString = {
    var fullText = AttributedString("Learn more about Appt")
    
    // Find the range of the word "Appt"
    if let range = fullText.range(of: "Appt") {
        // Add link attribute to "Appt"
        fullText[range].link = URL(string: "https://appt.org/en/")!
    }
    
    return fullText
}()

Text(attributedTextLink)
```

In SwiftUI, you can create a [`Link`](https://developer.apple.com/documentation/swiftui/link) view that behaves as a `link` out of the box. The `Link` view links the entire content of the view that it wraps, rather than just a portion of it. This means that when you use `Link` to wrap a text, tapping anywhere within that view area will trigger the link.

```swift
Link("Visit Appt", destination: URL(string: "https://appt.org")!)
```

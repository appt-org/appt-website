# Accessibility link - iOS

On iOS, links should contain the [`link`](https://developer.apple.com/documentation/foundation/nsattributedstring/key/1535719-link) attribute. This attribute can be added by initializing and providing [`AttributeContainer`](https://developer.apple.com/documentation/foundation/attributecontainer) to [`AttributedString`](https://developer.apple.com/documentation/foundation/attributedstring)'s.

```swift
let attributedStringOne = AttributedString("Appt.org", attributes: AttributeContainer([.link: URL(string: "https://appt.org/en/")!]))
        
Text(attributedStringOne)
```

In SwiftUI, you can create a [`Link`](https://developer.apple.com/documentation/swiftui/link) view that behaves as a `link` out of the box.

```swift
Link("Appt.org", destination: URL(string: "https://appt.org/en/")!)
```

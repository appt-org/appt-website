# Input label - SwiftUI

In SwiftUI, we recommend combining a [`LabeledContent`](https://developer.apple.com/documentation/swiftui/labeledcontent) with a [`TextField`](https://developer.apple.com/documentation/swiftui/textfield) or [`TextEditor`](https://developer.apple.com/documentation/swiftui/texteditor) to link a label to an input field.


```swift
@State private var name: String = ""

private var textFieldLabel = "Name"

var body: some View {
    Form {
        LabeledContent(textFieldLabel) {
            TextField("", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
        }
    }
}
```

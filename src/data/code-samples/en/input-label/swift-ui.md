# Input label - SwiftUI

In SwiftUI, we recommend combining a [`LabeledContent`](https://developer.apple.com/documentation/swiftui/labeledcontent) with a [`TextField`](https://developer.apple.com/documentation/swiftui/textfield) or [`TextEditor`](https://developer.apple.com/documentation/swiftui/texteditor).

Implementing a `vertical` [`labeled content style`](https://developer.apple.com/documentation/swiftui/labeledcontentstyle) allows for a better fit of UI elements when using larger fonts.

```swift
@State private var name: String = ""

private var textFieldLabel = "Name"

var body: some View {
    Form {
        LabeledContent {
            TextField("", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
        } label: {
            Text(textFieldLabel)
                .font(.headline)
        }
        .labeledContentStyle(.vertical)
        .accessibilityLabel(textFieldLabel)
    }
}

// Implement vertical labeled content style for better fit when using larger fonts
struct VerticalLabeledContentStyle: LabeledContentStyle {
    func makeBody(configuration: Configuration) -> some View {
        VStack(alignment: .leading) {
            configuration.label
            configuration.content
        }
    }
}

extension LabeledContentStyle where Self == VerticalLabeledContentStyle {
    static var vertical: VerticalLabeledContentStyle { .init() }
}
```

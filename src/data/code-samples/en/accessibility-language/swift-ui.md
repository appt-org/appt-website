# Accessibility language - SwiftUI

On SwiftUI, the [`accessibilitySpeechLanguage`](https://developer.apple.com/documentation/foundation/nsattributedstring/key/1620188-accessibilityspeechlanguage) key of [`AttributedString`](https://developer.apple.com/documentation/foundation/attributedstring) can be used to speak content in a specific language. Multiple `AttributedString`s can be embedded inside a single `AttributedString` by using the `+` operator to speak content in multiple languages.

```swift
let attributedString = AttributedString(
    "Appt",
    attributes: AttributeContainer([
        .accessibilitySpeechLanguage: "nl_NL"
    ])
)

Text(attributedString)
```

In SwiftUI, you can also easily add localized accessibility features to any view using the [accessibilityLabel](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv) and [accessibilityHint](https://developer.apple.com/documentation/swiftui/view/accessibilityhint(_:)-3i2vu) modifiers. These modifiers accept a [LocalizedStringKey](https://developer.apple.com/documentation/swiftui/localizedstringkey), making it straightforward to provide localized descriptions and hints for your UI components. This simplifies the process of supporting multiple languages in your app's UI and accessibility technologies.

To effectively follow along with this sample, ensure your project is set up with a `Localizable.strings` file that includes all of your app's localized texts.

```swift
Button(action: {
    // Action here
}) {
    Text("search_title")
}
.accessibilityLabel(Text("search_accessibility_label"))
.accessibilityHint(Text("search_accessibility_hint"))
```

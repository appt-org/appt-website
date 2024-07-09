# Accessibility modal - SwiftUI

In SwiftUI, you can indicate an accessibility modal by adding [`.isModal`](https://developer.apple.com/documentation/swiftui/accessibilitytraits/ismodal) to [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits).

Use this trait to control which accessibility elements can be accessed by assistive technology. When a modal accessibility element is active, other sibling elements that are not part of the modal are hidden from assistive technologies.

**Note:** When designing a custom modal view in SwiftUI, it’s crucial to include a `cancel` or `dismiss` button. This button provides users with a clear and easy way to exit the modal without completing any actions.

```swift
@State private var isModalPresented = false // State to control the modal presentation

var body: some View {
    ZStack {
        Button("Show Modal") {
            isModalPresented = true // Present the modal
        }
        
        if isModalPresented {
            EmptyModalView(isPresented: $isModalPresented)
                .frame(width: 200, height: 200)
                .accessibilityAddTraits(.isModal) // Add .isModal trait
        }
    }
}
```

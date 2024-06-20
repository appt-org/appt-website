# Accessibility modal - SwiftUI

In SwiftUI, you can indicate an accessibility modal by adding [`.isModal`](https://developer.apple.com/documentation/swiftui/accessibilitytraits/ismodal) to [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits).

Use this trait to control which accessibility elements can be accessed by assistive technology. When a modal accessibility element is active, other sibling elements that are not part of the modal are hidden from assistive technology.

```swift
@State private var isModalPresented = false // State to control the modal presentation

var body: some View {
    ZStack {
        Button("Show Modal") {
            isModalPresented.toggle() // Toggle the state to present the modal
        }
        
        if isModalPresented {
            EmptyModalView()
                .frame(width: 200, height: 200)
                .accessibilityAddTraits(.isModal) // Add .isModal trait
        }
    }
}
```

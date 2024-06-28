# Input gestures - SwiftUI

In SwiftUI, [`gestures`](https://developer.apple.com/documentation/swiftui/gestures) are a common way of interaction with user interface. You can handle gestures by applying gesture modifiers directly to your views. This allows you to detect and respond to common [`gestures`](https://developer.apple.com/documentation/swiftui/gestures) such as taps, drags, pinches, and more.

A gesture should not be the only way to trigger actions. Make sure to provide a second way, such as a button, to trigger the same action.

```swift
@State private var scale: CGFloat = 1.0

var body: some View {
    VStack {
        Image("appt_logo")
            .scaleEffect(scale) // Apply the scale effect
        HStack {
            Button(action: {
                // Alternative way to trigger the same action
                self.scale(factor: 0.1)
            }) {
                Text("Enlarge")
            }
            
            Button(action: {
                // Alternative way to trigger the same action
                self.scale(factor: -0.1)
            }) {
                Text("Shrink")
            }
        }
    }
    .gesture(
        MagnificationGesture()
            .onChanged { value in
                self.scale = value
            }
    )

    private func scale(factor: CGFloat) {
        self.scale += factor
    }
}
```

# Input cancellation - SwiftUI

In SwiftUI, you should avoid performing actions in response to gestures in [`onChanged`](https://developer.apple.com/documentation/swiftui/gesture/onchanged(_:)) or [`updating`](https://developer.apple.com/documentation/swiftui/gesture/updating(_:body:)) methods because users will not be able to cancel their interaction. Actions should only be activated through [`onEnded`](https://developer.apple.com/documentation/swiftui/gesture/onended(_:)) method.

When implementing gestures, use SwiftUI's built-in [`gestures`](https://developer.apple.com/documentation/swiftui/gestures) that have support for cancellation upon `touchUp` events.

```swift
Text("Appt")
    .gesture(LongPressGesture()
        .onChanged { _ in
            // Avoid activating actions before user has finished or cancelled touch
        }
        .onEnded { _ in
            // Activate action when the touch event is finished
        })
```

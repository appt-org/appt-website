# Motion input - SwiftUI

In SwiftUI, there is no built-in method to detect when a user shakes their device. However, you can create this functionality yourself by overriding the [`motionEnded`](https://developer.apple.com/documentation/uikit/uiresponder/1621090-motionended) method in `UIWindow` and setting up a custom notification.

A motion event should not be the only way to trigger actions. Make sure to provide a second way, such as a button, to trigger the same action.

```swift
import SwiftUI
import Combine

// A view that includes a button and responds to shake gestures.
struct MotionResponsiveView: View {
    var body: some View {
        Button("Trigger Alternative Action") {
            // Action triggered by the button.
            // Replace with desired functionality.
        }
        .onReceive(
            NotificationCenter.default.publisher(
                for: UIDevice.deviceDidShakeNotification
            )
        ) { _ in
            // This action is performed when a shake gesture is detected.
        }
    }
}

// Extend UIDevice to define a custom notification for shake gestures.
extension UIDevice {
    static let deviceDidShakeNotification = Notification.Name(
        rawValue: "deviceDidShakeNotification"
    )
}

// Extend UIWindow to intercept shake gesture events and post a custom notification.
extension UIWindow {
    open override func motionEnded(
        _ motion: UIEvent.EventSubtype,
        with event: UIEvent?
    ) {
        super.motionEnded(motion, with: event)
        
        if motion == .motionShake {
            // Post a notification when a shake gesture is detected.
            NotificationCenter.default.post(
                name: UIDevice.deviceDidShakeNotification,
                object: nil
            )
        }
    }
}
```

# Accessibility live region - SwiftUI

In SwiftUI, the closest thing to live regions are elements with the [`updatesFrequently`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/1620187-updatesfrequently) trait. When an element is focused, label and value changes are announced periodically.

You can also replicate a live region by posting accessibility announcements. To replicate 'polite' behavior, you can set [`accessibilitySpeechQueueAnnouncement`](https://developer.apple.com/documentation/foundation/nsattributedstring/key/2865770-accessibilityspeechqueueannounce) to `false`. To be 'assertive', set the value to `true`.

For even more advanced behavior, you can act on [`announcementDidFinishNotification`](https://developer.apple.com/documentation/uikit/uiaccessibility/1620202-announcementdidfinishnotificatio) events.

**WARNING:** You likely should not mix [`updatesFrequently`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/1620187-updatesfrequently) trait and manual announcements. Choose one approach.

```swift
@State var stockPrice = "Stock Price: $123.45"

var body: some View {
    // Periodic announcements (only on focus!)
    Text(stockPrice)
        // Add the updatesFrequently trait here
        .accessibilityAddTraits(.updatesFrequently)
        .onChange(of: stockPrice) { _, newPrice in
            // Replicate live region
            let message = NSAttributedString(
                string: newPrice,
                attributes: [.accessibilitySpeechQueueAnnouncement: true]
            )
            UIAccessibility.post(notification: .announcement, argument: message)
        }
}
```

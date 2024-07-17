# Accessibility announcement - iOS

On iOS, you post an accessibility announcement by using the [`UIAccessibility`](https://developer.apple.com/documentation/uikit/uiaccessibility) object. The [`post`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post) method can be used to post data to assistive technologies. Set the type to [`announcement`](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/1620176-announcement) and supply a `string` argument to announce something.

You can also supply an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) to customize the behavior of the announcement. For example, `accessibilitySpeechQueueAnnouncement` can be used to queue an announcement, instead of announcing it immediately. For more options, see: [accessibility attribute keys of NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring/key#3665798).

```swift
// Using String
UIAccessibility.post(
  notification: .announcement, 
  argument: "Appt announcement"
)

// Using NSAttributedString
let message = NSAttributedString(
  string: "Appt customized announcement", 
  attributes: [
    .accessibilitySpeechQueueAnnouncement: true
  ]
)
UIAccessibility.post(
  notification: .announcement, 
  argument: message
)
```

# Skip content - SwiftUI

In SwiftUI, skipping content is mostly relevant to [`VoiceOver`](https://appt.org/en/docs/ios/features/voiceover) users. VoiceOver includes a `rotor` which allows users to jump to the following content types:

- Headers
- Links
- Form Controls
- Containers
- Text
  - Lines
  - Characters
  - Words

Jumping to `headers` and `links` is used most often.

Provide appropriate accessibility markup to your content by using [`accessibilityAddTraits`](https://developer.apple.com/documentation/swiftui/view/accessibilityaddtraits(_:)) view modifier.

```swift
Text("Appt")
    .font(.largeTitle)
    .accessibilityAddTraits(.isHeader)

Button("Visit Appt") {
    // Open URL
}
.accessibilityAddTraits(.isLink)
```

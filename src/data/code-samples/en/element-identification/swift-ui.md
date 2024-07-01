# Element identification - SwiftUI

In SwiftUI, encapsulating functionality within custom `View`'s is a highly recommended practice. This allows for the reuse of components across multiple screens, promoting consistency, reducing redundancy, and simplifying maintenance.

When integrating icons into your app, it is essential to ensure that both their appearance and functionality are uniform. Each icon should have a standardized [`accessibility label`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv) and perform the same action wherever it appears. This consistency is crucial for providing a predictable and accessible user experience, especially for users who rely on assistive technologies.

For instance, if you're using a cross icon (`xmark.circle`) to close screens, the [`accessibility label`](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv) should always be `Close`, and it should consistently trigger the close action across all screens.

```swift
struct CloseButton: View {
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: "xmark.circle")
                .resizable()
                .frame(width: 24, height: 24)
                .accessibilityLabel("Close")
        }
    }
}
```

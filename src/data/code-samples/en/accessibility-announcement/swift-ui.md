# Accessibility announcement - SwiftUI

In SwiftUI, you can enhance your app's accessibility by posting messages to assistive technologies whenever the app's state changes. To achieve this, you can use the [`UIAccessibility`](https://developer.apple.com/documentation/uikit/uiaccessibility) object's [`post`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post) method. By setting the type to [`announcement`](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/1620176-announcement) and providing a `String` argument, you can deliver custom announcements to users who rely on assistive technologies like VoiceOver.

```swift
@State private var isLoading = false

var body: some View {
    VStack {
        Button("Search Appt website") {
            isLoading = true
        }
            
        if isLoading {
            ProgressView()
        }
    }
    // Track the state changes
    .onChange(of: isLoading) { _, isLoading in
        if isLoading {
            // Post an announcement
            UIAccessibility.post(notification: .announcement, argument: "Searching for accessibility articles")
        }
    }
}
```

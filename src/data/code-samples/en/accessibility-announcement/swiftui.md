# Accessibility announcement - SwiftUI

In SwiftUI, you can enhance your app's accessibility by announcing interface changes to assistive technologies.

To achieve this, you can use the [`UIAccessibility`](https://developer.apple.com/documentation/uikit/uiaccessibility) object's [`post`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post) method. By setting the type to [`announcement`](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/1620176-announcement) and providing a `String` argument, you can deliver custom announcements to users who rely on assistive technologies like VoiceOver.

In iOS 17 and higher, you can also use [`AccessibilityNotification`](https://developer.apple.com/documentation/accessibility/accessibilitynotification). In this case, create an [`AccessibilityNotification.Announcement`](https://developer.apple.com/documentation/accessibility/accessibilitynotification/announcement) with a [`String`](https://developer.apple.com/documentation/Swift/String) or [`AttributedString`](https://developer.apple.com/documentation/foundation/attributedstring).

When providing an `AttributedString`, you can optionally customize the announcement behavior.

The announcement priority can be set with the [`accessibilitySpeechAnnouncementPriority`](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/4183580-accessibilityspeechannouncementp) property. Available options are: [`high`](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/4168157-high), [`default`](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/4168156-default) and [`low`](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority/4168158-low).

For more options, check the [`AccessibilityAttributes`](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes) struct.

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
  // Track state changes
  .onChange(of: isLoading) { _, isLoading in
    if isLoading {
      announce("Search in progress")
    }
  }
}

// Post an announcement
func announce(_ message: String) {
  if #available(iOS 17, *) {
    // iOS 17+ can use AccessibilityNotification
    var announcement = AttributedString(message)
    announcement.accessibilitySpeechAnnouncementPriority = .high
    AccessibilityNotification.Announcement(announcement).post()
  } else {
    // Lower iOS versions can use UIAccessibility
    UIAccessibility.post(
      notification: .announcement, 
      argument: message
    )
  }
}
```

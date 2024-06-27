# Accessibility focus - SwiftUI

In SwiftUI, you can enhance accessibility focus by using the [`@AccessibilityFocusState`](https://developer.apple.com/documentation/swiftui/accessibilityfocusstate) property wrapper and the [`accessibilityFocused`](https://developer.apple.com/documentation/swiftui/view/accessibilityfocused(_:)) modifier. These methods allow you to programmatically move the accessibility focus to a specific element in your app. This can be particularly useful when you want to direct the user's attention to a specific part of the UI in response to changes or interactions.

```swift
// State variable to control loading state
@State var isLoading: Bool = false
    
// Accessibility focus state variable to manage focus
@AccessibilityFocusState var isLoadingIndicatorFocused: Bool
    
var body: some View {
    VStack {
        Button("Search Appt website") {
            // Set loading state to true
            isLoading = true
            // Move focus to the loading indicator
            isLoadingIndicatorFocused = true
        }
            
        if isLoading {
            ProgressView()
                .accessibilityFocused($isLoadingIndicatorFocused)  // Bind the focus state
                .accessibilityLabel("Loading")  // Provide an accessible label
            }
        }
    }
```

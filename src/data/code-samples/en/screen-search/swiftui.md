# Search functionality - SwiftUI

In SwiftUI, you can use a [`searchable`](https://developer.apple.com/documentation/swiftui/view/searchable(text:placement:prompt:)-93eai) view modifier which configures the display of a search field.

```swift
@State private var searchTerm = ""

private let accessibilityFeatures = [
    "Keyboard Access",
    "Switch Control",
    "Voice Control",
    "VoiceOver"
]

private var results: [String] {
    // Filter features based on the search term
    searchTerm.isEmpty ?
    accessibilityFeatures :
    accessibilityFeatures.filter { $0.contains(searchTerm) }
}

var body: some View {
    NavigationStack {
        List {
            // Display each filtered accessibility feature
            ForEach(results, id: \.self) { accessibilityFeature in
                Text(accessibilityFeature)
            }
        }
        .searchable(text: $searchTerm) // Enable search functionality
        .navigationTitle("Accessibility Features") // Set navigation title
    }
}
```

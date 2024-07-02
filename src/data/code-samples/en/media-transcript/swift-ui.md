# Transcript - SwiftUI

In SwiftUI, you can use [`Text`](https://developer.apple.com/documentation/swiftui/text) to present a transcript. To enhance user interaction, consider enabling text [`selection`](https://developer.apple.com/documentation/swiftui/view/textselection(_:)), allowing users to copy or interact with the text. For long transcripts, it's best to embed the text in a scrollable container like a [`ScrollView`](https://developer.apple.com/documentation/swiftui/scrollview).


```swift
private var transcript: String = "Appt video transcript."

var body: some View {
    ScrollView {
        // Place other views here
        Text(transcript)
            .textSelection(.enabled)
    }
}
```

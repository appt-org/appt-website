# Accessibility value - SwiftUI

In SwiftUI, you can set an accessibility value with the [`accessibilityValue`](https://developer.apple.com/documentation/swiftui/view/accessibilityvalue(_:)-2bwuz) view modifier by providing a [`Text`](https://developer.apple.com/documentation/swiftui/text) value description.

When using the semantically correct element, you usually do not need to modify the `accessibilityValue`. For example, a [`Toggle`](https://developer.apple.com/documentation/swiftui/toggle) sets the `accessibilityValue` to `On` or `Off` and a [`Slider`](https://developer.apple.com/documentation/swiftui/slider) sets the `accessibilityValue` to the current value. If the default value is incorrect or unclear, you can override the value manually.

```swift
@State private var progress: Double = 0

var body: some View {
    CustomSlider(value: $progress)
        .accessibilityValue("\(progress)")
}
```

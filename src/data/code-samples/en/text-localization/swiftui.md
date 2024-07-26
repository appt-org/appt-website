# Localization - SwiftUI

In SwiftUI, you can set the app's default locale using the [`CFBundleDevelopmentRegion`](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundledevelopmentregion) property. You can also access and modify the locale value dynamically within the app via SwiftUI's [`locale`](https://developer.apple.com/documentation/swiftui/environmentvalues/locale) environment property.

To retrieve a localized string from a `.strings` file, use the [`LocalizedStringKey`](https://developer.apple.com/documentation/swiftui/localizedstringkey) struct. SwiftUI simplifies localization by automatically handling string literals for specific types such as [`Text`](https://developer.apple.com/documentation/swiftui/text), [`Toggle`](https://developer.apple.com/documentation/swiftui/toggle), [`Picker`](https://developer.apple.com/documentation/swiftui/picker) and more. When you initialize a view with a string literal, SwiftUI converts the string into a `LocalizedStringKey` and looks up its localized version based on the current locale settings.

For more detailed information, refer to [Adding Support for Languages and Regions](https://developer.apple.com/documentation/xcode/adding-support-for-languages-and-regions) on Apple's Developer site.

```swift
// Get current locale
@Environment(\.locale) var locale: Locale

// Set the locale dynamically
WindowGroup {
    ContentView()
        .environment(\.locale, .init(identifier: "en"))
}

// Looks up localized string in .strings file
let welcomeText = LocalizedStringKey("appt_welcome_text")

// Initialises a view directly with LocalizedStringKey value
Text("appt_welcome_text")
```

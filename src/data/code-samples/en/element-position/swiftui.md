# Element position - SwiftUI

In SwiftUI, you should place frequently used common views, for example [`NavigationStack`](https://developer.apple.com/documentation/swiftui/navigationstack) and [`TabView`](https://developer.apple.com/documentation/swiftui/tabview), on the same position of each screen.

In this SwiftUI code sample, we place the commonly used `Cancel` and `Save` button elements in logical and consistent locations: the `Cancel` button on the left and the `Save` button on the right of the navigation bar.

```swift
var body: some View {
    NavigationView {
        EditProfileView()
            .navigationTitle("Edit Profile")
            .navigationBarItems(
                leading: CancelButton(action: {
                    // Perform cancel action
                }),
                trailing: SaveButton(action: {
                    // Perform save action here
                })
            )
    }
}
```

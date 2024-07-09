# Screen orientation - SwiftUI

In SwiftUI, make sure all [`UIInterfaceOrientationMask`](https://developer.apple.com/documentation/uikit/uiinterfaceorientationmask) values are used for the [`UISupportedInterfaceOrientations`](https://developer.apple.com/documentation/bundleresources/information_property_list/uisupportedinterfaceorientations) key inside the `Info.plist` file.

To listen to orientation changes, subscribe to [`orientationDidChangeNotification`](https://developer.apple.com/documentation/uikit/uidevice/1620025-orientationdidchangenotification) in the [`onReceive`](https://developer.apple.com/documentation/swiftui/view/onreceive(_:perform:)) method. Check the device orientation using [`UIDevice.current.orientation`](https://developer.apple.com/documentation/uikit/uidevice/1620053-orientation).

```xml
<key>UISupportedInterfaceOrientations</key>
<array>
    <string>UIInterfaceOrientationPortrait</string>
    <string>UIInterfaceOrientationLandscapeLeft</string>
    <string>UIInterfaceOrientationLandscapeRight</string>
    <string>UIInterfaceOrientationPortraitUpsideDown</string>
</array>
```

```swift
@State var currentOrientation = UIDevice.current.orientation

private let orientationChangedNotification = NotificationCenter.default
    .publisher(for: UIDevice.orientationDidChangeNotification)
    .makeConnectable()
    .autoconnect()

var body: some View {
    OrientationAdaptiveView()
        .onReceive(orientationChangedNotification) { _ in
            // Reach to device orientation change
            self.currentOrientation = UIDevice.current.orientation
        }
}
```

# Reduced animations - SwiftUI

In SwiftUI, you can read the [`UIAccessibility.isReduceMotionEnabled`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615133-isreducemotionenabled) property. If the value is `true`, you could choose to disable (non-essential) animations of your views. You can do this, for example, with the [`transaction`](https://developer.apple.com/documentation/swiftui/view/transaction(_:)) modifier by setting the value of [`disabledAnimations`](https://developer.apple.com/documentation/swiftui/transaction/disablesanimations) to `true` or to the value of [`UIAccessibility.isReduceMotionEnabled`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615133-isreducemotionenabled).

**Note**: For the changes to take effect, you need to reload the view or setup a listener for [`reduceMotionStatusDidChangeNotification`](https://developer.apple.com/documentation/uikit/uiaccessibility/1615204-reducemotionstatusdidchangenotif)

```swift
AnimatedView()
    .transaction { $0.disablesAnimations = UIAccessibility.isReduceMotionEnabled }
```

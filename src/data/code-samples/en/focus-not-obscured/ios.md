# Focus not obscured - iOS

On iOS, you should ensure that any user interface component receiving focus is at least partially visible on the screen and not obscured by other content, such as sticky banners, headers and footers. Additionally, avoid placing interactive elements near areas where overlapping content, such as floating buttons, could interfere with visibility.

```swift
class ApptViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Listen to keyboard show/hide notification
        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)

        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
    }

     @objc func keyboardWillShow(notification: Notification) {
        // Adjust the layout to avoid obscuration when keyboard is shown
    }

    @objc func keyboardWillHide(notification: Notification) {
        // Adjust the layout when the keyboard is hidden
    }
}
```

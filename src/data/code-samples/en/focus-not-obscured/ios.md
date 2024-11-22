# Focus not obscured - iOS

On iOS, you should ensure that any user interface component receiving keyboard focus is at least partially visible on the screen and not obscured by other content, such as sticky banners, footers, or pop-ups. Additionally, avoid placing interactive elements near areas where overlapping content, such as floating buttons or banners, could interfere with visibility.

```swift
    override func viewDidLoad() {
        super.viewDidLoad()

        // Listen to keyboard show/hide notification
        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)

        NotificationCenter.default.addObserver(self, selector: #selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
    }

     @objc func keyboardWillShow(notification: Notification) {
        // Adjust the layout to avoid the focused element being obscured by the onscren keyboard
    }

    @objc func keyboardWillHide(notification: Notification) {
        // Adjust the layout for events when the keyboard is hidden
    }
```

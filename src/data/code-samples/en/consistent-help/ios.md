# Consistent help - iOS

In iOS, place help buttons consistently across your app to enhance user experience and ensure that users can easily find assistance when needed. Help buttons should be positioned in a way that aligns with the app's overall layout and navigation patterns, such as in the top-right or bottom-right corners of screens.

```swift
// Create reusable HelpButton
class HelpButton: UIButton {
    // Help button functionality
}

class LoginViewController: UIViewController {
    // Place help button consistently across the app
    @IBOutlet weak var helpButton: HelpButton! 

    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
```

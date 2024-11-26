# Redundant entry - iOS

In iOS, store previously entered information and reuse this information on different screen. You can use [`UserDefaults`](https://developer.apple.com/documentation/foundation/userdefaults) to save the data and retrieve it when needed.

```swift
enum UserDefaultKey: String {
    static let emailAddress = "emailAddress"
}

class LoginViewController: UIViewController {
    @IBOutlet weak var emailTextField: UITextField!

    @IBAction func submitButtonTapped(_ sender: UIButton) {
        // Store data in UserDefaults on submit
        UserDefaults.standard.set(emailTextField.text, forKey: UserDefaultKey.emailAddress) 
    }
}

class ResetPasswordViewController: UIViewController {
    @IBOutlet weak var emailTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Pre-fill saved e-mail address on load
        emailTextField.text = UserDefaults.standard.string(forKey: UserDefaultKey.emailAddress)
    }
}
```

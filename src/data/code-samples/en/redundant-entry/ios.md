# Redundant entry - iOS

In iOS, store previously entered information and reuse it in a new form on a different screen. You can use [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) to save the data temporarily and retrieve it when needed.

```swift
class LoginViewController: UIViewController {
    @IBOutlet weak var emailTextField: UITextField!

    @IBAction func submitButtonTapped(_ sender: UIButton) {
        // Perform submit action and preserve data in UserDefaults.
        UserDefaults.standard.set(emailTextField.text, forKey: "emailAddress") 
    }
}

class ResetPasswordViewController: UIViewController {
    @IBOutlet weak var emailTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Pre-fill saved data.
        emailTextField.text = UserDefaults.standard.string(forKey: "emailAddress")
    }
}
```

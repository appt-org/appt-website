# Accessible authentication - iOS

## Text content type

In iOS, ensure that the [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield) elements used for authentication are properly marked up for the password manager to identify them. This means setting the right [`UITextContentType`](https://developer.apple.com/documentation/uikit/uitextcontenttype) authentication fields. Password managers typically recognize fields by these properties and can automatically fill in the credentials for the user.

```swift
class LoginViewController: UIViewController {
    @IBOutlet weak var usernameTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Setup appropriate textContentType for input fields.
        usernameTextField.textContentType = .username
        passwordTextField.textContentType = .password 
    }
```

## Universal links

Another example on how to provide an accessible authentication is to allow the user to authenticate by requesting an authentication email with the universal link.

1. Configure your app for [Universal Links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app):
In Xcode, enable `Associated Domains` in the `Signing & Capabilities` section.
Add the domain you’ll use for Universal Links (e.g., applinks:example.com).

2. Set up an [`apple-app-site-association`](https://developer.apple.com/documentation/xcode/supporting-associated-domains) file on your server to indicate which links should open your app:

```json
{
  "applinks": {
    "details": [
      {
        "appID": "TEAM_ID.com.yourapp.bundle",
        "paths": ["/login/*"]
      }
    ]
  }
}
```

3. Handle Universal Link in an app:

```swift
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(
      _ application: UIApplication,
      continue userActivity: NSUserActivity,
      restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void
      ) -> Bool {
        if let url = userActivity.webpageURL {
            // Handle incoming url
        }
    }
}
```

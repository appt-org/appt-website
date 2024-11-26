# Input authentication - iOS

In iOS, ensure that the [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield) elements used for authentication can be identified by password managers. This means you need to set an appropriate [`UITextContentType`](https://developer.apple.com/documentation/uikit/uitextcontenttype), such as [.username](https://developer.apple.com/documentation/uikit/uitextcontenttype/2866088-username) and [.password](https://developer.apple.com/documentation/uikit/uitextcontenttype/2865813-password).

Password managers typically recognize authentication fields based on these properties and can automatically fill in the credentials of the user.

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
}
```

Another example of providing accessible authentication is allowing users to authenticate by requesting an authentication email containing a `universal link`.

1. Configure your app for [Universal Links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app):
In Xcode, enable `Associated Domains` in the `Signing & Capabilities` section.
Add the domain you’ll use for Universal Links (e.g., `applinks:example.com`).

1. Set up an [`apple-app-site-association`](https://developer.apple.com/documentation/xcode/supporting-associated-domains) file on your server to indicate which links should open your app.

```json
{
  "applinks": {
    "details": [
      {
        "appID": "TEAM_ID.com.example.bundle",
        "paths": ["/auth/*"]
      }
    ]
  }
}
```

3. Handle the Universal Link in your app.

```swift
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(
      _ application: UIApplication,
      continue userActivity: NSUserActivity,
      restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void
      ) -> Bool {
        if let url = userActivity.webpageURL {
            // Authenticate based on parameters of incoming URL
        }
    }
}
```

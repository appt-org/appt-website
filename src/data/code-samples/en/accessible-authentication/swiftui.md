# Accessible authentication - SwiftUI

## Text content type

In SwiftUI, you need to ensure that the [`TextField`](https://developer.apple.com/documentation/swiftui/textfield) elements used for authentication are properly marked up for the password manager to identify them. This means applying correct [`textContentType`](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:)-ufdv) modifier for the username and password fields. Password managers typically recognize fields by these properties and can automatically fill in the credentials for the user.

```swift
struct LoginView: View {
    @State private var username: String = ""
    @State private var password: String = ""

    var body: some View {
        VStack {
            // Username TextField with support for password manager autofill
            TextField("Username", text: $username)
                .textContentType(.username) // Support for autofill
                .autocapitalization(.none)
            
            // Password TextField with support for password manager autofill
            SecureField("Password", text: $password)
                .textContentType(.password) // Support for autofill
                .padding()
        }
    }
}
```

## Universal links

Another example on how to provide an accessible authentication is to allow the user to authenticate by requesting an authentication email with the universal link.

1. Configure your app for [Universal Links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app):
In Xcode, enable Associated Domains in the Signing & Capabilities section.
Add the domain you’ll use for Universal Links (e.g., applinks:example.com).

2. Set up an apple-app-site-association file on your server to indicate which links should open your app:

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

3. Handle Universal Link in App:

```swift
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        if let url = userActivity.webpageURL {
            // Handle incoming url
        }
    }
}
```

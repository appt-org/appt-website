# Accessible authentication - SwiftUI

## Text content type

In SwiftUI, ensure that the [`TextField`](https://developer.apple.com/documentation/swiftui/textfield) elements used for authentication can be identified by password managers. This means you need to apply an appropriate [`textContentType`](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:)-ufdv) modifier, such as [.username](https://developer.apple.com/documentation/uikit/uitextcontenttype/2866088-username) and [.password](https://developer.apple.com/documentation/uikit/uitextcontenttype/2865813-password).

Password managers typically recognize authentication fields based on these properties and can automatically fill in the credentials of the user.

```swift
struct LoginView: View {
    @State private var username: String = ""
    @State private var password: String = ""

    var body: some View {
        VStack {
            // Username TextField
            TextField("Username", text: $username)
                .textContentType(.username) // Identify as username
                .autocapitalization(.none)
            
            // Password TextField
            SecureField("Password", text: $password)
                .textContentType(.password) // Identify as password
                .padding()
        }
    }
}
```

## Universal links

Another example of providing accessible authentication is allowing users to authenticate by requesting an authentication email containing a `universal link`.

1. Configure your app for [Universal Links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app):
In Xcode, enable `Associated Domains` in the `Signing & Capabilities` section.
Add the domain you’ll use for Universal Links (e.g., `applinks:example.com`).

2. Set up an [`apple-app-site-association`](https://developer.apple.com/documentation/xcode/supporting-associated-domains) file on your server to indicate which links should open your app.

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

3. Handle Universal Link in your app.

```swift
@main
struct ApptApp: App {
  
  var body: some Scene {
    WindowGroup {
      ContentView()
        .onOpenURL { url in
          // Authenticate based on parameters of incoming URL
        }
    }
  }
}
```

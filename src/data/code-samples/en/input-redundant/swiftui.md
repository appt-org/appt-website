# Input redundant - SwiftUI

In SwiftUI, store previously entered information and reuse this information on different screen. You can use [`UserDefaults`](https://developer.apple.com/documentation/foundation/userdefaults) to save the data and retrieve it when needed.

```swift
enum UserDefaultKey: String {
    static let emailAddress = "emailAddress"
}

struct LoginView: View {

    // Store `emailAddress` in UserDefaults
    @AppStorage(UserDefaultKey.emailAddress)
    private var email: String = ""

    @State private var password: String = ""

    var body: some View {
        VStack {
            TextField("Email", text: $email)
                .keyboardType(.emailAddress)
                .textContentType(.emailAddress)
            
            SecureField("Password", text: $password)
            
            Button("Login") {
                // Handle login action
            }
        }
    }
}

struct ResetPassword: View {

    // Use `emailAddress` from UserDefaults
    @AppStorage(serDefaultKey.emailAddress)
    private var email: String = ""

    var body: some View {
        VStack {
            TextField("Email", text: $email)
              .keyboardType(.emailAddress)
              .textContentType(.emailAddress)
            
            Button("Reset password") {
                // Handle reset action
            }
        }
    }
}
```

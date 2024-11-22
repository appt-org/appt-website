# Redundant entry - SwiftUI

In SwiftUI, store previously entered information and reuse it in a new form on a different screen. You can use [`UserDefaults`](https://developer.apple.com/documentation/foundation/userdefaults) to save the data temporarily and retrieve it when needed.

```swift
struct LoginView: View {
    @State private var email: String? = UserDefaults.standard.string(forKey: "emailAddress")

    var body: some View {
       TextField("Enter your email", text: $email)
        .onSubmit {
            UserDefaults.standard.set(self.email, forKey: "emailAddress")
       }
    }
}

struct ResetPassword: View {
    @State private var email: String? = UserDefaults.standard.string(forKey: "emailAddress")

    var body: some View {
       TextField("Enter your email", text: $email)
    }
}
```

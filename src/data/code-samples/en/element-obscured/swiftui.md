# Element obscured - SwiftUI

In SwiftUI, you should ensure that any user interface component receiving focus is at least partially visible on the screen and not obscured by other content, such as sticky banners, headers and footers. Additionally, avoid placing interactive elements near areas where overlapping content, such as floating buttons, could interfere with visibility.

```swift
import SwiftUI

struct ApptView: View {
    var body: some View {
        VStack {
            TextField("Appt")
        }
        .padding()
        .onReceive(Publishers.keyboard) { 
          // Adjust layout to avoid obscuration
        }
    }
}

extension Publishers {
    static var keyboard: AnyPublisher<(Bool, CGFloat?), Never> {
        let show = NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification)
            .compactMap { ($0.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect)?.height }
            .map { (true, $0) }

        let hide = NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification)
            .map { _ in (false, nil as CGFloat?) }

        return show.merge(with: hide).eraseToAnyPublisher()
    }
}
```

# Screen help - iOS

In iOS, place help buttons consistently across your app to enhance user experience and ensure that users can easily find assistance when needed. Help buttons should be positioned in a way that aligns with the app's overall layout and navigation patterns, such as in the top-right or bottom-right corners of a screen.

```swift
class HelpButton: UIButton {
    private func configure() {
        let config = UIImage.SymbolConfiguration(pointSize: 20, weight: .regular)
        let image = UIImage(systemName: "questionmark.circle", withConfiguration: config)
        setImage(image, for: .normal)
        accessibilityLabel = "Help"
    }
}

class ApptViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        let helpButton = HelpButton()
        // Set constraints consistently across screens
    }
}
```

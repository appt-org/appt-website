# Target size - iOS

In iOS, ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that all users, including those who rely on assistive technologies like [VoiceOver](/en/stats/screen-reader), can easily interact with buttons without accidentally triggering them.

```swift
@IBOutlet weak var stackView: UIStackView!  // Assuming you've connected the UIButton from the storyboard
@IBOutlet weak var loginButton: UIButton! // Button inside a stackView

override func viewDidLoad() {
    super.viewDidLoad()

    stackView.spacing = 24 // Set the spacing between the elements

    loginButton.contentEdgeInsets = UIEdgeInsets(
        top: 24,
        left: 24,
        bottom: 24,
        right: 24
    ) // Increase the button tap area increasing the icon/text size, similar to adding padding.
}
```

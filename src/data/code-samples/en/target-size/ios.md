# Target size - iOS

In iOS, ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that users can easily interact with buttons without accidentally triggering them.

```swift
// Assuming you've connected the UIButton from the storyboard
@IBOutlet weak var stackView: UIStackView!

// Button inside a stackView
@IBOutlet weak var loginButton: UIButton!

override func viewDidLoad() {
    super.viewDidLoad()

    stackView.spacing = 24 // Set the spacing between the elements

    // Increase the button tap area increasing the content size, similar to adding padding.
    loginButton.contentEdgeInsets = UIEdgeInsets(
        top: 24,
        left: 24,
        bottom: 24,
        right: 24
    )
}
```

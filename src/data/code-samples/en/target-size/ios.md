# Target size - iOS

In iOS, ensure that interactive elements have a target size of at least 24x24 points and ideally 44x44 points. This size helps ensure that users can easily interact with targets such as buttons.

```swift
@IBOutlet weak var stackView: UIStackView!
@IBOutlet weak var loginButton: UIButton!

override func viewDidLoad() {
    super.viewDidLoad()

    // Set sufficient spacing between elements
    stackView.spacing = 24 

    // Ensure target has sufficient width and height
    loginButton.contentEdgeInsets = UIEdgeInsets(
        top: 24,
        left: 24,
        bottom: 24,
        right: 24
    )
}
```

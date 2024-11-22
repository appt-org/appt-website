# Target size - iOS

In iOS, ensure that the interactive target minimum size of buttons meets accessibility guidelines, it’s recommended to use a minimum of 24x24 points for tappable elements. This size helps ensure that all users, including those who rely on assistive technologies like [VoiceOver](/en/stats/screen-reader), can easily interact with buttons without accidentally triggering them.

```swift
@IBOutlet weak var targetButton: UIButton!  // Assuming you've connected the UIButton from the storyboard

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Set padding to make the button 24x24 pixels
    targetButton.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
        targetButton.widthAnchor.constraint(equalToConstant: 24),
        targetButton.heightAnchor.constraint(equalToConstant: 24),
    ])
}
```

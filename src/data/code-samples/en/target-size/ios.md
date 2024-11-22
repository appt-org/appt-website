# Target size - iOS

In iOS, to ensure that the interactive target minimum size meets accessibility requirements, it is recommended to maintain a minimum size of 24x24 points for buttons and other tappable elements. This allows users, including those with mobility impairments and those using assistive technologies, to easily tap and interact with these elements. If using smaller buttons for design purposes, ensure there is ample padding and clear visual feedback to enhance touchability.

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

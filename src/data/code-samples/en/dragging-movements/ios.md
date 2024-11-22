# Dragging movements - iOS

In iOS, ensure that users who cannot perform precise dragging movements, such as those using assistive devices or with limited dexterity, can still access and interact with app features.

```swift
@IBOutlet weak var draggableBox: DraggableBox!
@IBOutlet weak var moveLeft: UIButton!
@IBOutlet weak var moveRight: UIButton!

override func viewDidLoad() {
    super.viewDidLoad()

    // Adding drag gesture
    let panGesture = UIPanGestureRecognizer(target: self, action: #selector(handleDrag(_:)))
    draggableBox.addGestureRecognizer(panGesture)

    @objc private func handleDrag(_ gesture: UIPanGestureRecognizer) {
        // Main draggable box action
    }

    @IBAction private func moveLeft(sender: UIButton) {
        // Alternative action to dragging action
    }

    @IBAction private func moveRight(sender: UIButton) {
        // Alternative action to dragging action
    }
}
```

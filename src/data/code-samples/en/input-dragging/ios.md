# Input dragging - iOS

In iOS, ensure that users who cannot perform precise dragging movements, such as those using assistive devices or with limited dexterity, can still access and interact with app features.

```swift
class SliderViewController: UIViewController {

    @IBOutlet weak var slider: UISlider!
    @IBOutlet weak var moveLeft: UIButton!
    @IBOutlet weak var moveRight: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Setup slider
    }

    // Alternative action to decrease
    @IBAction private func decrease(sender: UIButton) {
        slider.value = max(slider.value - 1, slider.minimumValue)
    }

    // Alternative action to increase
    @IBAction private func increase(sender: UIButton) {
        slider.value = min(slider.value + 1, slider.maximumValue)
    }
}
```

# Input dragging - SwiftUI

In SwiftUI, ensure that users who cannot perform precise dragging movements, such as those using assistive devices or with limited dexterity, can still access and interact with app features.

```swift
struct SliderView: View {
    @State private var sliderValue: Double = 50 // Initial value

    var body: some View {
        VStack(spacing: 24) {
            // Slider
            Slider(value: $sliderValue, in: 0...100, step: 1)
            
            HStack {
                // Alternative action to decrease
                Button(action: {
                    sliderValue -= 1
                }) {
                    Text("-1")
                }
                
                // Alternative action to increase
                Button(action: {
                    sliderValue += 1
                }) {
                    Text("+1")
                }
            }
        }
    }
}
```

# Dragging movements - SwiftUI

In SwiftUI, ensure that users who cannot perform precise dragging movements, such as those using assistive devices or with limited dexterity, can still access and interact with app features.

```swift
@State private var sliderValue: Double = 50 // Initial value

var body: some View {
    VStack(spacing: 20) {
        // Slider
        Slider(value: $sliderValue, in: 0...100, step: 1)
        
        // Button Alternatives
        HStack {
            Button(action: {
                // Decrease slider value by 1
                sliderValue -= 1
            }) {
                Text("-1")
            }
            
            Button(action: {
                // Increase slider value by 1
                sliderValue += 1
            }) {
                Text("+1")
            }
        }
    }.padding()
}
```

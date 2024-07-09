# Frequent flashes - SwiftUI

In SwiftUI, flashing content often utilizes [`DispatchQueue`](https://developer.apple.com/documentation/dispatch/dispatchqueue) or [`Timer`](https://developer.apple.com/documentation/foundation/timer). Ensure that these objects are not used to create more than three flashes per second.

Additionally, if your app includes any videos, verify that they do not contain more than three flashes per second.


```swift
// Timer to control the flashing rate
// Flash every 1/3 second (3 times per second)
let timer = Timer.publish(every: 1 / 3, on: .main, in: .common).autoconnect()

@State private var isFlashing = false

var body: some View {
    Text("Flashing Content")
        .foregroundColor(isFlashing ? .white : .black)
        .background(isFlashing ? .black : .white)
        .onReceive(timer) { _ in
            isFlashing.toggle()
        }
        .onAppear {
            isFlashing = true
        }
}
```

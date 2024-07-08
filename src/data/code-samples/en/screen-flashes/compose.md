# Frequent flashes - Jetpack Compose

In Jetpack Compose, flashing content often uses [`LaunchedEffect`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#LaunchedEffect(kotlin.Any,kotlin.coroutines.SuspendFunction1)) with infinite loop, or [`Timer`](https://developer.android.com/reference/java/util/Timer). Check if these objects are used to show more than three flashes per second.

If your app contains any videos, also check if these contain more than three flashes per second.

```kotlin
var isFlashing by remember { mutableStateOf(false) }
val coroutineScope = rememberCoroutineScope()

// Timer to control the flashing rate
// Flash every 1/3 second (3 times per second)
// Do not do this
LaunchedEffect(Unit) {
    coroutineScope.launch {
        while (true) {
            delay(333) // 1/3 second
            isFlashing = !isFlashing
        }
    }
}

Box(
    modifier = Modifier
        .fillMaxSize()
        .background(if (isFlashing) Color.Black else Color.White)
    contentAlignment = Alignment.Center
) {
    Text(
        text = "Flashing Content",
        color = if (isFlashing) Color.White else Color.Black
    )
}
```

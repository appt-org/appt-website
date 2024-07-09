# Motion input - Jetpack Compose

In Jetpack Compose, the [`SensorManager`](https://developer.android.com/reference/android/hardware/SensorManager) can be used in combination with [`SensorEventListener`](https://developer.android.com/reference/android/hardware/SensorEventListener) to detect movement.

An event through sensors should not be the only way to trigger actions. Make sure to provide a second way, such as a button, to trigger the same action.

```kotlin
val context = LocalContext.current
var sensorValue by remember { mutableStateOf("") }

DisposableEffect(Unit) {
    val sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    val sensor = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    val sensorListener = object : SensorEventListener {
        override fun onSensorChanged(event: SensorEvent?) {
            // Add alternative
        }

        override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
            // Handle accuracy changes if necessary
        }
    }
    sensorManager.registerListener(sensorListener, sensor, SensorManager.SENSOR_DELAY_NORMAL)

    // Unregister the listener when the composable is disposed
    onDispose {
        sensorManager.unregisterListener(sensorListener)
    }
}
```

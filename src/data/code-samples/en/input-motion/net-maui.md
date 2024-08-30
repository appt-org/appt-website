# Motion input - .NET MAUI

In MAUI, to listen to motion events, you can use the [`Accelerometer API`](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/device/sensors#accelerometer). Make sure to follow the setup instructions for each platform to ensure it works correctly.

```csharp

public void UpdateAccelerometer()
{
    if (Accelerometer.Default.IsSupported)
    {
        if (Accelerometer.Default.IsMonitoring)
        {
            // Turn off
            Accelerometer.Default.Stop();
            Accelerometer.Default.ReadingChanged -= Accelerometer_ReadingChanged;
        }
        else
        {
            // Turn on
            Accelerometer.Default.ReadingChanged += Accelerometer_ReadingChanged;
            Accelerometer.Default.Start(SensorSpeed.UI);
        }
    }
}

private void Accelerometer_ReadingChanged(object? sender, AccelerometerChangedEventArgs e)
{
    //Apply any logic
}

```

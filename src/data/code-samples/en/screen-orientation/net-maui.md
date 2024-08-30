# Screen orientation - .NET MAUI

MAUI offers a simple way to listen for screen orientation changes by subscribing to the [`DeviceDisplay.Current.MainDisplayInfoChanged`](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/device/display) handler.

```csharp

DeviceDisplay.Current.MainDisplayInfoChanged += (sender, displayChanges) =>
{
    var newOrientation = displayChanges.DisplayInfo.Orientation;

    //Apply any logic
};

```

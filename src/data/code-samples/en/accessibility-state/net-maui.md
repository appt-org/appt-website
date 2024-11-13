# Accessibility state - .NET MAUI

In MAUI, there is no built-in support to indicate an accessibility state.

By intercepting the handler changed event, you can set the `StateDescription` on Android or `AccessibilityValue` on iOS.

```xml title="CustomEntry.xaml"
<Entry
  x:Name="Field"
  HandlerChanged="Entry_HandlerChanged"
  Text="{Binding Text}" />
```

Partial class on Android:

```csharp title=""
public partial class PinTilesCodeEntryView
{
  private AndroidX.AppCompat.Widget.AppCompatEditText? editor;

  private void Entry_HandlerChanged(object? sender, EventArgs? e)
  {
    if (sender.Handler?.PlatformView is AndroidX.AppCompat.Widget.AppCompatEditText field)
    {
      if (Android.OS.Build.VERSION.SdkInt >= Android.OS.BuildVersionCodes.R)
      {
        field.StateDescription = "Custom value";
      } 
    }
  }
}
```

Partial class on iOS:

```csharp title="CustomEntry.xaml.iOS.cs"
private void Entry_HandlerChanged(object? sender, EventArgs? e)
{
  if (sender.Handler?.PlatformView is UITextField field)
  {
    field.AccessibilityValue = "Custom value";
  }
}
```

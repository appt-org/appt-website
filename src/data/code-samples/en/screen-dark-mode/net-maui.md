# Dark mode - .NET MAUI

In MAUI, you can detect the current theme configuration using the [`Application.Current.RequestedTheme`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/system-theme-changes?view=net-maui-8.0#detect-the-current-system-theme) property.

```csharp

public bool IsInDarkMode
    => Application.Current.RequestedTheme == AppTheme.Dark;

```

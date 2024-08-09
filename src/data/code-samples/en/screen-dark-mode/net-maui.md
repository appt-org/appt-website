# Dark mode - .NET MAUI

On MAUI you can detect the current theme configuration using the next property [`Application.Current.RequestedTheme`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/system-theme-changes?view=net-maui-8.0#detect-the-current-system-theme)

```csharp

public bool IsInDarkMode
    => Application.Current.RequestedTheme == AppTheme.Dark;

```

# Adjustable timing - .NET MAUI

In MAUI, the `SnackBar` view from the [`MAUI.CommunityToolkit`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/) is often used to display temporary messages. However, the display duration might be too short for people to read or hear the message.

When using `SnackBar`, set the `Duration` to `TimeSpan.MaxValue`. Alternatively, use the [`DisplayAlert`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pop-ups#display-an-alert) method to show an alert instead.

Also, make sure that the use of time limits, such as those set with [`Timer`](https://learn.microsoft.com/en-us/dotnet/api/System.Threading.Timer), can be extended.

```csharp
var snackbar = Snackbar.Make("Appt",
    () =>
    {
        //Apply any logic
    },
    "Close",
    TimeSpan.MaxValue);

await snackbar.Show();
```

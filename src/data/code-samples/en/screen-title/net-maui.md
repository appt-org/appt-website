# Screen title - .NET MAUI

In MAUI, we recommend setting an appropriate [`Title`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.page.title) for each [`ContentPage`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/contentpage).

```xml
<ContentPage
    x:Class="NewPage"
    xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
    Title="Appt homescreen">
</ContentPage>
```

```csharp
public NewPage()
{
    Title = "Appt homescreen";
}
```

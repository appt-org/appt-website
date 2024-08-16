# Input errors - .NET MAUI

On MAUI there no built-in component for this, but you can hide/show a [`Label`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/label) to show an error message.

Usage (C#)

```csharp

label.Text = "This is an error message";
label.IsVisible = true;

```

Usage (XAML)

```xml

<Label
    Text="This is an error message"
    IsVisible="True" />

```

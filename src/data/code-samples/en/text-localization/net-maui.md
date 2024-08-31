# Localization - .NET MAUI

In MAUI, there are several ways to handle localization. You can achieve this using the native approach via app resources, but it is recommended to use the .NET approach via [`RESX` files](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/localization). Make sure you follow all the instructions in the documentation to ensure it works correctly. After adding the strings into your `RESX` files, you can simply use them as follows:

Usage (XAML)

```xml
<Label
    Text="{Static resources:Strings.HelloMessage}" />
```

Usage (C#)

```csharp
var label = new Label();
label.Text = Strings.HelloMessage;
```

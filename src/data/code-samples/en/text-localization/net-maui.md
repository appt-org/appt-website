# Localization - .NET MAUI

MAUI offers several way to handle localization you can achieve by using the native approch via app resources, but also the recommendation is to use the .NET approach via [`RESX files`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/localization), make sure you follow all the instructions at the docs in order to make it work accordingly, after adding the strings into your Resx files you can simple use as following:

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

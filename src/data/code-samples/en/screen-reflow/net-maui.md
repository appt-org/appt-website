# Reflow - .NET MAUI

On MAUI, you can put the UI elements inside of a [`ScrollView`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/scrollview), other components are availabe for dynamic UI such as:

- [`CollectionView`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/collectionview/): for multi dimensional content
- [`ListView`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/listview): for one dimensional content
- [`WebView`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/webview): for web content

Usage (C#)

```csharp

var scrollView = new ScrollView
{
    Content = new Label
    {
        Text = "Content should scroll!"
    }
};

```

Usage (XAML)

```xml

<ScrollView>
    <Label Text="Content should scroll!" />
</ScrollView>

```

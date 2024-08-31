# Reflow - .NET MAUI

In MAUI, you can put UI elements inside a [`ScrollView`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/scrollview). Other components available for dynamic UI include:

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

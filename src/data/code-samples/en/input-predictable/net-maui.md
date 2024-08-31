# Input predictable - .NET MAUI

In MAUI, all input components have the [`TextChanged`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.inputview.textchanged) handler to listen for any changes to the input text.

Usage (C#)

```csharp
var entry = new Entry();
entry.TextChanged += Entry_TextChanged;

private void Entry_TextChanged(object? sender, TextChangedEventArgs e)
{
    //Apply any logic
}
```

Usage (XAML)

```xml
<Entry
    TextChanged="Entry_TextChanged" />
```

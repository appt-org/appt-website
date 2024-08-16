# Input predictable - .NET MAUI

On MAUI all input components has the [`TextChanged`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.inputview.textchanged) handler to listen any change on the input text.

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

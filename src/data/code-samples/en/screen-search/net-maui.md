# Search functionality - .NET MAUI

In MAUI, you can use the built-in [`SearchBar`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/searchbar) component.

Usage (C#)

```csharp
var searchBar = new SearchBar();
searchBar.TextChanged += SearchBar_TextChanged;

void SearchBar_TextChanged(object? sender, TextChangedEventArgs e)
{
    //Apply any logic
}
```

Usage (XAML)

```xml
<SearchBar TextChanged="SearchFunction" />
```

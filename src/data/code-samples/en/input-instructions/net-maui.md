# Input instructions - .NET MAUI

In MAUI, to set the input instructions, you can use the [`SemanticProperties.Description`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#description) attached property.

Usage (C#)

```csharp

var entry = new Entry();
SemanticProperties.SetDescription(entry, "Your password should be at least 8 characters.");

```

Usage (XAML)

```xml

<Entry
    SemanticProperties.Description="Your password should be at least 8 characters." />

```

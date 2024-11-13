# Descriptive headers - .NET MAUI

In MAUI, there [`heading levels`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#heading-levels) is a built-in feature that can be used to mark headings.

Usage (C#)

```csharp
var headerLabel = new Label
{
    Text = "Hello"
};
SemanticProperties.SetHeadingLevel(headerLabel, SemanticHeadingLevel.Level1);
```

Usage (XAML)

```xml
<Label
    SemanticProperties.HeadingLevel="Level1"
    Text="Hello" />
```

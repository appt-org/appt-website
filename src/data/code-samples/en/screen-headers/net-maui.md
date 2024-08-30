# Descriptive headers - .NET MAUI

MAUI offers a built-in [`heading levels`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#heading-levels) feature that can be used to set up header items.

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

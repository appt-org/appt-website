# Text truncation - .NET MAUI

On MAUI, the Label component has the [`MaxLines`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/label#display-a-specific-number-of-lines) property set to -1 by default making labels not being truncated, you can modify this behavior by changing the property.

```xml

<Label
    Text="Avoid text truncation"
    MaxLines="-1" />
    
```

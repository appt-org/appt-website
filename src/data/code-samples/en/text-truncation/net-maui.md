# Text truncation - .NET MAUI

In MAUI, the `Label` component has the [`MaxLines`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/label#display-a-specific-number-of-lines) property set to `-1` by default, making labels not truncated. You can modify this behavior by changing the `MaxLines` property to a specific number.

```xml
<Label
    Text="Avoid text truncation"
    MaxLines="-1" />
```

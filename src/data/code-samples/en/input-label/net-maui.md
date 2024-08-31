# Input label - .NET MAUI

In MAUI, there are a two ways to label a component by another one:

1. Since .NET 8 you can use the [`SemanticProperties.Description`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#description) property.
2. In older versions, you can use [`AutomationProperties.LabeledBy`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#labeledby), which is now deprecated.

New usage (.NET 8 and up)

```xml
<Label x:Name="headerLabel" Text="Enter your name: " />
<Entry AutomationProperties.IsInAccessibleTree="true"
    SemanticProperties.Description="{Binding Text, Source={x:Reference headerLabel}}" />
```

Deprecated usage:

```csharp
<Label x:Name="headerLabel" Text="Enter your name: " />
<Entry AutomationProperties.IsInAccessibleTree="true"
    AutomationProperties.LabeledBy="{x:Reference headerLabel}" />
```

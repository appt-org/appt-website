# Input label - .NET MAUI

MAUI inlcudes a built-in property to label a component by another one, you can use [`AutomationProperties.LabeledBy`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#labeledby) which is deprecated and starting .NET 8 now you can use the [`SemanticProperties.Description`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#description) property.

OLD Deprecated Usage

```csharp

<Label x:Name="headerLabel" Text="Enter your name: " />
<Entry AutomationProperties.IsInAccessibleTree="true"
    AutomationProperties.LabeledBy="{x:Reference headerLabel}" />

```

New Usage (.NET 8 and up)

```xml

<Label x:Name="headerLabel" Text="Enter your name: " />
<Entry AutomationProperties.IsInAccessibleTree="true"
    SemanticProperties.Description="{Binding Text, Source={x:Reference headerLabel}}" />

```

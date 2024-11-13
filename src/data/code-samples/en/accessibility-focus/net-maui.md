# Accessibility focus - .NET MAUI

In MAUI, the [`SemanticExtensions`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.semanticextensions?view=net-maui-8.0) class contains the `SetSemanticFocus` method. This method moves the accessibility focus to the given element on the native platform.

The code sample below shows how to move the accessibility focus to a specific element.

```xml
<HorizontalStackLayout
    x:Name="MenuButtonLayout"
    AutomationId="MenuButton"
    AutomationProperties.IsInAccessibleTree="True"
    SemanticProperties.Description="Menu container"
    Padding="0,0,5,0">
    <Button 
        Text="Click to set semantic focus to the label below"
        Clicked="SetSemanticFocus_Clicked"/>

    <Label 
        x:Name="semanticFocusLbl"
        Text="Label to set semantic focus"/>
</HorizontalStackLayout>
```

```csharp
private void SetSemanticFocus_Clicked(object sender, System.EventArgs e)
{
  semanticFocusLbl.SetSemanticFocus();
}
```

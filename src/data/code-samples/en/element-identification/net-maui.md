# Element identification - .NET MAUI

In MAUI, you should create a custom `View` or [`extend an existing one`](https://devblogs.microsoft.com/dotnet/customizing-dotnet-maui-controls/) to reuse functionality on multiple screens. You can also customize it via styles.

You can use your IDE's "Find All References" feature to see where the component is referenced.

For example, when using a cross icon for closing a screen, make sure the label is `Close` on all screens and verify that it consistently closes the screen.

Example of creating a custom UI component:

```csharp

public class CustomView : ContentView
{
    public CustomView()
    {
        SemanticProperties.SetDescription(this, "CustomNavigationBar");

        Content = new StackLayout
        {
        };
    }
}

```

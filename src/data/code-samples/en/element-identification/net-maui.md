# Element identification - .NET MAUI

In MAUI, you should create custom `View` or [`extend an existing one`](https://devblogs.microsoft.com/dotnet/customizing-dotnet-maui-controls/) to re-use functionality on multiple screens you can also customize it via Syles.

You can use your IDE "Find All References" to see the places where the component is referenced.

For example, when using a cross icon for closing a screen, make sure the label is 'Close' on all screens, and check that it always closes a screen.

Example on creating a custom UI component.

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

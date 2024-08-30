# Input cancellation - .NET MAUI

In MAUI, you can simply use the [`IsEnabled`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.visualelement.isenabled) property if you want to disable user interaction. You can also subscribe to the [`Command`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button#use-the-command-interface), [`Clicked`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button), or [`Pressed/Released`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button#press-and-release-the-button) events if the component is actionable, like a Button. If the component doesn't offer an action, you can use any [`Gesture Recognizer`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/drag-and-drop) to capture user interactions.

```csharp

var button = new Button();
button.Clicked += (sender, args) =>
{
    //Apply any logic
};
button.Pressed += (sender, args) =>
{
    //Apply any logic
};
button.Released += (sender, args) =>
{
    //Apply any logic
};

```

```csharp

<Button Text="Hello"
        Clicked="Button_Clicked"
        Pressed="Button_Pressed"
        Released="Button_Released" />
```

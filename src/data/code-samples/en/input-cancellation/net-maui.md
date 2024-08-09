# Input cancellation - .NET MAUI

On MAUI you can simple use the [`IsEnable`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.visualelement.isenabled) property if you want to disable the user interaction or subcribe to the [`Command`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button#use-the-command-interface) / [`Clicked`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button) / [`Pressed/Released`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/button#press-and-release-the-button) if the components is actionable like the Button, if the component doens't offer an action you can use any [`Gesture Recognizer`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/drag-and-drop) to capture user's interaction.

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

# Keyboard shortcuts - .NET MAUI

While MAUI does not offer a cross-platform way to achieve this, you can listen for keypresses by overriding the default [`MainActivity.KeyUp`](https://learn.microsoft.com/en-us/dotnet/api/android.app.activity.onkeyup) method for Android, and for iOS by setting up a [`UIKeyCommand`](https://learn.microsoft.com/es-es/dotnet/api/uikit.uikeycommand) inside the default `AppDelegate`.

Android

```csharp

[Activity(Theme = "@style/Maui.SplashTheme", MainLauncher = true, LaunchMode = LaunchMode.SingleTop, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode | ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize | ConfigChanges.Density)]
public class MainActivity : MauiAppCompatActivity
{
    public override bool OnKeyUp([GeneratedEnum] Keycode keyCode, KeyEvent? e)
    {
        if (keyCode == Keycode.F && e.IsCtrlPressed)
        {
            //Apply any logic

            return true;
        }

        return base.OnKeyUp(keyCode, e);
    }
}

```

iOS

```csharp

[Register("AppDelegate")]
public class AppDelegate : MauiUIApplicationDelegate
{
    public UIKeyCommand FKeyCommand = UIKeyCommand.Create(new NSString("f"), UIKeyModifierFlags.Control, new ObjCRuntime.Selector("Action:"));

    protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();

    public override UIKeyCommand[] KeyCommands
        => new[] { FKeyCommand };

    [Export("Action:")]
    private void Excute(UIKeyCommand keyCommand)
    {
        //Apply any logic
    }
}

```

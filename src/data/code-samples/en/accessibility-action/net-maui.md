# Accessibility action - .NET MAUI

In MAUI, there is no built-in way to create a custom action, but you can achieve this via [`Platform Behavior`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/behaviors#platform-behaviors). See the code below for an example of usage.

```csharp
public class AccessibilityCustomActionBehavior
#if IOS
    : PlatformBehavior<View, UIKit.UIView>
#elif ANDROID
    : PlatformBehavior<View, Android.Views.View>
#endif

{
    private int androidActionId = -1;

    public static readonly BindableProperty NameProperty =
        BindableProperty.Create(
            nameof(Name), 
            typeof(string), 
            typeof(AccessibilityCustomActionBehavior), null, 
            BindingMode.TwoWay
        );

    public static readonly BindableProperty ActionProperty =
        BindableProperty.Create(
            nameof(Action), 
            typeof(Func<bool>), 
            typeof(AccessibilityCustomActionBehavior), 
            null, 
            BindingMode.TwoWay
        );

    public string Name
    {
        get => (string)GetValue(NameProperty);
        set => SetValue(NameProperty, value);
    }

    public Func<bool> Action
    {
        get => (Func<bool>)GetValue(ActionProperty);
        set => SetValue(ActionProperty, value);
    }

    protected override void OnAttachedTo
#if IOS
        (View bindable, UIKit.UIView platformView)
#elif ANDROID
        (View bindable, Android.Views.View platformView)
#endif
    {
        base.OnAttachedTo(bindable, platformView);

#if IOS
        var customAction = new UIKit.UIAccessibilityCustomAction(Name, probe: (sender) =>
        {
            return Action?.Invoke() ?? false;
        });

        platformView.AccessibilityCustomActions = new[]
        {
            customAction
        };
#elif ANDROID
        androidActionId = AndroidX.Core.View.ViewCompat.AddAccessibilityAction(
            platformView, 
            Name, 
            new CustomAndroidAccessibilityAction(Action)
        );
#endif
    }

    protected override void OnDetachedFrom
#if IOS
        (View bindable, UIKit.UIView platformView)
#elif ANDROID
        (View bindable, Android.Views.View platformView)
#endif
    {
        base.OnDetachedFrom(bindable, platformView);

#if IOS
        platformView.AccessibilityCustomActions = null;
#elif ANDROID
        if (androidActionId != -1)
        {
            AndroidX.Core.View.ViewCompat.RemoveAccessibilityAction(
                platformView, 
                androidActionId
            );
        }
#endif
    }

#if ANDROID

    public class CustomAndroidAccessibilityAction : 
        Java.Lang.Object, 
        AndroidX.Core.View.Accessibility.IAccessibilityViewCommand
    {
        Func<bool> action;

        public CustomAndroidAccessibilityAction(Func<bool> action)
        {
            ArgumentNullException.ThrowIfNull(action);

            this.action = action;
        }

        public bool Perform(
            Android.Views.View view, 
            AndroidX.Core.View.Accessibility.AccessibilityViewCommandCommandArguments? arguments)
        {
            return action();
        }
    }

#endif
}
```

Usage (XAML)

```xml
<Image
    Source="dotnet_bot.png"
    HeightRequest="185">
    <Image.Behaviors>
        <local:AccessibilityCustomActionBehavior
            BindingContext="{Binding BindingContext, Source={Reference Parent}}"
            Name="{Binding Title}"
            Action="{Binding CustomAction}" />
    </Image.Behaviors>
</Image>
```

Usage (C#)

```csharp
var image = new Image();
image.Behaviors.Add(new AccessibilityCustomActionBehavior
{
    Name = "",
    Action = () =>
    {
        // Custom action logic
        return true;
    }
});
```

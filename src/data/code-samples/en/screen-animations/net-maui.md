# Reduced animations - .NET MAUI

In MAUI, animations are disabled by default if the user has that option enabled in the device settings. However, you can check and apply custom logic by using platform-specific code.

```csharp

#if IOS

if(UIKit.UIAccessibility.IsReduceMotionEnabled)
{
    UIKit.UIView.AnimationsEnabled = false; ;
}

#elif ANDROID

var duration = Android.Provider.Settings.Global.GetFloat(
    Platform.AppContext.ContentResolver,
    Android.Provider.Settings.Global.AnimatorDurationScale,
    1f);

var transition = Android.Provider.Settings.Global.GetFloat(
    Platform.AppContext.ContentResolver,
    Android.Provider.Settings.Global.TransitionAnimationScale,
    1f);

if (duration == 0f || transition == 0f)
{
}

#endif

```

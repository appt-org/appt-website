# Reduced animations - .NET MAUI

On MAUI by default the animation are disabled if the user has that option enabled on the device settings, but in fact you can check and apply any custom logic by checking the platform specific code.

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

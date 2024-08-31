# Bold text - .NET MAUI

In MAUI, there is no built-in way to detect if the user has enabled bold fonts. You can create a method and consume the Native API to detect user preferences.

For Android, you can use the [`App Resources Config`](https://learn.microsoft.com/es-es/dotnet/api/android.content.res.configuration.fontweightadjustment?view=net-android-34.0#android-content-res-configuration-fontweightadjustment).

For iOS, you can use [`UIKit.UIAccessibility.IsBoldTextEnabled`](https://learn.microsoft.com/en-us/dotnet/api/uikit.uiaccessibility.isboldtextenabled?view=xamarin-ios-sdk-12#uikit-uiaccessibility-isboldtextenabled).

```csharp
public bool PrefersBold()
{
#if ANDROID

    if (OperatingSystem.IsAndroidVersionAtLeast(31))
    {
        return false;
    }

    return Platform.AppContext.Resources.Configuration.FontWeightAdjustment >= Android.Graphics.Fonts.FontStyle.FontWeightBold;

#elif IOS

    return UIKit.UIAccessibility.IsBoldTextEnabled;

#endif
}
```

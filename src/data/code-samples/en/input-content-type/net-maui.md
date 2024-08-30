# Input content type - .NET MAUI

In MAUI, there is no built-in way to create a custom action, but you can achieve this via [`Platform Behavior`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/behaviors#platform-behaviors). See the code for an example of usage.

PlatformBehavior

```csharp

public class InputContentTypeBehavior
#if IOS
    : PlatformBehavior<Entry, UIKit.UITextField>
#elif ANDROID
    : PlatformBehavior<Entry, Android.Widget.EditText>
#endif
{
    public static readonly BindableProperty FieldTypeAndroidProperty =
        BindableProperty.Create(nameof(FieldTypeAndroid), typeof(FieldTypeAndroid), typeof(AccessibilityCustomActionBehavior), FieldTypeAndroid.None);

    public FieldTypeAndroid FieldTypeAndroid
    {
        get => (FieldTypeAndroid)GetValue(FieldTypeAndroidProperty);
        set => SetValue(FieldTypeAndroidProperty, value);
    }

    public static readonly BindableProperty FieldTypeiOSProperty =
        BindableProperty.Create(nameof(FieldTypeiOS), typeof(FieldTypeiOS), typeof(AccessibilityCustomActionBehavior), FieldTypeiOS.None);

    public FieldTypeiOS FieldTypeiOS
    {
        get => (FieldTypeiOS)GetValue(FieldTypeiOSProperty);
        set => SetValue(FieldTypeiOSProperty, value);
    }

#if ANDROID

    protected override void OnAttachedTo(Entry bindable, Android.Widget.EditText platformView)
    {
        base.OnAttachedTo(bindable, platformView);

        if (FieldTypeAndroid != FieldTypeAndroid.None)
        {
            platformView.SetAutofillHints(FirstCharToLowerCase(FieldTypeAndroid.ToString()));
        }
    }

    private string? FirstCharToLowerCase(string? str)
    {
        if (!string.IsNullOrEmpty(str) && char.IsUpper(str[0]))
            return str.Length == 1 ? char.ToLower(str[0]).ToString() : char.ToLower(str[0]) + str[1..];

        return str;
    }

#elif IOS

    protected override void OnAttachedTo(Entry bindable, UIKit.UITextField platformView)
    {
        base.OnAttachedTo(bindable, platformView);

        var textType = GetiOSFieldType(FieldTypeiOS);

        platformView.TextContentType = textType;
    }

    private Foundation.NSString GetiOSFieldType(FieldTypeiOS fieldType)
    {
        try
        {
            var propertyInfo = typeof(UIKit.UITextContentType)
                .GetProperty(fieldType.ToString(), System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static);

            return (Foundation.NSString)propertyInfo.GetValue(null, null);
        }
        catch { }

        return Foundation.NSString.Empty;
    }

#endif
}

public enum FieldTypeAndroid
{
    None,
    CreditCardExpirationDate,
    CreditCardExpirationDay,
    CreditCardExpirationMonth,
    CreditCardExpirationYear,
    CreditCardNumber,
    CreditCardSecurityCode,
    EmailAddress,
    Name,
    Password,
    Phone,
    PostalAddress,
    PostalCode,
    Username
}

public enum FieldTypeiOS
{
    None,
    AddressCity,
    AddressCityAndState,
    AddressState,
    CountryName,
    CreditCardNumber,
    EmailAddress,
    FullStreetAddress,
    GivenName,
    JobTitle,
    Location,
    MiddleName,
    Name,
    NamePrefix,
    NameSuffix,
    NewPassword,
    Nickname,
    OneTimeCode,
    OrganizationName,
    Password,
    PostalCode,
    StreetAddressLine1,
    StreetAddressLine2,
    Sublocality,
    TelephoneNumber,
    Url,
    Username
}

```

Usage (XAML)

```xml

<Entry>
    <Entry.Behaviors>
        <local:InputContentTypeBehavior FieldTypeAndroid="EmailAddress" FieldTypeiOS="NewPassword" />
    </Entry.Behaviors>
</Entry>

```

Usage (C#)

```csharp

var entry = new Entry();
entry.Behaviors.Add(new InputContentTypeBehavior
{
    FieldTypeAndroid = FieldTypeAndroid.CreditCardExpirationDate,
    FieldTypeiOS = FieldTypeiOS.AddressCity
});

```

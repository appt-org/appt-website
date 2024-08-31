# Input keyboard type - .NET MAUI

In MAUI, there is a built-in property for input fields([`Entry`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/entry) & [`Editor`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/editor)) named [`Keyboard`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/entry#customize-the-keyboard) with the next possible values:

- Chat
- Default
- Email
- Numeric
- Plain
- Telephone
- Text
- Url

Usage (C#)

```csharp
entry.Text = "This is an error message";
entry.Keyboard = Keyboard.Numeric;
```

Usage (XAML)

```xml
<Editor Keyboard="Telephone" />
```

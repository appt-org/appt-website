# Text spacing - .NET MAUI

MAUI offers a few properties to adjust text spacing:

- [`CharacterSpacing`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.label.characterspacing): set spacing between characters.
- [`LineHeight`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.label.characterspacing): set spacing between lines.
- [`Padding`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.controls.label.padding): set padding between paragraphs

You can also make a [`Platform Behavior`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/behaviors?view=net-maui-8.0#platform-behaviors) to use even more properties from native Android and iOS elements.

Usage (C#)

```csharp

var label = new Label
{
    CharacterSpacing = 3,
    LineHeight = 32,
    Padding = 10
};

```

Usage (XAML)

```xml

<Label CharacterSpacing="3" LineHeight="32" Margin="10" Padding="10" />

```

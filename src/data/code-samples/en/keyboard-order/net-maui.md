# Keyboard order - .NET MAUI

In MAUI, there is no built-in way to set the order, but you can use the [`SemanticOrderView`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/semantic-order-view) from the [`MAUI Community Toolkit`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui).

XAML Config

```xml

xmlns:toolkit="http://schemas.microsoft.com/dotnet/2022/maui/toolkit"

<toolkit:SemanticOrderView x:Name="SemanticOrderView">
    <VerticalStackLayout>
        <Entry x:Name="EmailEntry" />
        <Entry x:Name="PasswordEntry" IsPassword="True" />
    </VerticalStackLayout>
</toolkit:SemanticOrderView>

```

And in code behind set the order

```csharp

SemanticOrderView.ViewOrder = new List<View> { EmailEntry, PasswordEntry };

```

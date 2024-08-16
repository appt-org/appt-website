# Accessibility modal - .NET MAUI

You can use 2 approaches to display modals:

- MAUI's default Navigation PushModalAsync more details [`here`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/navigationpage#push-pages-to-the-modal-stack)

```csharp

Navigation.PushModalAsync(new ModalPageToDisplay());

```

- [`MAUI Community Toolkit`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/") Popups for more details [`here`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/popup)

```csharp

var popup = new SimplePopup();

rootPage.ShowPopup(popup);

```

both approaches follows the standard native behavior for presenting modals/popups.

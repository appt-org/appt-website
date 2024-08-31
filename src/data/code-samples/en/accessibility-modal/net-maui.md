# Accessibility modal - .NET MAUI

In MAUI, you can use two approaches to display modals:

- MAUI's default `Navigation.PushModalAsync`. More details [`here`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/pages/navigationpage#push-pages-to-the-modal-stack).

```csharp
Navigation.PushModalAsync(new ModalPageToDisplay());
```

- [`MAUI Community Toolkit`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/") Popups for more details [`here`](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/views/popup)

```csharp
var popup = new SimplePopup();

rootPage.ShowPopup(popup);
```

Both approaches follow the standard native behavior for presenting modals/popups.

# Accessibility live region - .NET MAUI

IN MAUI, there is no built-in support to indicate an accessibility live region.

By using [`Handlers`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/handlers), it is possible to implement platform-specific behavior. Alternatively, you can use the accessibility [`Announce` helper method](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#semantic-screen-reader) to announce any message when you update the UI data.

```csharp
SemanticScreenReader.Default.Announce("This is the announcement text.");
```

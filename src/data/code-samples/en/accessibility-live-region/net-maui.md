# Accessibility live region - .NET MAUI

.NET MAUI does not have built-in support to indicate an accessibility live region.

By using [`Handlers`](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/handlers) it is possible to implement platform specific behaviour, or you can use the acessibility [`Announce helper method`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/accessibility#semantic-screen-reader) to announce any message when you updated the UI data.

```csharp

SemanticScreenReader.Default.Announce("This is the announcement text.");

```

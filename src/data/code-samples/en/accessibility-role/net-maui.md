# Accessibility role - .NET MAUI

In MAUI, there is no built-in support for setting an accessibility role.

By intercepting the handler changed event, you can change the role of a custom component.

HandlerChanged event in XAML:

```xml
<StackLayout>
  <BindableLayout.ItemTemplate>
    <DataTemplate>
      <controls:BorderedFrame
        HandlerChanged="Frame_HandlerChanged">
        <Grid...>
        </Grid>
        <Frame.GestureRecognizers>
          <TapGestureRecognizer/>
        </Frame.GestureRecognizers>
      </controls:BorderedFrame>
    </DataTemplate>
  </BindableLayout.ItemTemplate>
</StackLayout>
```

Component on Android:

```csharp
public partial class Component
{
  void Frame_HandlerChanged(System.Object sender, System.EventArgs e)
  {
    if (sender is Frame frame && frame.Handler?.PlatformView is Android.Widget.FrameLayout view)
    {
      ViewCompat.SetAccessibilityDelegate(view, new CustomFrameDelegate(ViewCompat.GetAccessibilityDelegate(view)));
    }
  }
}

public class CustomFrameDelegate : AccessibilityDelegateCompatWrapper
{
    public CustomFrameDelegate(AccessibilityDelegateCompat? originalDelegate) : base(originalDelegate)
    {
    }

    public override void OnInitializeAccessibilityNodeInfo(Android.Views.View host, AccessibilityNodeInfoCompat info)
    {
        base.OnInitializeAccessibilityNodeInfo(host, info);
        if (info != null)
            info.ClassName = "android.widget.Button";
    }
}
```

Component on iOS:

```csharp
public partial class Component
{
  void Frame_HandlerChanged(System.Object sender, System.EventArgs e)
  {
    if (sender is Frame frame && frame.Handler != null)
    {
      var view = (UIView)frame.Handler.PlatformView!;
      view.AccessibilityTraits = UIAccessibilityTrait.Button;
    }
  }
}
```

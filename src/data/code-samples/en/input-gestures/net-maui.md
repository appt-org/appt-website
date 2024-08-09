# Input gestures - .NET MAUI

MAUI offers several types of [`Gesture Recognizers`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/drag-and-drop) in order to detect any user interaction with a UI component, the available gestures are:

- [`Drag and drop`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/drag-and-drop)
- [`Pan`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/pan)
- [`Pinch`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/pinch)
- [`Pointer`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/pointer)
- [`Swipe`](hhttps://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/swipe)
- [`Tap`](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/gestures/tap)

```csharp

var label = new Label();

var dragGestureRecognizer = new DragGestureRecognizer();
dragGestureRecognizer.CanDrag = true;
dragGestureRecognizer.DropCompleted += DragGestureRecognizer_DropCompleted;
dragGestureRecognizer.DragStarting += DragGestureRecognizer_DragStarting;

label.GestureRecognizers.Add(dragGestureRecognizer);


var dropGestureRecognizer = new DropGestureRecognizer();
dropGestureRecognizer.AllowDrop = true;
dropGestureRecognizer.DragLeave += DropGestureRecognizer_DragLeave;
dropGestureRecognizer.DragOver += DropGestureRecognizer_DragOver;

label.GestureRecognizers.Add(dropGestureRecognizer);


var panGestureRecognizer = new PanGestureRecognizer();
panGestureRecognizer.PanUpdated += PanGestureRecognizer_PanUpdated;

label.GestureRecognizers.Add(panGestureRecognizer);


var pinchGestureRecognizer = new PinchGestureRecognizer();
pinchGestureRecognizer.PinchUpdated += PinchGestureRecognizer_PinchUpdated;

label.GestureRecognizers.Add(pinchGestureRecognizer);


var pointerGestureRecognizer = new PointerGestureRecognizer();
pointerGestureRecognizer.PointerEntered += PointerGestureRecognizer_PointerEntered;
pointerGestureRecognizer.PointerExited += PointerGestureRecognizer_PointerExited;
pointerGestureRecognizer.PointerMoved += PointerGestureRecognizer_PointerMoved;
pointerGestureRecognizer.PointerPressed += PointerGestureRecognizer_PointerPressed;

label.GestureRecognizers.Add(pointerGestureRecognizer);


var swipeGestureRecognizer = new SwipeGestureRecognizer();
swipeGestureRecognizer.Direction = SwipeDirection.Left;
swipeGestureRecognizer.Swiped += SwipeGestureRecognizer_Swiped;

label.GestureRecognizers.Add(swipeGestureRecognizer);


var tapGestureRecognizer = new TapGestureRecognizer();
tapGestureRecognizer.NumberOfTapsRequired = 2;
tapGestureRecognizer.Tapped += TapGestureRecognizer_Tapped;

label.GestureRecognizers.Add(tapGestureRecognizer);

```

```csharp

<Label
    Text="Hello">
    <Label.GestureRecognizers>
        <DragGestureRecognizer CanDrag="True" DropCompleted="DragGestureRecognizer_DropCompleted" DragStarting="DragGestureRecognizer_DragStarting"  />
        <DropGestureRecognizer AllowDrop="True" DragLeave="DropGestureRecognizer_DragLeave" DragOver="DropGestureRecognizer_DragOver"  />
        <PanGestureRecognizer PanUpdated="PanGestureRecognizer_PanUpdated"  />
        <PinchGestureRecognizer PinchUpdated="PinchGestureRecognizer_PinchUpdated"  />
        <PointerGestureRecognizer PointerEntered="PointerGestureRecognizer_PointerEntered" PointerExited="PointerGestureRecognizer_PointerExited" PointerMoved="PointerGestureRecognizer_PointerMoved" PointerPressed="PointerGestureRecognizer_PointerPressed"  />
        <SwipeGestureRecognizer Direction="Left" Swiped="SwipeGestureRecognizer_Swiped"  />
        <TapGestureRecognizer NumberOfTapsRequired="2" Tapped="TapGestureRecognizer_Tapped"  />
    </Label.GestureRecognizers>
</Label>

```

# Accessibility dialog - Android

In Jetpack Compose, you can create dialogs using [`AlertDialog`](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#AlertDialog(kotlin.Function0,kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.ui.window.DialogProperties)). You should always add a close button by specifying the `dismissButton` property. The focus of assistive technologies is automatically trapped inside the dialog while it's visible.

```kotlin
var showDialog by remember { mutableStateOf(false) }  
Box {  
    Button(onClick = { showDialog = true }) {  
        Text("Show Appt Dialog")  
    }  
  
    if (showDialog) {  
        AlertDialog(  
            onDismissRequest = { showDialog = false },  
            confirmButton = {  
                TextButton(onClick = { showDialog = false }) {  
                    Text("Proceed")  
                }  
            },  
            dismissButton = {  
                TextButton(onClick = { showDialog = false }) {  
                    Text("Cancel")  
                }  
            },  
            title = {  
                Text(text = "Confirm Appt membership?")  
            },  
        )  
    }  
}

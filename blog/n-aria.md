# iOS Terminology

:::note
This is a clone of [MobA11y n-aria](https://raw.githubusercontent.com/MobA11y/n-aria/main/ios.md)
:::

A set of terms that mean something very specific in the iOS Ecosyste and that can be used to communicate specific meaning across disciplines if definitions were agreed upon.

*Contributor Guideline:* Alphabetical order

## Accessibility Hint
The hint is announced by VoiceOver after a long pause at the end of the announcement of a [UIAccessibilityElement](#uiaccessibilityelement). Since VoiceOver users can turn off hints it should not be relied upont to create relationships or add be the only way a piece of information is presented.

## Accessibility Label
An Accessibility Label can represent one of the following three things:

- Offscreen text representing the intent of an image.
- The subject of a simple control.
- A structured combination of the above.

and should never:

- Present information that belongs in the Value or Traits.
- Include erroneous characters, such as comma separators.

## Accessibilty Trait
Traits convey different things depending on their type. They can convey information about the nature of a control, such as [link](#button) or [button](#button), or they can communicate how to interact with a control, such as the [adjustable](#adjustable) trait.

### Button

A button is announced as "button" when the trait is applied. This is the only know behavior this trait provides. It is a common misconception that the trait of button is required to make an interactive control. This is not true. All buttons are interactive things, but not all interactive things are buttons. When then should we apply it? 

The trait of button should be set when:

- The button is or looks very much like a default UIButton. 
- Specific affordance is given to make the control look active.
- The action is one that has attention drawn to it in some way.

and definitely not when:

- On a more complex interactive component. *EX*: The *card* pattern.
- When a ListView cell does not have addtional affordance.

## Default Action
The default action is the action that will be performed when it is tapped. Certain technologies implement this different ways. For some it results in a virtual on screen tap. For others, they will call the accessibilityActivate method. How this is determined is unclear, though it is most certainly tied to:

- Assistive Technology (Particuarly VoiceOver vs SwitchControl/VoiceControl)
- Whether or not an accessibilityActivate method is supplied.
- What time of gesture you use, particularly TouchUpInside.

## Pause
The term paused used throughout refers to a specific kind of pause that comes when listening to a VoiceOver announcement. 

- **Natural Pause**: Thre are pauses that come from the text to speach engine respecting punctuation.
- **Long Pause**: A pause that comes from iOS in some way. Generally before the Accessibility Hint.
- **Short Pause**: Also comes from iOS and is used to seperate Label, Value, and State information logically for the listener.

## Simple Control
A control that has a basic label and responds to a singular tap action. This is referred to as the default action.

## UIAccessibilityElement
Is a Protocol in iOS that allows [UIViews](#UIViews) to communicate with Assistive Technologies. It is the iOS Accessibility API, or at least a part of it!

## UIView
The base class that allows iOS to render views for users.



# Input content type - Jetpack Compose

In Jetpack Compose, [`Autofill`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/Autofill) can be used to automatically fill `TextField` with predefined data, such as email, credit card information, etc.

You can set [`AutoFillType`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType) to specify which type of data should be prompted to user. The following values are defined:

- [`AddressAuxiliaryDetails`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#AddressAuxiliaryDetails): auxiliary address details
- [`AddressCountry`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#AddressCountry): country name/ code
- [`AddressLocality`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#AddressLocality): address locality (city/town)
- [`AddressRegion`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#AddressRegion): region/ state
- [`AddressStreet`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#AddressStreet): street address
- [`BirthDateDay`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#BirthDateDay): birth day(of the month)
- [`BirthDateFull`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#BirthDateFull): full birth date
- [`BirthDateMonth`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#BirthDateMonth): birth month
- [`BirthDateYear`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#BirthDateYear): birth year
- [`CreditCardExpirationDate`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardExpirationDate): credit card expiration date
- [`CreditCardExpirationDay`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardExpirationDay): credit card expiration day
- [`CreditCardExpirationMonth`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardExpirationMonth): credit card expiration month
- [`CreditCardExpirationYear`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardExpirationYear): credit card expiration year
- [`CreditCardNumber`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardNumber): credit card number
- [`CreditCardSecurityCode`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#CreditCardSecurityCode): credit card security code
- [`EmailAddress`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#EmailAddress): email address
- [`Gender`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#Gender): gender
- [`NewPassword`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#NewPassword):newly created password for save/update
- [`NewUsername`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#NewUsername): newly created username for save/update
- [`Password`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#Password): password
- [`PersonFirstName`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonFirstName): person's first/ given name
- [`PersonFullName`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonFullName): person's full name
- [`PersonLastName`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonLastName): person's last/ family name
- [`PersonMiddleInitial`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonMiddleInitial): person's middle initial
- [`PersonMiddleName`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonMiddleName): person's middle name
- [`PersonNamePrefix`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonNamePrefix): person's name prefix
- [`PersonNameSuffix`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PersonNameSuffix): person's name suffix
- [`PhoneCountryCode`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PhoneCountryCode): phone number's country code
- [`PhoneNumber`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PhoneNumber): phone number with country code
- [`PhoneNumberDevice`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PhoneNumberDevice): device's phone number usually for Sign Up / OTP flows
- [`PhoneNumberNational`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PhoneNumberNational): phone number without country code
- [`PostalAddress`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PostalAddress): postal address
- [`PostalCode`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PostalCode): postal code
- [`PostalCodeExtended`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#PostalCodeExtended): extended ZIP/ POSTAL code
- [`SmsOtpCode`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#SmsOtpCode): SMS One Time Password (OTP)
- [`Username`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/AutofillType#Username): username

```kotlin
// Create custom composable with AutoFill to later wrap it with TextField
@ExperimentalComposeUiApi
@Composable
private fun Autofill(
    autofillTypes: List<AutofillType>,
    onFill: ((String) -> Unit),
    content: @Composable BoxScope.() -> Unit
) {
    val autofill = LocalAutofill.current
    val autofillTree = LocalAutofillTree.current
    val autofillNode =
        remember(autofillTypes, onFill) {
            AutofillNode(onFill = onFill, autofillTypes = autofillTypes)
        }

    Box(
        modifier =
        Modifier.onFocusChanged {
            if (it.isFocused) {
                autofill?.requestAutofillForNode(autofillNode)
            } else {
                autofill?.cancelAutofillForNode(autofillNode)
            }
        }
            .onGloballyPositioned { autofillNode.boundingBox = it.boundsInWindow() },
        content = content
    )

    DisposableEffect(autofillNode) {
        autofillTree.children[autofillNode.id] = autofillNode
        onDispose { autofillTree.children.remove(autofillNode.id) }
    }
}
// AutoFill composable usage
var name by
rememberSaveable(stateSaver = TextFieldValue.Saver) { mutableStateOf(TextFieldValue("")) }
Autofill(
    // We can pass here multiple AutofillTypes
    autofillTypes = listOf(AutofillType.PersonFullName, AutofillType.PersonLastName),
    onFill = { name = TextFieldValue(it) }
) {
    OutlinedTextField(
        value = name,
        onValueChange = { name = it },
        label = { Text("Name") },
    )
}
```

Important: in Jetpack Compose 1.7 [`Autofill`](https://developer.android.com/reference/kotlin/androidx/compose/ui/autofill/Autofill) is disabled, due to massive performance impact. As Google developers states, it should be available in Compose 1.8. You can track current feature status by following [`google issue tracker ticket`](https://issuetracker.google.com/issues/176949051#comment31).

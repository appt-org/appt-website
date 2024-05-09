# Input content type - Flutter

In Flutter, you can set a content type by using the [`autoFillHints`](https://api.flutter.dev/flutter/services/AutofillHints-class.html) property.

It's important to note that constants are platform dependent and don't work the same everywhere, or even at all.

The following constants are defined:

- [`addressCity`](https://api.flutter.dev/flutter/services/AutofillHints/addressCity-constant.html): The input field expects an address locality (city/town).
- [`addressCityAndState`](https://api.flutter.dev/flutter/services/AutofillHints/addressCityAndState-constant.html): The input field expects a city name combined with a state name.
- [`addressState`](https://api.flutter.dev/flutter/services/AutofillHints/addressState-constant.html): The input field expects a region/state.
- [`birthday`](https://api.flutter.dev/flutter/services/AutofillHints/birthday-constant.html): The input field expects a person's full birth date.
- [`birthdayDay`](https://api.flutter.dev/flutter/services/AutofillHints/birthdayDay-constant.html): The input field expects a person's birth day(of the month).
- [`birthdayMonth`](https://api.flutter.dev/flutter/services/AutofillHints/birthdayMonth-constant.html): The input field expects a person's birth month.
- [`birthdayYear`](https://api.flutter.dev/flutter/services/AutofillHints/birthdayYear-constant.html): The input field expects a person's birth year.
- [`countryCode`](https://api.flutter.dev/flutter/services/AutofillHints/countryCode-constant.html): The input field expects an [ISO 3166-1-alpha-2](https://www.iso.org/standard/63545.html) country code.
- [`countryName`](https://api.flutter.dev/flutter/services/AutofillHints/countryName-constant.html): The input field expects a country name.
- [`creditCardExpirationDate`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardExpirationDate-constant.html): The input field expects a credit card expiration date.
- [`creditCardExpirationDay`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardExpirationDay-constant.html): The input field expects a credit card expiration day.
- [`creditCardExpirationMonth`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardExpirationMonth-constant.html): The input field expects a credit card expiration month.
- [`creditCardExpirationYear`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardExpirationYear-constant.html): The input field expects a credit card expiration year.
- [`creditCardFamilyName`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardFamilyName-constant.html): The input field expects the holder's last/family name as given on a credit card.
- [`creditCardGivenName`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardGivenName-constant.html): The input field expects the holder's first/given name as given on a credit card.
- [`creditCardMiddleName`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardMiddleName-constant.html): The input field expects the holder's middle name as given on a credit card.
- [`creditCardName`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardName-constant.html): The input field expects the holder's full name as given on a credit card.
- [`creditCardNumber`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardNumber-constant.html): The input field expects a credit card number.
- [`creditCardSecurityCode`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardSecurityCode-constant.html): The input field expects a credit card security code.
- [`creditCardType`](https://api.flutter.dev/flutter/services/AutofillHints/creditCardType-constant.html): The input field expects the type of a credit card, for example "Visa".
- [`email`](https://api.flutter.dev/flutter/services/AutofillHints/email-constant.html): The input field expects an email address.
- [`familyName`](https://api.flutter.dev/flutter/services/AutofillHints/familyName-constant.html): The input field expects a person's last/family name.
- [`fullStreetAddress`](https://api.flutter.dev/flutter/services/AutofillHints/fullStreetAddress-constant.html): The input field expects a street address that fully identifies a location.
- [`gender`](https://api.flutter.dev/flutter/services/AutofillHints/gender-constant.html): The input field expects a gender.
- [`givenName`](https://api.flutter.dev/flutter/services/AutofillHints/givenName-constant.html): The input field expects a person's first/given name.
- [`impp`](https://api.flutter.dev/flutter/services/AutofillHints/impp-constant.html): The input field expects a URL representing an instant messaging protocol endpoint.
- [`jobTitle`](https://api.flutter.dev/flutter/services/AutofillHints/jobTitle-constant.html): The input field expects a job title.
- [`language`](https://api.flutter.dev/flutter/services/AutofillHints/language-constant.html): The input field expects the preferred language of the user.
- [`location`](https://api.flutter.dev/flutter/services/AutofillHints/location-constant.html): The input field expects a location, such as a point of interest, an address,or another way to identify a location.
- [`middleInitial`](https://api.flutter.dev/flutter/services/AutofillHints/middleInitial-constant.html): The input field expects a person's middle initial.
- [`middleName`](https://api.flutter.dev/flutter/services/AutofillHints/middleName-constant.html): The input field expects a person's middle name.
- [`name`](https://api.flutter.dev/flutter/services/AutofillHints/name-constant.html): The input field expects a person's full name.
- [`namePrefix`](https://api.flutter.dev/flutter/services/AutofillHints/namePrefix-constant.html): The input field expects a person's name prefix or title, such as "Dr.".
- [`nameSuffix`](https://api.flutter.dev/flutter/services/AutofillHints/nameSuffix-constant.html): The input field expects a person's name suffix, such as "Jr.".
- [`newPassword`](https://api.flutter.dev/flutter/services/AutofillHints/newPassword-constant.html): The input field expects a newly created password for save/update.
- [`newUsername`](https://api.flutter.dev/flutter/services/AutofillHints/newUsername-constant.html): The input field expects a newly created username for save/update.
- [`nickname`](https://api.flutter.dev/flutter/services/AutofillHints/nickname-constant.html): The input field expects a nickname.
- [`oneTimeCode`](https://api.flutter.dev/flutter/services/AutofillHints/oneTimeCode-constant.html): The input field expects a SMS one-time code.
- [`organizationName`](https://api.flutter.dev/flutter/services/AutofillHints/organizationName-constant.html): The input field expects an organization name corresponding to the person, address, or contact information in the other fields associated with this field.
- [`password`](https://api.flutter.dev/flutter/services/AutofillHints/password-constant.html): The input field expects a password.
- [`photo`](https://api.flutter.dev/flutter/services/AutofillHints/photo-constant.html): The input field expects a photograph, icon, or other image corresponding to the company, person, address, or contact information in the other fields associated with this field.
- [`postalAddress`](https://api.flutter.dev/flutter/services/AutofillHints/postalAddress-constant.html): The input field expects a postal address.
- [`postalAddressExtended`](https://api.flutter.dev/flutter/services/AutofillHints/postalAddressExtended-constant.html): The input field expects an auxiliary address details.
- [`postalAddressExtendedPostalCode`](https://api.flutter.dev/flutter/services/AutofillHints/postalAddressExtendedPostalCode-constant.html): The input field expects an extended ZIP/POSTAL code.
- [`postalCode`](https://api.flutter.dev/flutter/services/AutofillHints/postalCode-constant.html): The input field expects a postal code.
- [`streetAddressLevel1`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLevel1-constant.html): The first administrative level in the address. This is typically the province in which the address is located. In the United States, this would be the state. In Switzerland, the canton. In the United Kingdom, the post town.
- [`streetAddressLevel2`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLevel2-constant.html): The second administrative level, in addresses with at least two of them. In countries with two administrative levels, this would typically be the city, town, village, or other locality in which the address is located.
- [`streetAddressLevel3`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLevel3-constant.html): The third administrative level, in addresses with at least three administrative levels.
- [`streetAddressLevel4`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLevel4-constant.html): The finest-grained administrative level, in addresses which have four levels.
- [`streetAddressLine1`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLine1-constant.html): The input field expects the first line of a street address.
- [`streetAddressLine2`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLine2-constant.html): The input field expects the second line of a street address.
- [`streetAddressLine3`](https://api.flutter.dev/flutter/services/AutofillHints/streetAddressLine3-constant.html): The input field expects the third line of a street address.
- [`sublocality`](https://api.flutter.dev/flutter/services/AutofillHints/sublocality-constant.html): The input field expects a sublocality.
- [`telephoneNumber`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumber-constant.html): The input field expects a telephone number.
- [`telephoneNumberAreaCode`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberAreaCode-constant.html): The input field expects a phone number's area code, with a country -internal prefix applied if applicable.
- [`telephoneNumberCountryCode`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberCountryCode-constant.html): The input field expects a phone number's country code.
- [`telephoneNumberDevice`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberDevice-constant.html): The input field expects the current device's phone number, usually for Sign Up / OTP flows.
- [`telephoneNumberExtension`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberExtension-constant.html): The input field expects a phone number's internal extension code.
- [`telephoneNumberLocal`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberLocal-constant.html): The input field expects a phone number without the country code and area code components.
- [`telephoneNumberLocalPrefix`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberLocalPrefix-constant.html): The input field expects the first part of the component of the telephone number that follows the area code, when that component is split into two components.
- [`telephoneNumberLocalSuffix`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberLocalSuffix-constant.html): The input field expects the second part of the component of the telephone number that follows the area code, when that component is split into two components.
- [`telephoneNumberNational`](https://api.flutter.dev/flutter/services/AutofillHints/telephoneNumberNational-constant.html): The input field expects a phone number without country code.
- [`transactionAmount`](https://api.flutter.dev/flutter/services/AutofillHints/transactionAmount-constant.html): The amount that the user would like for the transaction (e.g. when entering a bid or sale price).
- [`transactionCurrency`](https://api.flutter.dev/flutter/services/AutofillHints/transactionCurrency-constant.html): The currency that the user would prefer the transaction to use, in [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).
- [`url`](https://api.flutter.dev/flutter/services/AutofillHints/url-constant.html): The input field expects a URL.
- [`username`](https://api.flutter.dev/flutter/services/AutofillHints/username-constant.html): The input field expects a username or an account name.

```dart
TextFormField(
    autofillHints: [AutofillHints.email]
)
```

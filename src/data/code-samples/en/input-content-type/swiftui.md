# Input content type - SwiftUI

In SwiftUI, you can set a content type by using the [`textContentType`](https://developer.apple.com/documentation/swiftui/view/textcontenttype(_:)-ufdv) view modifier.

The following values are defined in [`UITextContentType`](https://developer.apple.com/documentation/uikit/uitextcontenttype):

- [`addressCity`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649648-addresscity): entering a city
- [`addressCityAndState`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649657-addresscityandstate): entering a city name with a state name
- [`addressState`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649654-addressstate): entering a state name
- [`birthdate`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210380-birthdate): entering a date of birth
- [`birthdateDay`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210381-birthdateday): entering the day component of a birthdate
- [`birthdateMonth`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210382-birthdatemonth): entering the month component of a birthdate
- [`birthdateYear`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210383-birthdateyear): entering the year component of a birthdate
- [`cellularEID`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4316675-cellulareid): entering an embedded identity document number for an eSIM
- [`cellularIMEI`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4316676-cellularimei): entering an international mobile equipment identity number for an eSIM
- [`countryName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649650-countryname): entering a country or region name
- [`creditCardExpiration`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210384-creditcardexpiration): entering an expiration date on a credit card
- [`creditCardExpirationMonth`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210385-creditcardexpirationmonth): entering the month component of an expiration date on a credit card
- [`creditCardExpirationYear`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210386-creditcardexpirationyear): entering the year component of an expiration date on a credit card
- [`creditCardFamilyName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210387-creditcardfamilyname): entering a family name, or last name, on a credit card
- [`creditCardGivenName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210388-creditcardgivenname): entering a first name on a credit card
- [`creditCardMiddleName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210389-creditcardmiddlename): entering a middle name on a credit card
- [`creditCardName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210390-creditcardname): entering a name on a credit card
- [`creditCardNumber`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1778267-creditcardnumber): entering a credit card number
- [`creditCardSecurityCode`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210391-creditcardsecuritycode): entering a credit card security code
- [`creditCardType`](https://developer.apple.com/documentation/uikit/uitextcontenttype/4210392-creditcardtype): entering a credit card type
- [`dateTime`](https://developer.apple.com/documentation/uikit/uitextcontenttype/3750919-datetime): entering a date, time, or duration
- [`emailAddress`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649660-emailaddress): entering an email address
- [`familyName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649662-familyname): entering a family name, or last name
- [`flightNumber`](https://developer.apple.com/documentation/uikit/uitextcontenttype/3750920-flightnumber): entering an airline flight number
- [`fullStreetAddress`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649661-fullstreetaddress): entering a street address that fully identifies a location
- [`givenName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649659-givenname): entering a first name
- [`jobTitle`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649667-jobtitle): entering a job title
- [`location`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649646-location): entering a location, such as a point of interest, an address, or another identifier for a location
- [`middleName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649653-middlename): entering a middle name
- [`name`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649669-name): entering a name
- [`namePrefix`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649647-nameprefix): entering a prefix or title, such as Dr.
- [`nameSuffix`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649665-namesuffix): entering a suffix, such as Jr.
- [`newPassword`](https://developer.apple.com/documentation/uikit/uitextcontenttype/2980929-newpassword): entering a new password
- [`nickname`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649652-nickname): entering a nickname
- [`oneTimeCode`](https://developer.apple.com/documentation/uikit/uitextcontenttype/2980930-onetimecode): entering a one-time code
- [`organizationName`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649666-organizationname): entering an organization name
- [`password`](https://developer.apple.com/documentation/uikit/uitextcontenttype/2865813-password): entering a password
- [`postalCode`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649649-postalcode): entering a postal code
- [`shipmentTrackingNumber`](https://developer.apple.com/documentation/uikit/uitextcontenttype/3750921-shipmenttrackingnumber): entering a parcel tracking number
- [`streetAddressLine1`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649663-streetaddressline1): entering the first line of a street address
- [`streetAddressLine2`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649658-streetaddressline2): entering the second line of a street address
- [`sublocality`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649655-sublocality): entering a sublocality
- [`telephoneNumber`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649664-telephonenumber): entering a telephone number
- [`URL`](https://developer.apple.com/documentation/uikit/uitextcontenttype/1649651-url): entering a URL
- [`username`](https://developer.apple.com/documentation/uikit/uitextcontenttype/2866088-username): entering an account or login name

Example of using `textContentType`:

```swift
@State var emailAddress: String = ""

var body: some View {
    TextField("Email", text: $emailAddress)
        .textContentType(.emailAddress)
}
```

const labels = {
  '1': {
    en: '1. Perceivable',
    nl: '1. Waarneembaar',
  },
  '1.1': {
    en: '1.1 Text Alternatives',
    nl: '1.1 Tekstalternatieven',
  },
  '1.2': {
    en: '1.2 Time-based Media',
    nl: '1.2 Op tijd gebaseerde media',
  },
  '1.3': {
    en: '1.3 Adaptable',
    nl: '1.3 Aanpasbaar',
  },
  '1.4': {
    en: '1.4 Distinguishable',
    nl: '1.4 Onderscheidbaar',
  },
  '2': {
    en: '2. Operable',
    nl: '2. Bedienbaar',
  },
  '2.1': {
    en: '2.1 Keyboard Accessible',
    nl: '2.1 Toetsenbordtoegankelijk',
  },
  '2.2': {
    en: '2.2 Enough Time',
    nl: '2.2 Genoeg tijd',
  },
  '2.3': {
    en: '2.3 Seizures and Physical Reactions',
    nl: '2.3 Toevallen en fysieke reacties',
  },
  '2.4': {
    en: '2.4 Navigable',
    nl: '2.4 Navigeerbaar',
  },
  '2.5': {
    en: '2.5 Input Modalities',
    nl: '2.5 Input Modaliteiten',
  },
  '3': {
    en: '3. Understandable',
    nl: '3. Begrijpelijk',
  },
  '3.1': {
    en: '3.1 Readable',
    nl: '3.1 Leesbaar',
  },
  '3.2': {
    en: '3.2 Predictable',
    nl: '3.2 Voorspelbaar',
  },
  '3.3': {
    en: '3.3 Input Assistance',
    nl: '3.3 Assistentie bij invoer',
  },
  '4': {
    en: '4. Robust',
    nl: '4. Robuust',
  },
  '4.1': {
    en: '4.1 Compatible',
    nl: '4.1 Compatibel',
  },
  '1.1.1': {
    en: '1.1.1 Non-text Content',
    nl: '1.1.1 Niet-tekstuele content',
  },
  '1.2.1': {
    en: '1.2.1 Audio-only and Video-only (Prerecorded)',
    nl: '1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)',
  },
  '1.2.2': {
    en: '1.2.2 Captions (Prerecorded)',
    nl: '1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)',
  },
  '1.2.3': {
    en: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)',
  },
  '1.2.4': {
    en: '1.2.4 Captions (Live)',
    nl: '1.2.4 Ondertitels voor doven en slechthorenden (live)',
  },
  '1.2.5': {
    en: '1.2.5 Audio Description (Prerecorded)',
    nl: '1.2.5 Audiodescriptie (vooraf opgenomen)',
  },
  '1.2.6': {
    en: '1.2.6 Sign Language (Prerecorded)',
    nl: '1.2.6 Gebarentaal (vooraf opgenomen)',
  },
  '1.2.7': {
    en: '1.2.7 Extended Audio Description (Prerecorded)',
    nl: '1.2.7 Verlengde audiodescriptie (vooraf opgenomen)',
  },
  '1.2.8': {
    en: '1.2.8 Media Alternative (Prerecorded)',
    nl: '1.2.8 Media-alternatief (vooraf opgenomen)',
  },
  '1.2.9': {
    en: '1.2.9 Audio-only (Live)',
    nl: '1.2.9 Louter-geluid (live)',
  },
  '1.3.1': {
    en: '1.3.1 Info and Relationships',
    nl: '1.3.1 Info en relaties',
  },
  '1.3.2': {
    en: '1.3.2 Meaningful Sequence',
    nl: '1.3.2 Betekenisvolle volgorde',
  },
  '1.3.3': {
    en: '1.3.3 Sensory Characteristics',
    nl: '1.3.3 Zintuiglijke eigenschappen',
  },
  '1.3.4': {
    en: '1.3.4 Orientation',
    nl: '1.3.4 Weergavestand',
  },
  '1.3.5': {
    en: '1.3.5 Identify Input Purpose',
    nl: '1.3.5 Identificeer het doel van de invoer',
  },
  '1.3.6': {
    en: '1.3.6 Identify Purpose',
    nl: '1.3.6 Identificeer het doel',
  },
  '1.4.1': {
    en: '1.4.1 Use of Color',
    nl: '1.4.1 Gebruik van kleur',
  },
  '1.4.2': {
    en: '1.4.2 Audio Control',
    nl: '1.4.2 Geluidsbediening',
  },
  '1.4.3': {
    en: '1.4.3 Contrast (Minimum)',
    nl: '1.4.3 Contrast (minimum)',
  },
  '1.4.4': {
    en: '1.4.4 Resize Text',
    nl: '1.4.4 Herschalen van tekst',
  },
  '1.4.5': {
    en: '1.4.5 Images of Text',
    nl: '1.4.5 Afbeeldingen van tekst',
  },
  '1.4.6': {
    en: '1.4.6 Contrast (Enhanced)',
    nl: '1.4.6 Contrast (versterkt)',
  },
  '1.4.7': {
    en: '1.4.7 Low or No Background Audio',
    nl: '1.4.7 Weining of geen achtergrondgeluid',
  },
  '1.4.8': {
    en: '1.4.8 Visual Presentation',
    nl: '1.4.8 Visuele weergave',
  },
  '1.4.9': {
    en: '1.4.9 Images of Text (No Exception)',
    nl: '1.4.9 Afbeeldingen van tekst (geen uitzondering)',
  },
  '1.4.10': {
    en: '1.4.10 Reflow',
    nl: '1.4.10 Reflow',
  },
  '1.4.11': {
    en: '1.4.11 Non-text Contrast',
    nl: '1.4.11 Contrast van niet-tekstuele content',
  },
  '1.4.12': {
    en: '1.4.12 Text Spacing',
    nl: '1.4.12 Tekstafstand',
  },
  '1.4.13': {
    en: '1.4.13 Content on Hover or Focus',
    nl: '1.4.13 Content bij hover of focus',
  },
  '2.1.1': {
    en: '2.1.1 Keyboard',
    nl: '2.1.1 Toetsenbord',
  },
  '2.1.2': {
    en: '2.1.2 No Keyboard Trap',
    nl: '2.1.2 Geen toetsenbordval',
  },
  '2.1.3': {
    en: '2.1.3 Keyboard (No Exception)',
    nl: '2.1.3 Toetsenbord (geen uitzondering)',
  },
  '2.1.4': {
    en: '2.1.4 Character Key Shortcuts',
    nl: '2.1.4 Enkel teken sneltoetsen',
  },
  '2.2.1': {
    en: '2.2.1 Timing Adjustable',
    nl: '2.2.1 Timing aanpasbaar',
  },
  '2.2.2': {
    en: '2.2.2 Pause, Stop, Hide',
    nl: '2.2.2 Pauzeren, stoppen, verbergen',
  },
  '2.2.3': {
    en: '2.2.3 No Timing',
    nl: '2.2.3 Geen timing',
  },
  '2.2.4': {
    en: '2.2.4 Interruptions',
    nl: '2.2.4 Onderbrekingen',
  },
  '2.2.5': {
    en: '2.2.5 Re-authenticating',
    nl: '2.2.5 Herauthentisering',
  },
  '2.2.6': {
    en: '2.2.6 Timeouts',
    nl: '2.2.6 Time-outs',
  },
  '2.3.1': {
    en: '2.3.1 Three Flashes or Below Threshold',
    nl: '2.3.1 Drie flitsen of beneden drempelwaarde',
  },
  '2.3.2': {
    en: '2.3.2 Three Flashes',
    nl: '2.3.2 Drie flitsen',
  },
  '2.3.3': {
    en: '2.3.3 Animation from Interactions',
    nl: '2.3.3 Animatie uit interacties',
  },
  '2.4.1': {
    en: '2.4.1 Bypass Blocks',
    nl: '2.4.1 Blokken omzeilen',
  },
  '2.4.2': {
    en: '2.4.2 Page Titled',
    nl: '2.4.2 Paginatitel',
  },
  '2.4.3': {
    en: '2.4.3 Focus Order',
    nl: '2.4.3 Focus volgorde',
  },
  '2.4.4': {
    en: '2.4.4 Link Purpose (In Context)',
    nl: '2.4.4 Linkdoel (in context)',
  },
  '2.4.5': {
    en: '2.4.5 Multiple Ways',
    nl: '2.4.5 Meerdere manieren',
  },
  '2.4.6': {
    en: '2.4.6 Headings and Labels',
    nl: '2.4.6 Koppen en labels',
  },
  '2.4.7': {
    en: '2.4.7 Focus Visible',
    nl: '2.4.7 Focus zichtbaar',
  },
  '2.4.8': {
    en: '2.4.8 Location',
    nl: '2.4.8 Locatie',
  },
  '2.4.9': {
    en: '2.4.9 Link Purpose (Link Only)',
    nl: '2.4.9 Linkdoel (alleen link)',
  },
  '2.4.10': {
    en: '2.4.10 Section Headings',
    nl: '2.4.10 Paragraafkoppen',
  },
  '2.4.11': {
    en: '2.4.11 Focus Not Obscured (Minimum)',
    nl: '2.4.11 Focus niet verborgen (minimum)',
  },
  '2.4.12': {
    en: '2.4.12 Focus Not Obscured (Enhanced)',
    nl: '2.4.12 Focus niet verborgen (versterkt)',
  },
  '2.4.13': {
    en: '2.4.13 Focus Appearance',
    nl: '2.4.13 Focus weergave',
  },
  '2.5.1': {
    en: '2.5.1 Pointer Gestures',
    nl: '2.5.1 Aanwijzergebaren',
  },
  '2.5.2': {
    en: '2.5.2 Pointer Cancellation',
    nl: '2.5.2 Aanwijzerannulering',
  },
  '2.5.3': {
    en: '2.5.3 Label in Name',
    nl: '2.5.3 Label in naam',
  },
  '2.5.4': {
    en: '2.5.4 Motion Actuation',
    nl: '2.5.4 Bewegingsactivering',
  },
  '2.5.5': {
    en: '2.5.5 Target Size',
    nl: '2.5.5 Grootte van het aanwijsgebied',
  },
  '2.5.6': {
    en: '2.5.6 Concurrent Input Mechanisms',
    nl: '2.5.6 Inpurt gelijktijdige invoermechanismen',
  },
  '2.5.7': {
    en: '2.5.7 Dragging Movements',
    nl: '2.5.7 Slepende bewegingen',
  },
  '2.5.8': {
    en: '2.5.8 Target Size (Minimum)',
    nl: '2.5.8 Grootte van het aanwijsgebied (minimum)',
  },
  '3.1.1': {
    en: '3.1.1 Language of Page',
    nl: '3.1.1 Taal van de pagina',
  },
  '3.1.2': {
    en: '3.1.2 Language of Parts',
    nl: '3.1.2 Taal van onderdelen',
  },
  '3.1.3': {
    en: '3.1.3 Unusual Words',
    nl: '3.1.3 Ongebruikelijke woorden',
  },
  '3.1.4': {
    en: '3.1.4 Abbreviations',
    nl: '3.1.4 Afkortingen',
  },
  '3.1.5': {
    en: '3.1.5 Reading Level',
    nl: '3.1.5 Leesniveau',
  },
  '3.1.6': {
    en: '3.1.6 Pronunciation',
    nl: '3.1.6 Uitspraak',
  },
  '3.2.1': {
    en: '3.2.1 On Focus',
    nl: '3.2.1 Bij focus',
  },
  '3.2.2': {
    en: '3.2.2 On Input',
    nl: '3.2.2 Bij inpurt',
  },
  '3.2.3': {
    en: '3.2.3 Consistent Navigation',
    nl: '3.2.3 Consistente navigatie',
  },
  '3.2.4': {
    en: '3.2.4 Consistent Identification',
    nl: '3.2.4 Consistente identificatie',
  },
  '3.2.5': {
    en: '3.2.5 Change on Request',
    nl: '3.2.5 Verandering op verzoek',
  },
  '3.2.6': {
    en: '3.2.6 Consistent Help',
    nl: '3.2.6 Consistente hulp',
  },
  '3.3.1': {
    en: '3.3.1 Error Identification',
    nl: '3.3.1 Foutidentificatie',
  },
  '3.3.2': {
    en: '3.3.2 Labels or Instructions',
    nl: '3.3.2 Labels of instructies',
  },
  '3.3.3': {
    en: '3.3.3 Error Suggestion',
    nl: '3.3.3 Foutsuggestie',
  },
  '3.3.4': {
    en: '3.3.4 Error Prevention (Legal, Financial, Data)',
    nl: '3.3.4 Foutpreventie (wettelijk, financieel, gegevens)',
  },
  '3.3.5': {
    en: '3.3.5 Help',
    nl: '3.3.5 Hulp',
  },
  '3.3.6': {
    en: '3.3.6 Error Prevention (All)',
    nl: '3.3.6 Foutpreventie (alle)',
  },
  '3.3.7': {
    en: '3.3.7 Redundant Entry',
    nl: '3.3.7 Overtollige invoer',
  },
  '3.3.8': {
    en: '3.3.8 Accessible Authentication (Minimum)',
    nl: '3.3.8 Toegankeijke authenticatie (minimum)',
  },
  '3.3.9': {
    en: '3.3.9 Accessible Authentication (Enhanced)',
    nl: '3.3.9 Toegankelijke authenticatie (versterkt)',
  },
  '4.1.1': {
    en: '4.1.1 Parsing',
    nl: '4.1.1 Parsen',
  },
  '4.1.2': {
    en: '4.1.2 Name, Role, Value',
    nl: '4.1.2 Naam, rol, waarde',
  },
  '4.1.3': {
    en: '4.1.3 Status Messages',
    nl: '4.1.3 Statusberichten',
  },
};

export const getLabel = (key: string) => {
  return process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl' ? labels[key].nl : labels[key].en;
};

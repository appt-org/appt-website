const labels = {
  principle1: {
    en: '1. Perceivable',
    nl: '1. Waarneembaar',
  },
  guideline11: {
    en: '1.1 Text Alternatives',
    nl: '1.1 Tekstalternatieven',
  },
  guideline12: {
    en: '1.2 Time-based Media',
    nl: '1.2 Tijdgebaseerde media',
  },
  guideline13: {
    en: '1.3 Adaptable',
    nl: '1.3 Aanpasbaar',
  },
  guideline14: {
    en: '1.4 Distinguishable',
    nl: '1.4 Onderscheidbaar',
  },
  principle2: {
    en: '2. Operable',
    nl: '2. Bedienbaar',
  },
  guideline21: {
    en: '2.1 Keyboard Accessible',
    nl: '2.1 Toegankelijk met toetsenbord',
  },
  guideline22: {
    en: '2.2 Enough Time',
    nl: '2.2 Voldoende tijd',
  },
  guideline23: {
    en: '2.3 Seizures and Physical Reactions',
    nl: '2.3 Epilepsie en fysieke reacties',
  },
  guideline24: {
    en: '2.4 Navigable',
    nl: '2.4 Navigeerbaar',
  },
  guideline25: {
    en: '2.5 Input Modalities',
    nl: '2.5 Invoermodaliteiten',
  },
  principle3: {
    en: '3. Understandable',
    nl: '3. Begrijpelijk',
  },
  guideline31: {
    en: '3.1 Readable',
    nl: '3.1 Leesbaar',
  },
  guideline32: {
    en: '3.2 Predictable',
    nl: '3.2 Voorspelbaar',
  },
  guideline33: {
    en: '3.3 Input Assistance',
    nl: '3.3 Invoerondersteuning',
  },
  principle4: {
    en: '4. Robust',
    nl: '4. Robuust',
  },
  guideline41: {
    en: '4.1 Compatible',
    nl: '4.1 Compatibel',
  },
  '1.1.1': {
    en: '1.1.1 Non-text Content',
    nl: '1.1.1 Niet-tekstinhoud',
  },
  '1.2.1': {
    en: '1.2.1 Audio-only and Video-only (Prerecorded)',
    nl: '1.2.1 Alleen audio en alleen video (vooraf opgenomen)',
  },
  '1.2.2': {
    en: '1.2.2 Captions (Prerecorded)',
    nl: '1.2.2 Ondertiteling (vooraf opgenomen)',
  },
  '1.2.3': {
    en: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.2.3 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.2.4': {
    en: '1.2.4 Captions (Live)',
    nl: '1.2.4 Ondertiteling (live)',
  },
  '1.2.5': {
    en: '1.2.5 Audio Description (Prerecorded)',
    nl: '1.2.5 Audiobeschrijving (vooraf opgenomen)',
  },
  '1.2.6': {
    en: '1.2.6 Sign Language (Prerecorded)',
    nl: '1.2.6 Gebarentaal (vooraf opgenomen)',
  },
  '1.2.7': {
    en: '1.2.7 Extended Audio Description (Prerecorded)',
    nl: '1.2.7 Uitgebreide audiobeschrijving (vooraf opgenomen)',
  },
  '1.2.8': {
    en: '1.2.8 Media Alternative (Prerecorded)',
    nl: '1.2.8 Media-alternatief (vooraf opgenomen)',
  },
  '1.2.9': {
    en: '1.2.9 Audio-only (Live)',
    nl: '1.2.9 Alleen audio (live)',
  },
  '1.3.1': {
    en: '1.3.1 Info and Relationships',
    nl: '1.3.1 Informatie en relaties',
  },
  '1.3.2': {
    en: '1.3.2 Meaningful Sequence',
    nl: '1.3.2 Betekenisvolle volgorde',
  },
  '1.3.3': {
    en: '1.3.3 Sensory Characteristics',
    nl: '1.3.3 Zintuiglijke kenmerken',
  },
  '1.3.4': {
    en: '1.3.4 Orientation',
    nl: '1.3.4 Oriëntatie',
  },
  '1.3.5': {
    en: '1.3.5 Audio-only and Video-only (Prerecorded)',
    nl: '1.3.5 Alleen audio en alleen video (vooraf opgenomen)',
  },
  '1.3.6': {
    en: '1.3.6 Captions (Prerecorded)',
    nl: '1.3.6 Ondertiteling (vooraf opgenomen)',
  },
  '1.4.1': {
    en: '1.4.1 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.4.1 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.4.2': {
    en: '1.4.2 Captions (Prerecorded)',
    nl: '1.4.2 Ondertiteling (vooraf opgenomen)',
  },
  '1.4.3': {
    en: '1.4.3 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.4.3 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.4.4': {
    en: '1.4.4 Captions (Live)',
    nl: '1.4.4 Ondertiteling (live)',
  },
  '1.4.5': {
    en: '1.4.5 Audio Description (Prerecorded)',
    nl: '1.4.5 Audiobeschrijving (vooraf opgenomen)',
  },
  '1.4.6': {
    en: '1.4.6 Sign Language (Prerecorded)',
    nl: '1.4.6 Gebarentaal (vooraf opgenomen)',
  },
  '1.4.7': {
    en: '1.4.7 Extended Audio Description (Prerecorded)',
    nl: '1.4.7 Uitgebreide audiobeschrijving (vooraf opgenomen)',
  },
  '1.4.8': {
    en: '1.4.8 Media Alternative (Prerecorded)',
    nl: '1.4.8 Media-alternatief (vooraf opgenomen)',
  },
  '1.4.9': {
    en: '1.4.9 Audio-only (Live)',
    nl: '1.4.9 Alleen audio (live)',
  },
  '1.4.10': {
    en: '1.4.10 Info and Relationships',
    nl: '1.4.10 Informatie en relaties',
  },
  '1.4.11': {
    en: '1.4.11 Meaningful Sequence',
    nl: '1.4.11 Betekenisvolle volgorde',
  },
  '1.4.12': {
    en: '1.4.12 Sensory Characteristics',
    nl: '1.4.12 Zintuiglijke kenmerken',
  },
  '1.4.13': {
    en: '1.4.13 Orientation',
    nl: '1.4.13 Oriëntatie',
  },
};

export const getLabel = (key: string) => {
  return process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl' ? labels[key].nl : labels[key].en;
};


import { TimelineEntry, ProblemNeed, Touchpoint } from './types';
import { 
  Home, 
  School, 
  MessageCircle, 
  Palette, 
  BookOpen, 
  Smartphone, 
  UserPlus, 
  BrainCircuit 
} from 'lucide-react';
import React from 'react';

// New Palette based on the provided image
export const PALETTE = {
  lime: '#c8f53c',
  purple: '#7c3aed',
  pink: '#f43f5e',
  orange: '#fb923c',
  lightPurple: '#a855f7'
};

export const PERSONALITY_TRAITS = [
  { name: 'Stille Kracht', score: 90, color: PALETTE.purple },
  { name: 'Creativiteit', score: 95, color: PALETTE.pink },
  { name: 'Zorgzaamheid', score: 85, color: PALETTE.orange },
  { name: 'Sociaal Zelfvertrouwen', score: 40, color: PALETTE.lime },
  { name: 'Taalbeheersing (Ac)', score: 55, color: PALETTE.lightPurple },
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    time: '07:30',
    title: 'De Ochtendroutine',
    description: 'Helpt haar jongste broertje en scant documenten voor haar ouders.',
    touchpoint: 'Fysieke agenda',
    type: 'home'
  },
  {
    time: '10:15',
    title: 'De Geschiedenisles',
    description: 'Vaktaal en snelheid veroorzaken spanning tijdens de tekstverwerking.',
    touchpoint: 'Schoolboeken',
    type: 'school'
  },
  {
    time: '14:00',
    title: 'De Creatieve Pauze',
    description: 'Tekenen op tablet en luisteren naar een audioboek in de mediatheek.',
    touchpoint: 'Tablet (Procreate)',
    type: 'creative'
  },
  {
    time: '16:30',
    title: 'Sociale Interactie',
    description: 'Leest mee in de klassen-app maar twijfelt over reageren.',
    touchpoint: 'WhatsApp',
    type: 'social'
  },
  {
    time: '19:00',
    title: 'De Tolkrol & Huiswerk',
    description: 'Ondersteunt ouders met e-mail en werkt aan biologie met vertaalhulp.',
    touchpoint: 'Vertaal-app',
    type: 'home'
  },
  {
    time: '21:30',
    title: 'Afsluiting',
    description: 'Laatste digitale schets zorgt voor rust voor het slapengaan.',
    touchpoint: 'Digitale tekenboek',
    type: 'creative'
  }
];

export const PROBLEMS_NEEDS: ProblemNeed[] = [
  {
    title: 'Taalonzekerheid (Academisch)',
    problem: 'Struikelblokken in vaktaal en complexe zinsbouw bemoeilijken begrip.',
    urgency: 'Kritieke fase in de brugklas voor zelfbeeld en schoolloopbaan.',
    impact: [
      'Huiswerk kost onevenredig veel energie',
      'Constante zelftwijfel over capaciteiten',
      'Hoge drempel voor hulpvragen in de klas'
    ],
    underlyingNeed: 'Visuele ondersteuning bij complexe abstracte stof.'
  },
  {
    title: 'Sociale Zichtbaarheidsangst',
    problem: 'Bang voor spelfouten in blijvende digitale tekst.',
    urgency: 'Cruciaal voor sociale veiligheid en verbinding in de klas.',
    impact: [
      'Passieve deelname aan groepsinteractie',
      'Overmatige bedenktijd voor simpele antwoorden',
      'Risico op sociaal isolement'
    ],
    underlyingNeed: 'Laagdrempelig en veilig communicatiekanaal.'
  },
  {
    title: 'Thuis-verantwoordelijkheid',
    problem: 'Draagt een zware rol als tolk en helper binnen het gezin.',
    urgency: 'Risico op emotionele overbelasting naast schoolwerk.',
    impact: [
      'Gefragmenteerde focus op eigen studie',
      'Moeite met schuldvrije ontspanning'
    ],
    underlyingNeed: 'Erkenning en externe structurele ondersteuning.'
  }
];

export const TOUCHPOINTS: Touchpoint[] = [
  { category: 'Analoog', items: ['Gezins-documenten', 'Schoolboeken', 'Kleurgecodeerde agenda'] },
  { category: 'Digitaal', items: ['iPad (Procreate/Canva)', 'Audioboek-apps', 'WhatsApp', 'DeepL/Vertaal-software'] },
  { category: 'Sociaal', items: ['Interactie docent', 'Klassen-groepschat'] }
];

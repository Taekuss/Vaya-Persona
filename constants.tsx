
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
  { name: 'Observatie', score: 95, color: PALETTE.purple },
  { name: 'Creativiteit', score: 98, color: PALETTE.pink },
  { name: 'Zorgzaamheid', score: 88, color: PALETTE.orange },
  { name: 'Sociaal Durf', score: 35, color: PALETTE.lime },
  { name: 'Taalzekerheid', score: 45, color: PALETTE.lightPurple },
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    time: '07:30',
    title: 'De Ochtendroutine',
    description: 'Vaya helpt haar jongste broertje met zijn tas en scant brieven van de gemeente voor haar ouders om ze straks te helpen.',
    touchpoint: 'Fysieke agenda',
    type: 'home'
  },
  {
    time: '10:15',
    title: 'De Geschiedenisles',
    description: 'De docent praat snel over de industriële revolutie. Vaya krijgt een knoop in haar maag door de moeilijke woorden.',
    touchpoint: 'Schoolboeken',
    type: 'school'
  },
  {
    time: '14:00',
    title: 'De Creatieve Pauze',
    description: 'Ze trekt zich terug in de mediatheek om te tekenen op haar tablet en luistert naar een Nederlands audioboek.',
    touchpoint: 'Tablet (Procreate)',
    type: 'creative'
  },
  {
    time: '16:30',
    title: 'Sociale Interactie',
    description: 'De klassen-app trilt. Ze willen afspreken voor de bioscoop. Vaya leest mee, maar twijfelt over haar spelling.',
    touchpoint: 'WhatsApp',
    type: 'social'
  },
  {
    time: '19:00',
    title: 'De Tolkrol & Huiswerk',
    description: 'Vaya helpt haar vader met een e-mail en werkt daarna met een vertaal-app aan haar eigen biologieverslag.',
    touchpoint: 'Vertaal-app',
    type: 'home'
  },
  {
    time: '21:30',
    title: 'Rustmoment',
    description: 'Eén laatste digitale schets zorgt voor een gevoel van trots voor ze gaat slapen. Morgen weer een dag.',
    touchpoint: 'Digitaal tekenboek',
    type: 'creative'
  }
];

export const PROBLEMS_NEEDS: ProblemNeed[] = [
  {
    title: 'Taalonzekerheid (Vaktaal)',
    problem: 'Vaya struikelt over vaktermen en lange zinnen bij geschiedenis en aardrijkskunde.',
    urgency: 'Cruciaal voor haar zelfbeeld in deze eerste klas van de middelbare school.',
    impact: [
      'Huiswerk kost haar veel meer tijd dan klasgenoten',
      'Ze vraagt minder snel hulp uit angst om fouten te maken',
      'Gevoel dat ze minder slim is dan klasgenoten'
    ],
    underlyingNeed: 'Visuele uitleg van complexe stof zodat taal geen barrière is.'
  },
  {
    title: 'Sociale Drempel in Groepsapps',
    problem: 'Angst om fouten te maken in WhatsApp-berichten die "blijven staan".',
    urgency: 'Sociale veiligheid is nodig om erbij te horen en vrienden te maken.',
    impact: [
      'Leest berichten maar reageert bijna nooit',
      'Denkt extreem lang na over simpele antwoorden',
      'Mist kansen om vriendschappen te verdiepen'
    ],
    underlyingNeed: 'Een veilige manier om te communiceren en te oefenen.'
  },
  {
    title: 'Mentale Belasting Thuis',
    problem: 'Grote verantwoordelijkheid als helpende hand en tolk voor haar ouders.',
    urgency: 'Emotionele belasting door de combinatie van school en zorgrol.',
    impact: [
      'Minder tijd voor eigen schoolwerk en rust',
      'Altijd de "helper" moeten zijn voor anderen'
    ],
    underlyingNeed: 'Structuur en erkenning voor haar dubbele rol.'
  }
];

export const TOUCHPOINTS: Touchpoint[] = [
  { category: 'Analoog', items: ['Familie-documenten', 'Schoolboeken', 'Gekleurde agenda'] },
  { category: 'Digitaal', items: ['iPad (Procreate)', 'Audioboeken', 'WhatsApp', 'Vertaal-apps'] },
  { category: 'Sociaal', items: ['Interactie met docent', 'Groepschat met de klas'] }
];

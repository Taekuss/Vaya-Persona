
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

export const PERSONALITY_TRAITS = [
  { name: 'Stille Kracht', score: 90, color: '#6366f1', icon: <UserPlus className="w-4 h-4" /> },
  { name: 'Creativiteit', score: 95, color: '#ec4899', icon: <Palette className="w-4 h-4" /> },
  { name: 'Zorgzaamheid', score: 85, color: '#10b981', icon: <Home className="w-4 h-4" /> },
  { name: 'Sociaal Zelfvertrouwen', score: 40, color: '#f59e0b', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Taalbeheersing (Academisch)', score: 55, color: '#06b6d4', icon: <BookOpen className="w-4 h-4" /> },
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    time: '07:30',
    title: 'De Ochtendroutine',
    description: 'Helpt haar jongste broertje met zijn gymtas en scant een brief van de gemeente voor haar ouders.',
    touchpoint: 'Fysieke agenda met kleurcodes',
    type: 'home'
  },
  {
    time: '10:15',
    title: 'De Geschiedenisles',
    description: 'De industriële revolutie. De snelheid van het Nederlands is hoog, wat een knoop in haar maag veroorzaakt.',
    touchpoint: 'Schoolboeken / Docent',
    type: 'school'
  },
  {
    time: '14:00',
    title: 'De Creatieve Pauze',
    description: 'Trekt zich terug in de mediatheek om te tekenen op haar tablet en luistert naar een audioboek.',
    touchpoint: 'Tablet (Procreate) & Audioboek-app',
    type: 'creative'
  },
  {
    time: '16:30',
    title: 'Sociale Interactie',
    description: 'Fietsend naar huis trilt de telefoon: de klassen-app plant een uitje. Vaya twijfelt over haar antwoord.',
    touchpoint: 'WhatsApp',
    type: 'social'
  },
  {
    time: '19:00',
    title: 'De Tolkrol & Huiswerk',
    description: 'Helpt haar vader met een e-mail en werkt ijverig door aan haar biologieverslag met een vertaal-app.',
    touchpoint: 'Vertaal-app / Digitaal woordenboek',
    type: 'home'
  },
  {
    time: '21:30',
    title: 'Afsluiting',
    description: 'Eén laatste schets in haar digitale tekenboek voor een voldaan gevoel voor het slapengaan.',
    touchpoint: 'Digitale tekenboek',
    type: 'creative'
  }
];

export const PROBLEMS_NEEDS: ProblemNeed[] = [
  {
    title: 'Taalonzekerheid in Academische Context',
    problem: 'Vaya begrijpt de kern vaak wel, maar struikelt over vaktaal en lange zinnen.',
    urgency: 'In de brugklas wordt de basis gelegd. Taalbarrières kunnen haar zelfbeeld blijvend schaden.',
    impact: [
      'Huiswerk kost meer tijd en energie',
      'Constant twijfelen aan eigen kunnen',
      'Durft minder snel hulp te vragen'
    ],
    underlyingNeed: 'Toegankelijke uitleg met visuele ondersteuning.'
  },
  {
    title: 'Angst voor Sociale Zichtbaarheid',
    problem: 'Bang voor spelfouten in tekst die "blijft staan" (zoals in groepsapps).',
    urgency: 'Sociale veiligheid is cruciaal op deze leeftijd om isolatie te voorkomen.',
    impact: [
      'Leest berichten maar reageert nauwelijks',
      'Denkt té lang na over simpele antwoorden',
      'Mist kansen voor diepere vriendschappen'
    ],
    underlyingNeed: 'Veilige manier om te communiceren zonder oordeel.'
  },
  {
    title: 'Mentale Belasting door Thuisrol',
    problem: 'Veel verantwoordelijkheid als helpende hand en tolk voor haar ouders.',
    urgency: 'Emotionele overbelasting dreigt door de combinatie van nieuwe school en zorgrol.',
    impact: [
      'Minder tijd voor eigen schoolwerk',
      'Moeite met ontspannen zonder schuldgevoel'
    ],
    underlyingNeed: 'Structuur en erkenning: iemand die háár ook eens ondersteunt.'
  }
];

export const TOUCHPOINTS: Touchpoint[] = [
  { category: 'Analoog', items: ['Familie-documenten', 'Schoolboeken', 'Fysieke agenda'] },
  { category: 'Digitaal', items: ['Tablet (Procreate/Canva)', 'Audioboek-app', 'WhatsApp', 'Vertaal-software'] },
  { category: 'Sociaal', items: ['Interactie met docent', 'Groepschat met klasgenoten'] }
];

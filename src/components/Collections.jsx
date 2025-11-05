import React from 'react';
import { BookOpen, FlaskConical, Feather, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Ancient Spellbooks',
    desc: 'Dusty tomes brimming with incantations, charms, and enchantments.',
    icon: BookOpen,
  },
  {
    title: 'Potions & Elixirs',
    desc: 'From Polyjuice to Felix Felicis — brew with care and curiosity.',
    icon: FlaskConical,
  },
  {
    title: 'Magical Creatures',
    desc: 'A catalog of curious beings: phoenixes, hippogriffs, and more.',
    icon: Feather,
  },
  {
    title: 'Artifacts & Relics',
    desc: 'Wands, cloaks, and time-turners — storied tools of the trade.',
    icon: Sparkles,
  },
];

const Collections = () => {
  return (
    <section id="collections" className="relative w-full bg-[#0f0a07] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-amber-100 sm:text-3xl">Collections</h2>
            <p className="mt-2 text-sm text-amber-200/80">Explore areas of study from the Hogwarts stacks.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-amber-900/40 bg-gradient-to-b from-[#1a120c] to-[#0b0705] p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-800/40 text-amber-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-100">{title}</h3>
              <p className="mt-2 text-sm text-amber-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

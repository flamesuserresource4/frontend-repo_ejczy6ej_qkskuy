import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Harry Potter',
    initials: 'HP',
    house: 'Gryffindor',
    colorFrom: '#8B4513',
    colorTo: '#C08457',
    quote: 'Working hard is important, but there is something that matters even more: believing in yourself.',
  },
  {
    name: 'Hermione Granger',
    initials: 'HG',
    house: 'Gryffindor',
    colorFrom: '#5B3A1E',
    colorTo: '#B08968',
    quote: "Books! And cleverness! There are more important things — bravery and friendship.",
  },
  {
    name: 'Ron Weasley',
    initials: 'RW',
    house: 'Gryffindor',
    colorFrom: '#4E342E',
    colorTo: '#A47551',
    quote: "When in doubt, go to the library. Or ask Hermione.",
  },
  {
    name: 'Albus Dumbledore',
    initials: 'AD',
    house: 'Hogwarts',
    colorFrom: '#3E2723',
    colorTo: '#8D6E63',
    quote: 'Words are, in my not-so-humble opinion, our most inexhaustible source of magic.',
  },
];

const Characters = () => {
  return (
    <section id="characters" className="relative w-full bg-[#120c08] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-amber-100 sm:text-3xl">Featured Characters</h2>
            <p className="mt-2 text-sm text-amber-200/80">A few familiar faces from the wizarding world.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((c) => (
            <motion.div
              key={c.name}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group rounded-xl border border-amber-900/40 bg-gradient-to-b from-[#1b120c] to-[#0d0906] p-5 shadow-lg"
            >
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-lg font-bold text-amber-50 shadow-inner"
                style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }}
              >
                {c.initials}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-amber-100">{c.name}</h3>
                <p className="text-xs uppercase tracking-wider text-amber-300/80">{c.house}</p>
                <p className="mt-3 text-sm text-amber-200/90">“{c.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;

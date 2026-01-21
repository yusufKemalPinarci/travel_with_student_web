import React from 'react';
import Button from '../components/Button';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
       {/* Headline Section */}
       <div className="text-center mb-12">
         <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
            Exploring Cities through <span className="text-primary-600">Local Eyes.</span>
         </h1>
         <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are redefining travel by connecting curious explorers with the students who know their cities best.
         </p>
       </div>

       {/* Story Content */}
       <div className="prose prose-lg mx-auto text-slate-700 leading-loose mb-12">
         <p className="mb-6">
            Travel with Student began with a simple observation: students in university cities often struggle to make ends meet, yet they possess a wealth of local knowledge that money can't buy. Meanwhile, tourists often feel trapped in tourist traps, missing the authentic pulse of the city. We saw a bridge waiting to be built.
         </p>
         <p>
            Our platform bridges this gap, creating a symbiotic relationship. Students earn income on their own schedule by sharing their passion for their city, and travelers get an authentic, unscripted experience that goes beyond the guidebooks. It's more than a tour; it's a cross-cultural exchange.
         </p>
       </div>

       {/* Mission Statement */}
       <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h2>
          <p className="text-xl md:text-2xl font-medium text-primary-800 italic">
             "To empower students financially while offering tourists a friend in a new city, not just a guide."
          </p>
       </div>

       {/* Visuals Placeholder */}
       <div className="w-full h-64 md:h-96 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 mb-12 overflow-hidden shadow-inner">
           {/* Placeholder Image Tag as requested */}
            <div className="text-center">
                 <span className="material-symbols-outlined text-6xl mb-2">image</span>
                 <p className="font-semibold text-lg">Team Photo Placeholder</p>
            </div>
       </div>
       
       <div className="text-center">
         <h3 className="text-2xl font-bold mb-6">Ready to see the world differently?</h3>
         <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">Find a Guide</Button>
            <Button variant="outline" size="lg">Become a Guide</Button>
         </div>
       </div>

    </div>
  );
}

import React, { useState } from 'react';
import BasicUsageExamples from './basic-usage.jsx';
import AdvancedUsageExamples from './advanced-usage.jsx';

function App() {
  const [view, setView] = useState('basic');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/95 border-b border-gray-200">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                React Scroll Reveal
              </span>
              <span className="ml-2 text-gray-800">Demo</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">Explore basic and advanced usage examples</p>
          </div>

          <div className="mt-4 sm:mt-0 flex gap-2">
            <button
              onClick={() => setView('basic')}
              className={`px-4 py-2 rounded-lg font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                view === 'basic'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300'
              }`}
            >
              Basic Examples
            </button>
            <button
              onClick={() => setView('advanced')}
              className={`px-4 py-2 rounded-lg font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                view === 'advanced'
                  ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300'
              }`}
            >
              Advanced Examples
            </button>
          </div>
        </div>
      </header>

      {/* Page container */}
      <main className="container mx-auto px-4">
        {/* Breadcrumb / View title */}
        <div className="py-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <span className={`h-2 w-2 rounded-full ${view === 'basic' ? 'bg-blue-600' : 'bg-purple-600'}`}></span>
            {view === 'basic' ? 'Basic Examples' : 'Advanced Examples'}
          </div>
        </div>

        <div className="relative">
          {/* subtle background grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          </div>

          {/* Content card wrapper for consistent look */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-black/5">
            {view === 'basic' ? <BasicUsageExamples /> : <AdvancedUsageExamples />}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-gray-500">
          <p>
            Built with <span className="text-pink-600">♥</span> using Tailwind CSS & Vite, by <span className="font-semibold">Anushka Isuranga</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;

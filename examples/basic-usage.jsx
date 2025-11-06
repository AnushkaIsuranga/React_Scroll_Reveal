import React from 'react';
import { AnimatedElement, AnimationSequence } from 'react-scroll-reveal';

/**
 * Basic Usage Examples
 * Simple demonstrations of core functionality
 */

function BasicUsageExamples() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Example 1: Simple Fade Up */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-semibold shadow-sm">1</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Simple Fade Up Animation</h2>
        </div>
        <AnimatedElement direction="up">
          <div className="group rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-md transition hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
              {' '}Hello World!
            </h3>
            <p className="text-white/90">This element fades in from below when scrolled into view.</p>
          </div>
        </AnimatedElement>
      </section>

      {/* Example 2: Different Directions */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-semibold shadow-sm">2</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Animation Directions</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AnimatedElement direction="up" delay={100}>
            <div className="rounded-xl bg-purple-500 p-6 text-center text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">From Bottom ↑</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="down" delay={200}>
            <div className="rounded-xl bg-pink-500 p-6 text-center text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">From Top ↓</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="left" delay={300}>
            <div className="rounded-xl bg-green-500 p-6 text-center text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">From Right →</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="right" delay={400}>
            <div className="rounded-xl bg-orange-500 p-6 text-center text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">From Left ←</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example 3: Custom Timing */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-semibold shadow-sm">3</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Custom Timing & Distance</h2>
        </div>
        <div className="space-y-4">
          <AnimatedElement direction="up" duration={300} distance={8}>
            <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-white shadow-md ring-1 ring-white/10">
              <p className="font-medium">Fast & Subtle (300ms, 8px)</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="up" duration={1000} distance={50}>
            <div className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-md ring-1 ring-white/10">
              <p className="font-medium">Slow & Dramatic (1000ms, 50px)</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example 4: Staggered List */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 font-semibold shadow-sm">4</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Staggered List Animation</h2>
        </div>
        <AnimationSequence direction="up" baseDelay={200} staggerDelay={100}>
          {(() => {
            const items = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'];
            const shades = ['bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800'];
            return items.map((item, idx) => (
              <div
                key={item}
                className={`rounded-xl ${shades[idx]} mb-4 p-6 text-white shadow-md ring-1 ring-white/10`}
              >
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="text-teal-50/90">Animates {idx * 100}ms after first</p>
              </div>
            ));
          })()}
        </AnimationSequence>
      </section>

      {/* Example 5: Card Grid */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-semibold shadow-sm">5</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Card Grid with Stagger</h2>
        </div>
        <AnimationSequence
          direction="up"
          baseDelay={100}
          staggerDelay={150}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: '🎨', title: 'Design', desc: 'Beautiful, modern interfaces' },
            { icon: '⚡', title: 'Performance', desc: 'Lightning fast animations' },
            { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-4xl mb-4 drop-shadow-sm">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </AnimationSequence>
      </section>

      {/* Example 6: Delayed Start */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 font-semibold shadow-sm">6</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Delayed Animation</h2>
        </div>
        <AnimatedElement direction="up" delay={500}>
          <div className="rounded-2xl bg-yellow-500 p-8 text-gray-900 shadow-md ring-1 ring-yellow-400/40 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Wait for it...</h3>
            <p className="text-gray-800/90">This animates 500ms after entering the viewport</p>
          </div>
        </AnimatedElement>
      </section>

      {/* Example 7: Start Visible */}
      <section className="mb-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 font-semibold shadow-sm">7</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Already Visible (No Animation)</h2>
        </div>
        <AnimatedElement direction="up" startVisible={true}>
          <div className="rounded-2xl bg-gray-800 p-8 text-white shadow-md ring-1 ring-gray-700/50">
            <h3 className="text-xl font-semibold mb-2">Always Visible</h3>
            <p className="text-gray-200/90">This element is visible immediately without animation</p>
          </div>
        </AnimatedElement>
      </section>

      <div className="h-40"></div>
    </div>
  );
}

export default BasicUsageExamples;
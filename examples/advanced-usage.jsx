import React, { useState } from 'react';
import { AnimatedElement, AnimationSequence } from 'react-scroll-reveal';

/**
 * Advanced Usage Examples
 * Complex patterns and real-world use cases
 */

function AdvancedUsageExamples() {
  const [filter, setFilter] = useState('all');

  // Sample data for examples
  const products = [
    { id: 1, name: 'Product A', category: 'electronics', price: '$299' },
    { id: 2, name: 'Product B', category: 'clothing', price: '$49' },
    { id: 3, name: 'Product C', category: 'electronics', price: '$599' },
    { id: 4, name: 'Product D', category: 'books', price: '$19' },
    { id: 5, name: 'Product E', category: 'clothing', price: '$79' },
    { id: 6, name: 'Product F', category: 'books', price: '$29' },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Example 1: Diagonal Animations */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">1. Diagonal Animations</h2>
        <div className="grid grid-cols-2 gap-4">
          <AnimatedElement direction="up-left" delay={100}>
            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">Up-Left ↖</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="up-right" delay={200}>
            <div className="rounded-2xl bg-gradient-to-bl from-blue-500 to-teal-500 p-8 text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">Up-Right ↗</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="down-left" delay={300}>
            <div className="rounded-2xl bg-gradient-to-tr from-orange-500 to-red-500 p-8 text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">Down-Left ↙</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="down-right" delay={400}>
            <div className="rounded-2xl bg-gradient-to-tl from-green-500 to-emerald-500 p-8 text-white shadow-sm ring-1 ring-white/10">
              <p className="font-semibold">Down-Right ↘</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example 2: Custom Easing Functions */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">2. Custom Easing Functions</h2>
        <div className="space-y-4">
          <AnimatedElement 
            direction="left" 
            easing="ease-in"
            duration={800}
          >
            <div className="bg-indigo-600 text-white p-6 rounded-lg">
              <p className="font-semibold">Ease In - Slow start, fast end</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            direction="left" 
            easing="ease-out"
            duration={800}
          >
            <div className="bg-indigo-700 text-white p-6 rounded-lg">
              <p className="font-semibold">Ease Out - Fast start, slow end</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            direction="left" 
            easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            duration={800}
          >
            <div className="bg-indigo-800 text-white p-6 rounded-lg">
              <p className="font-semibold">Custom Cubic Bezier - Bounce effect</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example 3: Nested Animations */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">3. Nested Sequential Animations</h2>
        <AnimatedElement direction="up" delay={100}>
          <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-sm ring-1 ring-white/10">
            <AnimatedElement direction="right" delay={400}>
              <h3 className="text-2xl font-bold mb-4">Parent Animation</h3>
            </AnimatedElement>
            
            <AnimationSequence 
              direction="up" 
              baseDelay={600} 
              staggerDelay={100}
            >
              <p className="mb-2">• Child item 1</p>
              <p className="mb-2">• Child item 2</p>
              <p className="mb-2">• Child item 3</p>
            </AnimationSequence>
          </div>
        </AnimatedElement>
      </section>

      {/* Example 4: Hero Section Pattern */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">4. Hero Section Pattern</h2>
  <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-white shadow-md ring-1 ring-white/10">
          <AnimatedElement direction="up" delay={100} distance={30}>
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Product</h1>
          </AnimatedElement>
          
          <AnimatedElement direction="up" delay={300} distance={20}>
            <p className="text-xl mb-8 opacity-90">
              The best solution for your business needs
            </p>
          </AnimatedElement>
          
          <AnimationSequence 
            direction="up" 
            baseDelay={500} 
            staggerDelay={100}
            className="flex gap-4"
          >
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-gray-100">
              Get Started
            </button>
            <button className="rounded-lg border border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700">
              Learn More
            </button>
          </AnimationSequence>
        </div>
      </section>

      {/* Example 5: Feature Grid with Icons */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">5. Feature Grid Pattern</h2>
        <AnimationSequence 
          direction="up" 
          baseDelay={200} 
          staggerDelay={100}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: '🚀', title: 'Fast', desc: 'Lightning fast performance' },
            { icon: '🔒', title: 'Secure', desc: 'Bank-level security' },
            { icon: '📊', title: 'Analytics', desc: 'Deep insights' },
            { icon: '💎', title: 'Premium', desc: 'Top quality' },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </AnimationSequence>
      </section>

      {/* Example 6: Testimonials Carousel Pattern */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">6. Testimonials Pattern</h2>
        <AnimationSequence 
          direction="left" 
          baseDelay={200} 
          staggerDelay={200}
          className="space-y-6"
        >
          {[
            { name: 'John Doe', role: 'CEO', quote: 'This product changed our business!' },
            { name: 'Jane Smith', role: 'Designer', quote: 'Beautiful and easy to use.' },
            { name: 'Mike Johnson', role: 'Developer', quote: 'Best developer experience ever!' },
          ].map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl border-l-4 border-blue-500 bg-white p-8 shadow-sm">
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </AnimationSequence>
      </section>

      {/* Example 7: Continuous Animation (triggerOnce=false) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">7. Continuous Animation</h2>
        <p className="mb-4 text-gray-600">
          Scroll down and back up - these animate every time they enter the viewport
        </p>
        <div className="space-y-4">
          <AnimatedElement direction="right" triggerOnce={false}>
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <p className="font-semibold">Animates every time (triggerOnce=false)</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="left" triggerOnce={false}>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold">Animates every time (triggerOnce=false)</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example 8: Dynamic Content with Filters */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">8. Filtered Product Grid</h2>
        <div className="mb-6 flex gap-2">
          {['all', 'electronics', 'clothing', 'books'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-lg px-4 py-2 font-semibold transition ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <AnimationSequence 
          key={filter} // Re-trigger animation on filter change
          direction="up" 
          baseDelay={100} 
          staggerDelay={80}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {filteredProducts.map(product => (
            <div key={product.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 h-32 w-full rounded bg-gray-200"></div>
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-xl font-bold text-blue-700">{product.price}</p>
            </div>
          ))}
        </AnimationSequence>
      </section>

      {/* Example 9: Stats Counter Pattern */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">9. Stats Section</h2>
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 text-white shadow-md ring-1 ring-white/10">
          <AnimationSequence 
            direction="up" 
            baseDelay={200} 
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </AnimationSequence>
        </div>
      </section>

      {/* Example 10: Timeline Pattern */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">10. Timeline Pattern</h2>
        <AnimationSequence 
          direction="right" 
          baseDelay={200} 
          staggerDelay={200}
          className="space-y-8"
        >
          {[
            { year: '2020', title: 'Founded', desc: 'Started with a vision' },
            { year: '2021', title: 'First Product', desc: 'Launched our MVP' },
            { year: '2022', title: 'Growth', desc: 'Reached 1000 users' },
            { year: '2023', title: 'Expansion', desc: 'Opened new markets' },
          ].map((milestone) => (
            <div key={milestone.year} className="flex items-center">
              <div className="mr-8 w-24 flex-shrink-0 text-right">
                <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
              </div>
              <div className="mr-8 h-4 w-4 flex-shrink-0 rounded-full bg-blue-600"></div>
              <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </AnimationSequence>
      </section>

      {/* Spacer for scrolling */}
  <div className="h-40"></div>
    </div>
  );
}

export default AdvancedUsageExamples;
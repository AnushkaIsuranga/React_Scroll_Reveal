# React Scroll Reveal

A lightweight, customizable React component library for scroll-based and staggered animations. Create beautiful entrance animations with minimal setup.

## Features

- 🎨 **8 Animation Directions** - up, down, left, right, and diagonal combinations
- 🔄 **Intersection Observer** - Efficient scroll-based triggering
- ⚡ **Staggered Animations** - Built-in sequence support
- 🎯 **Flexible Configuration** - Customize delay, duration, distance, and easing
- 🪶 **Lightweight** - Zero dependencies (except React & PropTypes)
- 📱 **Responsive** - Works seamlessly across all devices
- ♿ **Accessible** - Respects user motion preferences

## Installation

```bash
npm install react-scroll-reveal
# or
yarn add react-scroll-reveal
# or
pnpm add react-scroll-reveal
```

## Quick Start

> Looking for a live demo? This repo includes a Vite-powered demo that showcases both basic and advanced examples with Tailwind CSS styling.

### Run the demo locally

```bash
# install deps
npm install

# start dev server
npm run dev

# open the URL printed in the terminal (usually http://localhost:5173)
```

The demo entry is `index.html` and mounts `examples/app.jsx` via `demo-main.jsx`. Use the top-right buttons to switch between “Basic Examples” and “Advanced Examples”.

Tailwind CSS is already configured (see `tailwind.config.js`, `postcss.config.js` and `src/index.css`).

### Basic Animation

```jsx
import { AnimatedElement } from 'react-scroll-reveal';

function App() {
  return (
    <AnimatedElement direction="up" delay={100}>
      <h1>This fades in from below!</h1>
    </AnimatedElement>
  );
}
```

### Staggered Animation Sequence

```jsx
import { AnimationSequence } from 'react-scroll-reveal';

function App() {
  return (
    <AnimationSequence 
      direction="up" 
      baseDelay={200} 
      staggerDelay={150}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </AnimationSequence>
  );
}
```

## API Reference

### AnimatedElement

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | node | **required** | Content to animate |
| `direction` | string | `"up"` | Animation direction: `"up"`, `"down"`, `"left"`, `"right"`, `"up-left"`, `"up-right"`, `"down-left"`, `"down-right"` |
| `delay` | number | `0` | Delay before animation starts (ms) |
| `duration` | number | `700` | Animation duration (ms) |
| `distance` | number | `12` | Distance to move (px) |
| `easing` | string | `"ease-out"` | CSS easing function |
| `threshold` | number | `0.1` | IntersectionObserver threshold (0-1) |
| `className` | string | `""` | Additional CSS classes |
| `startVisible` | boolean | `false` | Start with element visible |
| `triggerOnce` | boolean | `true` | Animate only once |

### AnimationSequence

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | node | **required** | Elements to animate in sequence |
| `direction` | string | `"up"` | Animation direction for all children |
| `baseDelay` | number | `300` | Initial delay before first animation (ms) |
| `staggerDelay` | number | `200` | Delay between each child animation (ms) |
| `duration` | number | `700` | Animation duration (ms) |
| `distance` | number | `12` | Distance to move (px) |
| `easing` | string | `"ease-out"` | CSS easing function |
| `className` | string | `""` | Additional CSS classes |
| `triggerOnce` | boolean | `true` | Animate only once |

## Examples

### Card Grid with Stagger

```jsx
<AnimationSequence 
  direction="up" 
  baseDelay={100} 
  staggerDelay={100}
  className="grid grid-cols-3 gap-4"
>
  <Card title="Feature 1" />
  <Card title="Feature 2" />
  <Card title="Feature 3" />
</AnimationSequence>
```

### Custom Easing

```jsx
<AnimatedElement 
  direction="right" 
  duration={1000}
  easing="cubic-bezier(0.4, 0, 0.2, 1)"
>
  <Content />
</AnimatedElement>
```

### Continuous Animation

```jsx
<AnimatedElement 
  direction="down" 
  triggerOnce={false}
>
  <Content />
</AnimatedElement>
```

## Browser Support

- Chrome/Edge 51+
- Firefox 55+
- Safari 12.1+
- Opera 38+

Requires [IntersectionObserver API](https://caniuse.com/intersectionobserver). For older browsers, include a [polyfill](https://github.com/w3c/IntersectionObserver/tree/main/polyfill).

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

MIT © Anushka Isuranga

## Acknowledgments

Built with ❤️ using React and IntersectionObserver API.

---

**Made with ❤️ by the community**
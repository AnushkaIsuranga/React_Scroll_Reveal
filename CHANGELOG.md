# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Vite-powered local demo (`examples/app.jsx`, `demo-main.jsx`, `index.html`) showcasing basic and advanced usage.
- Tailwind CSS integration (`tailwind.config.js`, `postcss.config.js`, `src/index.css`) for modern utility-first styling.

### Changed
- Refined styling for all example components (`examples/basic-usage.jsx`, `examples/advanced-usage.jsx`) to look more professional (improved layouts, consistent spacing, accessible focus states).

### Fixed
- Resolved Tailwind build and dev style visibility issues by updating PostCSS plugin configuration and import order.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-06

### Added
- Initial release
- `AnimatedElement` component with 8 directional animations
- `AnimationSequence` component for staggered animations
- IntersectionObserver-based scroll detection
- Customizable delay, duration, distance, and easing
- Support for trigger-once and continuous animations
- Comprehensive prop types validation

### Documentation
- Complete README with API reference and examples
- Contributing guidelines
- Code of Conduct
- MIT License
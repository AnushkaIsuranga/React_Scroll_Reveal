# Contributing to React Animated Elements

First off, thank you for considering contributing to React Animated Elements! It's people like you that make this library better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [isuranga880@hotmail.com].

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed and what behavior you expected**
* **Include screenshots or animated GIFs if possible**
* **Include your environment details** (React version, browser, OS)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Provide specific examples to demonstrate the enhancement**
* **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repo** and create your branch from `development` (never from `main` for new work)
2. **Install dependencies**: `npm install`
3. **Make your changes** on a clearly named feature branch (e.g. `feature/diagonal-directions` or `fix/observer-memory-leak`)
4. **Test your changes** thoroughly
5. **Follow the coding style** of the project
6. **Write clear commit messages**
7. **Submit your pull request** targeting the `development` branch (maintainers merge `development` into `main` only after review & release prep)

#### Branching & Pull Request Process

We follow a simple flow to keep `main` stable:

```
fork -> clone -> checkout development -> create feature branch -> commit -> push -> PR to development -> review -> merge -> release (maintainers merge development -> main)
```

1. Ensure your branch is up to date with `origin/development` before starting
2. Update the README.md with details of changes if applicable
3. Update the CHANGELOG.md under `[Unreleased]`
4. Ensure all tests pass (if applicable)
5. Open a PR against `development` (not `main`)
6. After approval, the PR is squashed or merged into `development`
7. Maintainers will handle versioning and merging `development` into `main` during release
8. Do not force-push to shared branches (except to clean up your own PR before review)

## Development Setup

```bash
# Clone your fork
git clone https://github.com/AnushkaIsuranga/React_Scroll_Reveal.git

# Navigate to the project directory
cd react-animated-elements

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/your-feature-name
```

## Coding Style

* Use 2 spaces for indentation
* Use semicolons
* Use double quotes for strings
* Use descriptive variable names
* Comment complex logic
* Follow React best practices and hooks guidelines

## Component Guidelines

When adding or modifying components:

* **Keep components focused** - One component should do one thing well
* **Use PropTypes** for type checking
* **Provide sensible defaults** for all props
* **Document all props** in the README
* **Consider performance** - Use React.memo when appropriate
* **Think about accessibility** - Ensure animations can be disabled

## Testing

Before submitting your PR:

* Test in multiple browsers (Chrome, Firefox, Safari)
* Test on different screen sizes
* Verify animations work smoothly
* Check that props work as documented
* Test edge cases

## Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Examples:
```
Add diagonal animation directions
Fix memory leak in IntersectionObserver cleanup
Update README with new examples
```

## Questions?

Feel free to open an issue with the question label or reach out to [isuranga880@hotmail.com].

## Recognition

Contributors will be recognized in our README.md file. Thank you for helping make this project better!

---

**Happy Contributing! 🎉**
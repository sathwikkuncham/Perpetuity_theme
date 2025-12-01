# Change Log

All notable changes to the "Perpetuity Theme" extension will be documented in this file.

## [2.0.1] - 2025-12-01

### Fixed
- **Light Theme Variable Visibility**: Darkened variable colors from `#0d5f6d` to `#074952` for much better visibility against light background
- **Light Theme Property Colors**: Darkened property colors from `#1a7a85` to `#116670` for improved contrast and readability
- Variables now clearly distinguishable from default foreground color in both themes

## [2.0.0] - 2025-12-01

### Added - Major Theme Overhaul
- **Semantic Highlighting Support**: Full semantic highlighting with 44 token types for precise, context-aware syntax coloring
  - Parameters, properties, methods, functions, classes, interfaces, enums all have distinct colors
  - Support for readonly, static, abstract, async modifiers
  - Decorators, annotations, and macro highlighting
- **94+ Token Scopes**: Expanded from 24 to 94+ TextMate token scopes for comprehensive language coverage
- **Enhanced Color Differentiation**:
  - Parameters in highly visible gold/orange (`#e0af68` dark, `#b8860b` light)
  - Variables, properties, and methods all have distinct colors
  - Dimmed comments for reduced distraction
  - Improved operator colors (distinct from keywords)
- **Language-Specific Enhancements**:
  - TypeScript/JavaScript: JSX components, props, type annotations, generics
  - Python: F-strings, decorators, magic methods, self parameter
  - CSS/SCSS: Class/ID selectors, pseudo-classes, CSS variables
  - Markdown: Code blocks, quotes, headings with proper styling
  - JSON: Multi-level property name differentiation
- **Development Tools**:
  - Added `.vscode/settings.json` to force-enable semantic highlighting
  - Created comprehensive test files: `THEME_TEST_SHOWCASE.ts`, `theme_test_python.py`
  - Added launch configuration for theme development

### Changed
- Comments dimmed from `#36a5a5` to `#566b73` (dark) and `#427a7e` to `#758a8e` (light)
- Operators changed to distinct cyan shades to differentiate from keywords
- Variable colors now distinct from default foreground in both themes
- Property colors updated to match semantic token definitions

### Documentation
- Added `IMPLEMENTATION_SUMMARY.md` with complete feature breakdown
- Added `SEMANTIC_HIGHLIGHTING_FIX.md` explaining semantic highlighting requirements
- Comprehensive inline documentation in theme JSON files

## [1.0.0] - Initial Release

### Added
- Initial Perpetuity Light theme
- Initial Perpetuity Dark theme
- Basic syntax highlighting for common languages
- Teal color scheme with 6 core colors
- 24 token scope definitions

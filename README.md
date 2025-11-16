# Components Library

A collection of reusable React components built with TypeScript and Tailwind CSS. These components provide a consistent, accessible, and customizable foundation for building user interfaces.

## Components

### Button

A versatile button component with multiple variants and sizes.

**Features:**

- Multiple variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Multiple sizes: `default`, `sm`, `lg`, `icon`
- Full accessibility support with proper focus states
- Forward ref support
- Extends native button HTML attributes

**Usage:**

```tsx
import { Button } from "./button"

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="destructive" size="lg">
  Delete Item
</Button>

// With custom className
<Button className="custom-styles" variant="outline">
  Custom Button
</Button>
```

### Input

A flexible input component with label, error, and helper text support.

**Features:**

- Optional label with proper accessibility
- Error state with custom error messages
- Helper text for additional context
- Auto-generated unique IDs for proper label-input association
- Full TypeScript support with extended HTML input attributes
- Tailwind CSS styling with focus states

**Usage:**

```tsx
import { Input } from "./input"

// Basic usage
<Input placeholder="Enter your name" />

// With label
<Input label="Email Address" type="email" />

// With error state
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

// With helper text
<Input
  label="Username"
  helperText="Must be unique and contain only letters and numbers"
/>
```

### Textarea

A customizable textarea component with the same features as the Input component.

**Features:**

- Optional label with proper accessibility
- Error state with custom error messages
- Helper text for additional context
- Auto-generated unique IDs for proper label-textarea association
- Resizable vertically
- Minimum height of 80px
- Full TypeScript support with extended HTML textarea attributes

**Usage:**

```tsx
import { Textarea } from "./textarea"

// Basic usage
<Textarea placeholder="Enter your message" />

// With label
<Textarea label="Description" rows={4} />

// With error state
<Textarea
  label="Comments"
  error="This field is required"
/>

// With helper text
<Textarea
  label="Bio"
  helperText="Tell us about yourself (max 500 characters)"
  maxLength={500}
/>
```

## Styling

All components use Tailwind CSS for styling with a consistent design system:

- **Color System**: Uses CSS custom properties for theming (`foreground`, `background`)
- **Focus States**: Consistent focus ring styling across all components
- **Transitions**: Smooth color transitions for better user experience
- **Responsive**: Components adapt to different screen sizes

## Accessibility

These components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Semantic HTML structure

## TypeScript Support

All components are fully typed with TypeScript:

- Proper prop interfaces
- Extended HTML element attributes
- Forward ref typing
- Type-safe variant and size options

## Customization

Components can be customized in several ways:

1. **Custom Classes**: Pass additional Tailwind classes via the `className` prop
2. **CSS Variables**: Modify the color system by updating CSS custom properties
3. **Props**: Use component-specific props for behavior customization

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS

## Installation

These components assume you have React, TypeScript, and Tailwind CSS already set up in your project. Simply copy the component files into your project and import them as needed.

## 🚀 Quick Start

This repository contains standalone component source files (TypeScript + Tailwind CSS) and does not include a `package.json`, build scripts, or automated tests. Use one of the options below to run or preview the components locally.

Option A — Add to an existing project

1. Copy the `.tsx` files and `style.css` into your existing React + TypeScript + Tailwind project.
2. Import the components where needed and run your app as usual (for example, `npm run dev` in your app).

Option B — Create a small local playground (recommended if you don't have an existing app)

```bash
# Create a Vite React + TypeScript playground
npm create vite@latest components-playground -- --template react-ts
cd components-playground
npm install

# Copy component files (button.tsx, input.tsx, textarea.tsx, typography.tsx, style.css) into src/
# Install Tailwind CSS in the playground (follow Tailwind's Vite setup guide)

# Start the dev server
npm run dev
```

Notes:

- The easiest path is to add these files to an existing project that already has React/TypeScript/Tailwind configured.
- If you add scripts or tests to this repo, please document them in `CONTRIBUTING.md` and include how to run them.

## Contributing

When adding new components or modifying existing ones:

1. Maintain TypeScript interfaces for all props
2. Follow the established naming conventions
3. Ensure accessibility standards are met
4. Include proper error handling and validation
5. Update this README with usage examples

For repository-specific contribution guidelines and the full process for submitting issues and pull requests, see the CONTRIBUTING guide: [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License

Copyright (c) 2025 ALADETAN-IFE(IFECODES) - see [LICENSE](LICENSE) file for full details.

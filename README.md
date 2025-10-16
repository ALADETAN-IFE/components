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
  maxLength={500}/>
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

## 🚀 Quick Start

Follow these steps to get the project running locally.

```bash
# Clone repository
git clone https://github.com/ALADETAN-IFE/components.git
cd components

# Install project dependencies
npm install

# If you need icons, install react-icons (optional)
npm install react-icons

# If you have a cached submodule reference you want to remove (keeps working-tree files):
git rm --cached src/components

# Add styles: copy the contents of style.css into your app's index (or import it)
# (e.g., import './style.css' in your index.tsx / index.js)

# Run the development server
npm run dev
```

Notes:
- These components assume you already have a React + TypeScript + Tailwind setup in your app. If not, set those up first.
- Installing react-icons is optional and only required if you use icons from that package.

## Contributing

When adding new components or modifying existing ones:

1. Maintain TypeScript interfaces for all props
2. Follow the established naming conventions
3. Ensure accessibility standards are met
4. Include proper error handling and validation
5. Update this README with usage examples

## License

MIT License

Copyright (c) 2025 ALADETAN-IFE(IFECODES) - see [LICENSE](LICENSE) file for full details.
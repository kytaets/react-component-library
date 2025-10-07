# React Component Library - Front-end Test Assessment

## 🎯 Overview

This repository contains a small **React component library** implemented as part of a front-end test assessment.  
The library includes three reusable components with multiple states and props, fully documented and displayed in **Storybook**.

**Tech stack:**

- Next.js
- TypeScript
- TailwindCSS
- Font Awesome
- Framer Motion
- Storybook

---

## 🚀 Components

### 1. Input Component

A smart input field with multiple types, password visibility toggle, and clearable functionality.

**Features:**

- `type="text" | "password" | "number"`
- Password toggle with eye icon
- Clearable input with "X" button

**Storybook Variants:**

- Text input
- Password input (with toggle)
- Number input
- Clearable / non-clearable

**Screenshots:**

- Text Input:  
  ![Text Input](./docs/screenshots/input/input-text-no-value.png)
  ![Text Input](./docs/screenshots/input/input-text.png)

- Password Input (toggle):  
  ![Password Input](./docs/screenshots/input/input-password-no-value.png)
  ![Password Input](./docs/screenshots/input/input-password.png)

- Number Input:  
  ![Number Input](./docs/screenshots/input/input-number-no-value.png)
  ![Number Input](./docs/screenshots/input/input-number.png)

---

### 2. Toast Component

A notification component with sliding/fading animation and auto-dismiss functionality.

**Features:**

- Appears at the bottom-right corner
- Auto-dismiss after a configurable duration
- Optional manual close button
- Animations using **Framer Motion**

**Storybook Variants:**

- Info, Success, Warning, Error types
- Different durations
- Manual close

**Screenshots:**

- Info Toast:  
  ![Info Toast](./docs/screenshots/toast/toast-info.png)

- Success Toast:  
  ![Success Toast](./docs/screenshots/toast/toast-success.png)

- Error Toast:  
  ![Error Toast](./docs/screenshots/toast/toast-error.png)

- Warning Toast:  
  ![Toast Close](./docs/screenshots/toast/toast-warning.png)

---

### 3. Sidebar Menu Component

A collapsible, nested sidebar menu with sliding animation.

**Features:**

- Slides in from the right
- Nested submenus (1-level / 2-level)
- Closes when clicking outside
- Animations with **Framer Motion**

**Storybook Variants:**

- One-level menu
- Two-level nested menu
- Open / closed states

**Screenshots:**

- One-level menu:  
  ![One Level Menu](./docs/screenshots/sidebar/sidebar-one-level.png)

- Two-level menu:  
  ![Two Level Menu](./docs/screenshots/sidebar/sidebar-two-level.png)

---

## ⚙️ Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-component-library.git
cd react-component-library
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

### 4. Build & Run Next.js App (optional)

```bash
npm run dev
# or
yarn dev
```

---

### Development Notes

- All components are functional components using hooks

- Styled with TailwindCSS

- Icons from Font Awesome

- Animations handled with Framer Motion

- Storybook includes controls for interactive props editing

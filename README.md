# my-app (Expo Router)


https://github.com/user-attachments/assets/337d5f82-3509-4e23-ad5f-a84ee7df22ee


## Navigation summary
- **Home → Second**: from `app/index.tsx` pressing **Go to Second Screen** which navigates with:
  - `router.push('/second')`
- **Home → Third**: from `app/index.tsx` pressing **Go to Third Screen** which navigates with:
  - `router.push('/third')`
- **Home → Deeply nested screen**: from `app/index.tsx` pressing **Go to Deeply Nested Screen** which navigates into a deep path under nested route folders:
  - `router.push('/fifth/sixth')`

## How the parentheses route groups are used
In Expo Router, any folder wrapped in **parentheses** is a **route group**.

In this project you have a route group path like:
- `app/(anything)/...`

What that means:
- The `(anything)` folder **groups screens for organization** without necessarily adding an extra segment to the URL.
- Your deep screen route lives under:
  - `app/(anything)/(fourth)/fifth/sixth/index.tsx`

So the parentheses folders are used to **organize routes** while controlling how the URL path is constructed.

## What I learned

### Redirect navigation in layout files
- Layout files can be used to perform navigation logic before rendering screens.
- A layout can redirect users to another route using components such as `<Redirect />`.
- Redirects are useful for authentication flows, onboarding screens, and controlling access to routes.

### Order of execution of layout files
- Parent layouts execute before their child layouts.
- When navigating to a deeply nested route, Expo Router processes layouts from the top level down to the target screen.
- For a route such as:
  - `app/(anything)/(fourth)/fifth/sixth/index.tsx`
- The execution flow is generally:
  1. Root layout (`app/_layout.tsx`)
  2. Route group layouts (if present)
  3. Nested layouts
  4. Target screen component

This helped me understand how navigation and route protection can be handled at different levels of the application.

### Behavior when a layout file returns a component
- A layout is not limited to returning a `<Stack />`, `<Tabs />`, or `<Slot />`.
- If a layout returns a normal React component instead, that component is rendered in place of its children.
- Since the child routes are not rendered unless a `<Slot />` or navigator is included, returning a regular component can effectively block access to nested screens.
- This behavior can be useful for loading screens, authentication checks, maintenance screens, or custom route guards.

## Screens / files
- `app/index.tsx` — Home / entry screen with buttons
- `app/second.tsx` — Second screen
- `app/third.tsx` — Third screen
- `app/(anything)/(fourth)/fifth/sixth/index.tsx` — Deeply nested index screen

## Run
```bash
npm start

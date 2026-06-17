# my-app (Expo Router)

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

## Screens / files
- `app/index.tsx` — Home / entry screen with buttons
- `app/second.tsx` — Second screen
- `app/third.tsx` — Third screen
- `app/(anything)/(fourth)/fifth/sixth/index.tsx` — Deeply nested index screen

## Run
```bash
npm start
```
Then open the URL shown in the terminal (Expo DevTools) or run on an Android/iOS emulator.


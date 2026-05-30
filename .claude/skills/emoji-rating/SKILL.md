---
name: emoji-rating
description: Add an animated emoji rating input to a React project. A row of expressive emoji faces (1-5, from "terrible" to "amazing") that scale, bounce, and color-fill on hover/select using framer-motion. Use when the user wants an emoji rating, satisfaction/feedback widget, reaction rating, mood picker, or star-rating alternative in a React/Next.js + Tailwind app.
---

# Emoji Rating

An animated 1–5 emoji rating control for React, styled with Tailwind CSS and
animated with framer-motion. Inspired by the 21st.dev `emoji-rating` component
(clean-room reimplementation).

## When to use

Reach for this when a user asks for any of: "emoji rating", "feedback rating",
"satisfaction widget", "reaction picker", "mood selector", or wants a friendlier
alternative to a star rating.

## Requirements

The target project must be a React app (React 18+) with Tailwind CSS. The
component depends on `framer-motion`:

```bash
npm install framer-motion
```

(Next.js: add `"use client"` at the top of the file — already included below.)

## How to add it

1. Confirm the project has React + Tailwind. If `framer-motion` isn't a
   dependency, install it.
2. Copy `assets/emoji-rating.tsx` into the project's component directory
   (e.g. `src/components/ui/emoji-rating.tsx`). Use the `.jsx` variant in
   `assets/emoji-rating.jsx` for non-TypeScript projects.
3. Wire it up with the usage example below.
4. Adjust the `EMOJIS` array, colors, and sizes to match the project's design.

## Props

| Prop          | Type                      | Default | Description                                  |
|---------------|---------------------------|---------|----------------------------------------------|
| `value`       | `number`                  | —       | Controlled selected rating (1–5). Optional.  |
| `defaultValue`| `number`                  | `0`     | Initial rating for uncontrolled use.         |
| `onChange`    | `(rating: number) => void`| —       | Called when the user selects a rating.       |
| `size`        | `number`                  | `40`    | Emoji size in px.                            |
| `showLabel`   | `boolean`                 | `true`  | Show the text label under the emojis.        |
| `disabled`    | `boolean`                 | `false` | Disable interaction.                         |
| `className`   | `string`                  | `""`    | Extra classes on the wrapper.                |

## Usage

```tsx
import { useState } from "react";
import { EmojiRating } from "@/components/ui/emoji-rating";

export default function FeedbackCard() {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <h3 className="text-lg font-semibold">How was your experience?</h3>
      <EmojiRating value={rating} onChange={setRating} />
      {rating > 0 && (
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Submit ({rating}/5)
        </button>
      )}
    </div>
  );
}
```

## Customization notes

- **Different scale:** edit the `EMOJIS` array — order matters (index 0 = rating 1).
- **Brand colors:** change the `color` field per emoji; it's applied to the
  label and the active glow.
- **No labels:** pass `showLabel={false}`.
- **Read-only display:** pass `disabled` and a fixed `value`.

## Original

Distributed on 21st.dev by jatin-yadav05. The canonical install (on a machine
with network access) is:

```bash
npx shadcn@latest add "https://21st.dev/r/jatin-yadav05/emoji-rating"
```

The files in `assets/` are an independent reimplementation for offline use.

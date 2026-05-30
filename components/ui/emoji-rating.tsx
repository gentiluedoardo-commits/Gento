"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface EmojiOption {
  emoji: string;
  label: string;
  /** Accent color used for the label and active glow. */
  color: string;
}

/** Ordered low → high. Index 0 maps to rating 1. */
export const EMOJIS: EmojiOption[] = [
  { emoji: "😣", label: "Terrible", color: "#ef4444" },
  { emoji: "🙁", label: "Bad", color: "#f97316" },
  { emoji: "😐", label: "Okay", color: "#eab308" },
  { emoji: "🙂", label: "Good", color: "#84cc16" },
  { emoji: "😍", label: "Amazing", color: "#22c55e" },
];

export interface EmojiRatingProps {
  /** Controlled selected rating (1–5). */
  value?: number;
  /** Initial rating for uncontrolled use. */
  defaultValue?: number;
  onChange?: (rating: number) => void;
  /** Emoji size in px. */
  size?: number;
  showLabel?: boolean;
  disabled?: boolean;
  className?: string;
}

export function EmojiRating({
  value,
  defaultValue = 0,
  onChange,
  size = 40,
  showLabel = true,
  disabled = false,
  className = "",
}: EmojiRatingProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const selected = isControlled ? (value as number) : internal;
  const active = hovered ?? selected; // 1-based, 0 = none
  const activeOption = active > 0 ? EMOJIS[active - 1] : null;

  const select = (rating: number) => {
    if (disabled) return;
    if (!isControlled) setInternal(rating);
    onChange?.(rating);
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className="flex items-end gap-2"
        onMouseLeave={() => setHovered(null)}
        role="radiogroup"
        aria-label="Emoji rating"
      >
        {EMOJIS.map((option, i) => {
          const rating = i + 1;
          const isActive = rating === active;
          const isDimmed = active > 0 && !isActive;
          return (
            <motion.button
              key={option.label}
              type="button"
              role="radio"
              aria-checked={selected === rating}
              aria-label={`${rating} - ${option.label}`}
              disabled={disabled}
              onMouseEnter={() => !disabled && setHovered(rating)}
              onFocus={() => !disabled && setHovered(rating)}
              onClick={() => select(rating)}
              className="relative flex select-none items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              style={{
                fontSize: size,
                lineHeight: 1,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              animate={{
                scale: isActive ? 1.25 : isDimmed ? 0.9 : 1,
                y: isActive ? -4 : 0,
                opacity: isDimmed ? 0.4 : 1,
                filter: isDimmed ? "grayscale(70%)" : "grayscale(0%)",
              }}
              whileTap={disabled ? undefined : { scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isActive && (
                <motion.span
                  layoutId="emoji-rating-glow"
                  className="absolute inset-0 -z-10 rounded-full blur-md"
                  style={{ backgroundColor: option.color, opacity: 0.35 }}
                />
              )}
              <span aria-hidden>{option.emoji}</span>
            </motion.button>
          );
        })}
      </div>

      {showLabel && (
        <div className="h-5">
          <AnimatePresence mode="wait">
            {activeOption && (
              <motion.span
                key={activeOption.label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="text-sm font-medium"
                style={{ color: activeOption.color }}
              >
                {activeOption.label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default EmojiRating;

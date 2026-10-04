"use client";

import { useEffect, useMemo, useState } from "react";
import {
  allItemIds,
  DEFAULT_COMPLETED_IDS,
  roadmap,
  totalItems,
} from "@/data/roadmap";

const STORAGE_KEY = "minifightrl-progress-v1";
const defaultProgress = Object.fromEntries(
  DEFAULT_COMPLETED_IDS.map((id) => [id, true]),
) as Record<string, boolean>;

function readSavedProgress(): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;

    const saved: unknown = JSON.parse(raw);
    if (typeof saved !== "object" || saved === null || Array.isArray(saved)) {
      return defaultProgress;
    }

    const values = saved as Record<string, unknown>;
    return Object.fromEntries(
      allItemIds.map((id) => [id, typeof values[id] === "boolean" ? values[id] : Boolean(defaultProgress[id])]),
    );
  } catch {
    return defaultProgress;
  }
}

function writeSavedProgress(progress: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Keep the checklist usable if browser storage is unavailable.
  }
}

export default function Roadmap() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(defaultProgress);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    // Restore browser storage after SSR so saved progress cannot cause a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompleted(readSavedProgress());
    setRestored(true);
  }, []);

  useEffect(() => {
    if (restored) writeSavedProgress(completed);
  }, [completed, restored]);

  const completedCount = useMemo(
    () => allItemIds.reduce((count, id) => count + (completed[id] ? 1 : 0), 0),
    [completed],
  );
  const overallPercent = Math.round((completedCount / totalItems) * 100);

  function toggleItem(id: string) {
    const next = { ...completed, [id]: !completed[id] };
    setCompleted(next);
    writeSavedProgress(next);
  }

  return (
    <main className="mx-auto w-full max-w-[860px] px-5 pb-20 pt-12 sm:px-8 sm:pt-[76px]">
      <header className="mb-9 sm:mb-11">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clay">
          Learning roadmap
        </p>
        <h1 className="font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-ink sm:text-[46px]">
          MiniFightRL
        </h1>
        <p className="mt-3 text-[14px] leading-6 text-muted sm:text-[15px]">
          From PyTorch to Robot Reinforcement Learning
        </p>
      </header>

      <section
        aria-labelledby="overall-progress-title"
        className="mb-8 rounded-[18px] border border-line bg-surface px-5 py-5 sm:mb-10 sm:px-7 sm:py-6"
      >
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 id="overall-progress-title" className="text-[13px] font-medium text-muted">
              Overall progress
            </h2>
            <p className="mt-1.5 text-[21px] font-medium tracking-[-0.03em] text-ink">
              {completedCount} <span className="font-normal text-muted">/ {totalItems}</span>
              <span className="ml-2 text-[13px] font-normal tracking-normal text-muted">
                completed
              </span>
            </p>
          </div>
          <p className="pb-0.5 text-[22px] font-medium tracking-[-0.04em] text-clay">
            {overallPercent}%
          </p>
        </div>
        <div
          aria-label={`${overallPercent}% complete`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={overallPercent}
          className="h-[5px] overflow-hidden rounded-full bg-claySoft"
          role="progressbar"
        >
          <div
            className="h-full rounded-full bg-clay transition-[width] duration-200 ease-out"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </section>

      <section aria-label="Course route" className="space-y-4 sm:space-y-[18px]">
        {roadmap.map((part, partIndex) => {
          const partCompleted = part.items.reduce(
            (count, item) => count + (completed[item.id] ? 1 : 0),
            0,
          );
          const partPercent = Math.round((partCompleted / part.items.length) * 100);

          return (
            <section
              aria-labelledby={`${part.id}-title`}
              className="rounded-[18px] border border-line bg-surface px-5 py-5 sm:px-7 sm:py-6"
              key={part.id}
            >
              <header className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-clay">
                    Part {partIndex + 1}
                  </p>
                  <h2
                    className="text-[17px] font-medium leading-6 tracking-[-0.02em] text-ink sm:text-[18px]"
                    id={`${part.id}-title`}
                  >
                    {part.title}
                  </h2>
                </div>
                <p className="shrink-0 pt-[18px] text-[12px] tabular-nums text-muted">
                  <span className="font-medium text-ink">{partCompleted}</span> / {part.items.length}
                </p>
              </header>

              <div
                aria-label={`Part ${partIndex + 1}: ${partPercent}% complete`}
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={partPercent}
                className="mb-2.5 h-[3px] overflow-hidden rounded-full bg-paper"
                role="progressbar"
              >
                <div
                  className="h-full rounded-full bg-clay transition-[width] duration-200 ease-out"
                  style={{ width: `${partPercent}%` }}
                />
              </div>

              <ul className="divide-y divide-line/80">
                {part.items.map((item) => {
                  const isCompleted = Boolean(completed[item.id]);
                  return (
                    <li key={item.id}>
                      <label className="group flex min-h-[45px] cursor-pointer items-start gap-3 py-[12px]">
                        <input
                          aria-label={`${isCompleted ? "Mark incomplete" : "Mark complete"}: ${item.label}`}
                          checked={isCompleted}
                          className="lesson-checkbox sr-only"
                          onChange={() => toggleItem(item.id)}
                          type="checkbox"
                        />
                        <span
                          aria-hidden="true"
                          className="checkbox-ui mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#CFC4BB] bg-transparent transition-colors duration-200 group-hover:border-clay"
                        />
                        <span
                          className={`text-[13px] leading-[1.55] transition-colors duration-200 sm:text-[14px] ${
                            isCompleted ? "text-completed line-through" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </section>

      <footer className="pt-8 text-center text-[11px] tracking-wide text-muted/80">
        Progress is saved in this browser
      </footer>
    </main>
  );
}

"use client";
import { increment } from "@/lib/features/counter/counterSlice";
import { useAppStore } from "@/lib/hooks";
import { useRef } from "react";

export default function VerifyPage() {
  // set store data as described in...
  // https://redux.js.org/usage/nextjs#per-route-state
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(increment());
    initialized.current = true;
  }

  return (
    <>
      <h1>Verify page</h1>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
    </>
  );
}

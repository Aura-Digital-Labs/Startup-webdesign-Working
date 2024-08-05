import { Main } from "next/document";
import React from "react";
import { MainScreen } from "@/components/component/mainScreen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainScreen />
    </main>
  );
}

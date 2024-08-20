import { Main } from "next/document";
import React from "react";
import { MainScreen } from "@/components/component/mainScreen";
import { MainScreenLanding } from "@/components/main-screen-landing";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <MainScreen /> */}
      <MainScreenLanding /> 
    </main>
  );
}

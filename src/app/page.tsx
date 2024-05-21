'use client'
import Resume from "@/components/resume/resume";
import { useEffect, useState } from "react";
import Connect from "../components/connect/page";
import Home from "./home/home";

export default function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div
      className="cursor-blur"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
      <Home />
      <Resume />
      <Connect/>
    </main>
  );
}

"use client";

import { Board } from "../components/board/Board";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          <Board />
        </div>
      </div>
    </div>
  );
}

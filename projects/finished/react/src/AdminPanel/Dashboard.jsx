import React, { useState, useEffect, use } from "react";
import Navbar from "./components/ui/Navbar";
import Main from "./components/app/Main";
import ChartsOverview from "./components/app/ChartsOverview";
import Sidebar from "./components/ui/Sidebar";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [home, setHome] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [home]);

  const handleOpenHome = () => {
    setHome(true);
    setAnalytics(false);
  };
  const handleOpenAnalytics = () => {
    setHome(false);
    setAnalytics(true);
  };

  return (
    <div className="flex dark:bg-primary min-h-screen">
      {/* TODO: Create Side navigation */}
      <Sidebar
        handleOpenHome={handleOpenHome}
        handleOpenAnalytics={handleOpenAnalytics}
      />
      <div className="flex-1">
        {/* TODO: Top Navigation with dark mode toggle */}
        <Navbar />
        {/* TODO: Mai Card Component */}
        {home && <Main isLoading={isLoading} />}
        {/* TODO: Chart overview component */}
        {analytics && <ChartsOverview />}
      </div>
    </div>
  );
}

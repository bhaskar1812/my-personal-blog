import React from "react";

type LayoutProps = { children: React.ReactNode };
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      {children}
      <footer className="text-center text-gray-500 text-sm mt-20 pb-10">
        © {new Date().getFullYear()} Bhaskar Bollampalli. All Rights Reserved.
      </footer>
    </div>
  );
}

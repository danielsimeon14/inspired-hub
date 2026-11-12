import React from "react";

export default function GridEffectBackground() {
  return (
    <div className="relative w-full min-h-[400px] bg-[#f8f7f3] overflow-hidden rounded-xl shadow-[inset_-40px_40px_60px_-40px_rgba(0,0,0,0.03)]">
      {/* 1. The Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
          bg-[size:40px_40px]"
      />

      {/* 2. The Soft Bottom Shadow / Glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none
          bg-gradient-to-t from-black/5 via-purple-500/5 to-transparent 
          blur-[3px]"
      />

      {/* 3. The Colored Bottom Border Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[3px] pointer-events-none
          bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.08)_60%,rgba(168,85,247,0.3)_85%,rgba(244,114,182,0.3)_100%)]"
      />

      {/* Content Container */}
      {/* <div className="relative z-10 w-full h-full p-6">{children}</div> */}
    </div>
  );
}

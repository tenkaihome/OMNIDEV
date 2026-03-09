"use client";

import React, { useState } from "react";
import { Coffee, TerminalSquare, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateUrl = "https://buymeacoffee.com/0xejebduoo";

  return (
    <>
      <header className="h-20 bg-[#0a0000] border-b border-[#ff2a2a]/30 flex items-center justify-between px-6 md:px-12 z-50 w-full relative">
        {/* Glitch logo container */}
        <div className="flex items-center gap-4 group cursor-pointer select-none relative overflow-hidden">
          <div className="bg-[#1a0000] border-2 border-[#ff2a2a] p-2 hover:bg-[#ff2a2a]/20 transition-all duration-300 relative">
            <TerminalSquare className="w-6 h-6 text-[#ff2a2a]" />
            {/* Glitch lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#ff2a2a] animate-pulse opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#ff2a2a] animate-pulse opacity-50"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-[0.2em] relative inline-block">
              OMNI<span className="text-[#ff2a2a] drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]">DEV</span>
            </span>
            <span className="text-[9px] text-[#ff2a2a]/70 font-mono font-bold uppercase tracking-[0.4em] mt-0.5 ml-0.5">
              TERMINAL // V1.0
            </span>
          </div>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-transparent border border-[#ff2a2a]/50 hover:bg-[#ff2a2a]/10 text-[#ff2a2a] font-mono font-bold py-2.5 px-6 rounded-none transition-all duration-300 shadow-[inset_0_0_15px_rgba(255,42,42,0.1)] hover:shadow-[0_0_20px_rgba(255,42,42,0.4),inset_0_0_15px_rgba(255,42,42,0.3)] hover:text-white group"
          >
            <Coffee className="w-4 h-4 text-[#ff2a2a] group-hover:text-white transition-colors" />
            <span className="hidden sm:inline">INITIALIZE FUNDING</span>
            <span className="inline sm:hidden">FUND</span>
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] backdrop-blur-sm p-4 font-mono">
          <div className="bg-[#050000] border border-[#ff2a2a] p-1 shadow-[0_0_40px_rgba(255,42,42,0.3)] w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative">
            
            {/* Corner accoutrements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff2a2a]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff2a2a]"></div>
            
            <div className="border border-[#ff2a2a]/20 bg-[#0a0000] flex flex-col items-center">
              
              <div className="w-full flex items-center justify-between p-4 border-b border-[#ff2a2a]/30 bg-[#ff2a2a]/5">
                <h3 className="text-lg font-bold text-white tracking-widest flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-[#ff2a2a]" />
                  SYS.FUNDING
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#ff2a2a] hover:text-white transition-colors p-1 border border-transparent hover:border-[#ff2a2a]/50 hover:bg-[#ff2a2a]/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 flex flex-col items-center space-y-6 w-full">
                <p className="text-[#ff2a2a]/80 text-center font-medium leading-relaxed text-xs tracking-widest uppercase">
                  Execute transfer to keep OmniDev mainframe active.
                </p>
                
                <div className="bg-white p-3 border-4 border-[#ff2a2a] shadow-[0_0_20px_rgba(255,42,42,0.5)]">
                  <QRCodeSVG value={donateUrl} size={160} fgColor="#000000" />
                </div>
                
                <div className="w-full pt-4">
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#ff2a2a] hover:bg-[#ff4040] text-black font-black text-sm tracking-[0.2em] py-4 px-6 transition-all shadow-[0_0_15px_rgba(255,42,42,0.6)] hover:shadow-[0_0_25px_rgba(255,42,42,0.8)] uppercase border-2 border-transparent hover:border-black"
                  >
                    Transmit Credits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

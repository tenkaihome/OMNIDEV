"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

// Tool components
import JsonPrettify from "@/components/tools/JsonPrettify";
import JsonMinify from "@/components/tools/JsonMinify";
import RandomPort from "@/components/tools/RandomPort";
import RegexTester from "@/components/tools/RegexTester";
import NotImplemented from "@/components/tools/NotImplemented";
import ChmodCalculator from "@/components/tools/ChmodCalculator";
import JsonToCsv from "@/components/tools/JsonToCsv";
import SqlPrettify from "@/components/tools/SqlPrettify";
import YamlPrettify from "@/components/tools/YamlPrettify";
import XmlFormatter from "@/components/tools/XmlFormatter";
import EmailNormalizer from "@/components/tools/EmailNormalizer";
import CrontabGenerator from "@/components/tools/CrontabGenerator";
import DockerRunToCompose from "@/components/tools/DockerRunToCompose";
import GitCheatsheet from "@/components/tools/GitCheatsheet";
import RegexCheatsheet from "@/components/tools/RegexCheatsheet";

import { 
  GitBranch, Server, Clock, Braces, List, Database, 
  FileText, Box, CodeXml, AlignLeft, Mail, WholeWord,
  FileCode2, Terminal
} from "lucide-react";

export const toolsList = [
  { id: "json-prettify", name: "JSON PRETTIFY", icon: <Braces className="w-4 h-4" /> },
  { id: "json-minify", name: "JSON MINIFY", icon: <Braces className="w-4 h-4" /> },
  { id: "json-csv", name: "JSON TO CSV", icon: <List className="w-4 h-4" /> },
  { id: "sql-prettify", name: "SQL FORMAT", icon: <Database className="w-4 h-4" /> },
  { id: "xml-formatter", name: "XML FORMAT", icon: <CodeXml className="w-4 h-4" /> },
  { id: "yaml-prettify", name: "YAML FORMAT", icon: <AlignLeft className="w-4 h-4" /> },
  { id: "regex-tester", name: "REGEX TEST", icon: <WholeWord className="w-4 h-4" /> },
  { id: "regex-cheatsheet", name: "REGEX SHEET", icon: <FileCode2 className="w-4 h-4" /> },
  { id: "random-port", name: "PORT GEN", icon: <Server className="w-4 h-4" /> },
  { id: "crontab", name: "CRONTAB", icon: <Clock className="w-4 h-4" /> },
  { id: "chmod", name: "CHMOD", icon: <FileText className="w-4 h-4" /> },
  { id: "docker-run-compose", name: "DOCKER CMPS", icon: <Box className="w-4 h-4" /> },
  { id: "email-normalizer", name: "EMAIL NORM", icon: <Mail className="w-4 h-4" /> },
  { id: "git-cheatsheet", name: "GIT SHEET", icon: <GitBranch className="w-4 h-4" /> },
];

export default function Home() {
  const [activeToolId, setActiveToolId] = useState("json-prettify");

  const renderTool = () => {
    switch (activeToolId) {
      case "json-prettify": return <JsonPrettify />;
      case "json-minify": return <JsonMinify />;
      case "random-port": return <RandomPort />;
      case "regex-tester": return <RegexTester />;
      case "chmod": return <ChmodCalculator />;
      case "json-csv": return <JsonToCsv />;
      case "sql-prettify": return <SqlPrettify />;
      case "yaml-prettify": return <YamlPrettify />;
      case "xml-formatter": return <XmlFormatter />;
      case "email-normalizer": return <EmailNormalizer />;
      case "crontab": return <CrontabGenerator />;
      case "docker-run-compose": return <DockerRunToCompose />;
      case "git-cheatsheet": return <GitCheatsheet />;
      case "regex-cheatsheet": return <RegexCheatsheet />;
      default: return <NotImplemented />;
    }
  };

  const activeToolProps = toolsList.find(t => t.id === activeToolId);

  return (
    <div className="flex flex-col min-h-screen bg-[#030005] text-[#ff2a2a] font-mono selection:bg-[#ff2a2a]/30 relative overflow-hidden">
      
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,42,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,42,42,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] pointer-events-none opacity-40"></div>
      
      <Header />
      
      <main className="flex-1 w-full max-w-screen-2xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 z-10">
        
        {/* Main Interface Canvas (Left, Large) */}
        <section className="flex-1 flex flex-col order-2 lg:order-1 relative">
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff2a2a] opacity-80 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff2a2a] opacity-80 z-20 pointer-events-none"></div>
          
          <div className="bg-[#0a0000]/80 backdrop-blur-md border border-[#ff2a2a]/30 shadow-[0_0_30px_rgba(255,42,42,0.1)] flex flex-col h-[calc(100vh-10rem)] overflow-hidden relative">
            
            {/* Header of Content */}
            <div className="bg-[#ff2a2a]/10 border-b border-[#ff2a2a]/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="text-[#ff2a2a] animate-pulse w-5 h-5" />
                <h2 className="text-xl font-bold tracking-widest uppercase">
                  ACTIVE_MODULE: <span className="text-white">{activeToolProps?.name}</span>
                </h2>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-[#ff2a2a]/50 rounded-full"></div>
                <div className="w-3 h-3 bg-[#ff2a2a]/50 rounded-full"></div>
                <div className="w-3 h-3 bg-[#ff2a2a]/50 rounded-full"></div>
              </div>
            </div>

            <div className="p-4 sm:p-6 flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative min-w-0 flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none transform scale-150 z-0">
                {activeToolProps?.icon}
              </div>
              <div className="relative z-10 flex-1 w-full min-w-0 flex flex-col">
                {renderTool()}
              </div>
            </div>
            
            <div className="h-6 bg-[#ff2a2a]/10 border-t border-[#ff2a2a]/30 flex items-center px-4">
              <span className="text-[10px] uppercase tracking-widest text-[#ff2a2a]/70">STATUS: ONLINE | SYSTEM: OPTIMAL</span>
            </div>
          </div>
        </section>

        {/* Right Nav Rail */}
        <aside className="w-full lg:w-[280px] order-1 lg:order-2 flex flex-col h-[60vh] lg:h-[calc(100vh-10rem)] min-w-0 shrink-0">
          <div className="bg-[#120000] border border-[#ff2a2a]/30 p-4 shadow-[0_0_20px_rgba(255,42,42,0.15)] flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
             <div className="px-3 pb-4 mb-4 border-b border-[#ff2a2a]/20">
                <h3 className="text-sm tracking-[0.3em] font-bold text-white/80">MODULES</h3>
             </div>
             
             <div className="flex flex-col gap-1.5">
               {toolsList.map(tool => (
                 <button
                   key={tool.id}
                   onClick={() => setActiveToolId(tool.id)}
                   className={`flex items-center gap-4 px-4 py-3 border-l-2 transition-all duration-200 group relative ${
                     activeToolId === tool.id 
                       ? "bg-[#ff2a2a]/10 border-[#ff2a2a] text-white shadow-[inset_4px_0_10px_rgba(255,42,42,0.2)]" 
                       : "border-transparent text-[#ff2a2a]/70 hover:bg-[#ff2a2a]/5 hover:text-[#ff2a2a] hover:border-[#ff2a2a]/50"
                   }`}
                 >
                   {/* Scanline hover effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-[#ff2a2a]/10 to-transparent w-0 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                   
                   <span className={activeToolId === tool.id ? "animate-pulse" : ""}>
                      {tool.icon}
                   </span>
                   <span className="text-sm font-bold tracking-wider">{tool.name}</span>
                 </button>
               ))}
             </div>
          </div>
        </aside>
        
      </main>
    </div>
  );
}

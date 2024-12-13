"use client";

import { useState } from "react";
import { FileUpload } from "@/components/FileUpload";
import { QADisplay } from "@/components/QADisplay";
import { QAData } from "@/types/qa";
import { Bot } from "lucide-react";

export default function Home() {
  const [qaData, setQaData] = useState<QAData>([]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Bot className="w-12 h-12 text-primary" />
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            MultiM-RAG
          </h1>
        </div>
        
        {qaData.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <FileUpload onFileUpload={setQaData} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <QADisplay data={qaData} />
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setQaData([])}
                className="px-6 py-3 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors duration-200 font-medium"
              >
                Upload Another File
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
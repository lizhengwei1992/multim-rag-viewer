"use client";

import { UploadCloud, AlertCircle } from "lucide-react";
import { useCallback, useState } from "react";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileUpload: (data: any) => void;
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateAndParseJSON = (content: string) => {
    try {
      const jsonData = JSON.parse(content);
      if (!Array.isArray(jsonData)) {
        throw new Error("Uploaded file must contain an array of Q&A items");
      }
      if (jsonData.length === 0) {
        throw new Error("The Q&A array cannot be empty");
      }
      jsonData.forEach((item, index) => {
        if (!item.query || !item.answer) {
          throw new Error(`Item at index ${index} is missing required fields (query or answer)`);
        }
      });
      return jsonData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Invalid JSON format: ${error.message}`);
      }
      throw new Error("Invalid JSON format");
    }
  };

  const processFile = useCallback(
    (file: File) => {
      setError(null);
      
      if (file.type !== "application/json") {
        setError("Please upload a JSON file");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const jsonData = validateAndParseJSON(content);
          onFileUpload(jsonData);
          toast({
            title: "Success",
            description: "File uploaded successfully",
          });
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("An unexpected error occurred");
          }
        }
      };

      reader.onerror = () => {
        setError("Error reading file");
      };

      reader.readAsText(file);
    },
    [onFileUpload, toast]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile]
  );

  return (
    <div className="space-y-4">
      <Card
        className={`border-2 p-12 text-center cursor-pointer transition-all duration-200 ${
          isDragging 
            ? "border-primary bg-primary/5 scale-[1.02]" 
            : "border-dashed hover:border-primary/50 hover:bg-secondary/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".json,application/json"
          onChange={handleFileSelect}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <UploadCloud 
            className={`w-16 h-16 mx-auto mb-6 transition-colors duration-200 ${
              isDragging ? "text-primary" : "text-muted-foreground"
            }`} 
          />
          <p className="text-xl font-medium mb-2">
            {isDragging ? "Drop your file here" : "Drag and drop your JSON file here"}
          </p>
          <p className="text-sm text-muted-foreground">
            or click to browse
          </p>
        </label>
      </Card>

      {error && (
        <Alert variant="destructive" className="animate-in fade-in-50">
          <AlertCircle className="h-4 w-4" />
          <span className="ml-2">{error}</span>
        </Alert>
      )}
    </div>
  );
}
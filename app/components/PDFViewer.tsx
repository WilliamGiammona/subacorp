"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NavBar from "@/app/components/ui/navigation/NavBar";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Download, Loader2 } from "lucide-react";

const PDFViewer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  // Get the PDF file path from the URL query parameter
  const pdfPath = searchParams.get("path");
  const title = searchParams.get("title") || "Document";

  useEffect(() => {
    // Set loading to false after a small delay to ensure the iframe has time to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle going back
  const handleBack = () => {
    router.back();
  };

  // Function to download the PDF
  const handleDownload = () => {
    if (!pdfPath) return;

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = title + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!pdfPath) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <main className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Error: No Document Specified
          </h1>
          <Button onClick={handleBack}>Go Back</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <div className="bg-white dark:bg-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <Button variant="outline" onClick={handleDownload} className="ml-4">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
              <Loader2 className="h-8 w-8 animate-spin mr-3 text-primary" />
              <span className="text-lg">Loading document...</span>
            </div>
          </div>
        )}

        <div
          className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex-grow"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <iframe
            src={`${pdfPath}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
          />
        </div>
      </main>
    </div>
  );
};

export default PDFViewer;

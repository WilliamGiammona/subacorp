"use client";

import NavBar from "@/app/components/ui/navigation/NavBar";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Legal = () => {
  const router = useRouter();
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Detect if the device is Android
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));
  }, []);

  const handleViewPDF = (path: string, title: string) => {
    if (isAndroid) {
      // For Android, navigate to the PDF viewer page
      router.push(
        `/pdf-viewer?path=${encodeURIComponent(
          path
        )}&title=${encodeURIComponent(title)}`
      );
    } else {
      // For other devices, open in a new tab (original behavior)
      window.open(path, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <main className="flex items-center justify-center min-h-[calc(50vh)]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold md:mb-12 text-foreground text-center underline decoration-2 underline-offset-8">
            SUBA CORPORATION LEGAL DOCUMENTS
          </h1>

          <div className="flex flex-col md:flex-row justify-center">
            {/* Privacy Policy */}
            <Card className="border-none mx-12">
              <CardHeader>{/* Header content */}</CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <div className="text-center">
                    {isAndroid ? (
                      <button
                        onClick={() =>
                          handleViewPDF(
                            "/legal/SUBA-Privacy-Policy.pdf",
                            "Privacy Policy"
                          )
                        }
                        className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
                      >
                        View Privacy Policy
                      </button>
                    ) : (
                      <a
                        href="/legal/SUBA-Privacy-Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
                      >
                        View Privacy Policy
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-none mx-12">
              <CardHeader>{/* Header content */}</CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <div className="text-center">
                    {isAndroid ? (
                      <button
                        onClick={() =>
                          handleViewPDF("/legal/SUBA-TOU.pdf", "Terms of Use")
                        }
                        className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
                      >
                        View Terms of Use
                      </button>
                    ) : (
                      <a
                        href="/legal/SUBA-TOU.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
                      >
                        View Terms of Use
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Legal;

import NavBar from "@/app/components/ui/navigation/NavBar";
import { Card, CardContent } from "@/app/components/ui/card";

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <main className=" ">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-foreground text-center underline decoration-2 underline-offset-8">
            SUBA CORPORATION LEGAL DOCUMENTS
          </h1>

          <div className="space-y-8">
            {/* Privacy Policy PDF */}
            <Card className="border-none">
              <CardContent className="text-center">
                <a
                  href="/legal/SUBA-Privacy-Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:bg-primary/90"
                >
                  View Privacy Policy
                </a>
              </CardContent>
            </Card>

            {/* Terms of Use PDF */}
            <Card className="border-none">
              <CardContent className="text-center">
                <a
                  href="/legal/SUBA-TOU.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:bg-primary/90"
                >
                  View Terms Of Use
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Legal;

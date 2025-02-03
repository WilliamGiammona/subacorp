import NavBar from "@/app/components/ui/navigation/NavBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-foreground text-center underline decoration-2 underline-offset-8">
            SUBA CORPORATION LEGAL DOCUMENTS
          </h1>

          <div className="space-y-8">
            {/* Privacy Policy */}
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-center">PRIVACY POLICY</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  {/* Desktop view */}
                  <div className="hidden lg:block">
                    <div className="relative w-full rounded-md overflow-hidden h-[800px]">
                      <iframe
                        src="/legal/SUBA-Privacy-Policy.pdf"
                        className="absolute top-0 left-0 w-full h-full"
                        title="Privacy Policy"
                      />
                    </div>
                  </div>
                  {/* Mobile view */}
                  <div className="lg:hidden text-center">
                    <a
                      href="/legal/SUBA-Privacy-Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90"
                    >
                      View Privacy Policy
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-center">TERMS OF USE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  {/* Desktop view */}
                  <div className="hidden lg:block">
                    <div className="relative w-full rounded-md overflow-hidden h-[800px]">
                      <iframe
                        src="/legal/SUBA-TOU.pdf"
                        className="absolute top-0 left-0 w-full h-full"
                        title="Terms of Use"
                      />
                    </div>
                  </div>
                  {/* Mobile view */}
                  <div className="lg:hidden text-center">
                    <a
                      href="/legal/SUBA-TOU.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90"
                    >
                      View Terms of Use
                    </a>
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

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
            {/* Privacy Policy PDF */}
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-center">PRIVACY POLICY</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <object
                    data="/legal/SUBA-Privacy-Policy.pdf"
                    type="application/pdf"
                    className="w-full h-screen"
                  >
                    <p>
                      PDF cannot be displayed.{" "}
                      <a href="/legal/SUBA-Privacy-Policy.pdf">
                        Download instead
                      </a>
                    </p>
                  </object>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Use PDF */}
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-center">TERMS OF USE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <object
                    data="/legal/SUBA-TOU.pdf"
                    type="application/pdf"
                    className="w-full h-screen"
                  >
                    <p>
                      PDF cannot be displayed.{" "}
                      <a href="/legal/SUBA-TOU.pdf">Download instead</a>
                    </p>
                  </object>
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

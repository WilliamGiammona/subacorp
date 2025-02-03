import NavBar from "@/app/components/ui/navigation/NavBar";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <main className="flex items-center justify-center min-h-[calc(50vh)] ">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold  md:mb-12 text-foreground text-center underline decoration-2 underline-offset-8">
            SUBA CORPORATION LEGAL DOCUMENTS
          </h1>

          <div className="flex flex-col md:flex-row justify-center">
            {/* Privacy Policy */}
            <Card className="border-none mx-12">
              <CardHeader>
                {/* <CardTitle className="text-center underline decoration-2 underline-offset-8 text-6xl">
                  PRIVACY POLICY
                </CardTitle> */}
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <div className=" text-center">
                    <a
                      href="/legal/SUBA-Privacy-Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
                    >
                      View Privacy Policy
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-none mx-12">
              <CardHeader>
                {/* <CardTitle className="text-center underline decoration-2 underline-offset-8 text-6xl">
                  TERMS OF USE
                </CardTitle> */}
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-4xl mx-auto">
                  <div className=" text-center">
                    <a
                      href="/legal/SUBA-TOU.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-black dark:text-white rounded-md hover:opacity-50 text-3xl"
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

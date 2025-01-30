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
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">
          Legal Documents
        </h1>

        <div className="space-y-8">
          {/* Privacy Policy PDF */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="relative w-full rounded-md border border-border"
                style={{ paddingTop: "100%" }}
              >
                <iframe
                  src="/legal/SUBA-Privacy-Policy.pdf"
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  title="Privacy Policy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Terms of Use PDF */}
          <Card>
            <CardHeader>
              <CardTitle>Terms of Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="relative w-full rounded-md border border-border"
                style={{ paddingTop: "100%" }}
              >
                <iframe
                  src="/legal/SUBA-TOU.pdf"
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  title="Terms of Use"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Legal;

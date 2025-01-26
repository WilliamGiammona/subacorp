import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Building2,
  LineChart,
  BadgeDollarSign,
  Key,
  Users2,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Property Management",
      description:
        "Comprehensive property maintenance and operations management",
      icon: Building2,
      highlights: [
        "Preventive Maintenance",
        "Safety Compliance",
        "Vendor Management",
      ],
    },

    {
      title: "Leasing Services",
      description:
        "Full-service leasing solutions for both property owners and prospective tenants",
      icon: Key,
      highlights: [
        "Tenant Representation",
        "Lease Negotiation",
        "Space Planning",
      ],
    },

    {
      title: "Tenant Relations",
      description:
        "Dedicated support ensuring tenant satisfaction and retention",
      icon: Users2,
      highlights: ["Tenant Support", "Lease Administration", "Communication"],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive commercial real estate solutions tailored to your
            business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

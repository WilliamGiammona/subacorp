"use client";

import NavBar from "@/app/components/ui/navigation/NavBar";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Phone</h2>
            </div>
            <p className="text-muted-foreground">(858) 481-7466</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <p className="text-muted-foreground">contact@subacorp.com</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Hours</h2>
            </div>
            <p className="text-muted-foreground">
              Mon, Wed, Fri: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
                  ></textarea>
                </div>
                <Button className="w-full ">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Visit our office</h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-muted-foreground">
                    731 South Hwy 101, Suite 2D
                  </p>
                  <p className="text-muted-foreground">
                    Solana Beach, CA 92075
                  </p>
                </div>
              </div>
              <div className="aspect-video w-full rounded-lg ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5713008346766!2d-117.27257572334168!3d32.98219266420057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0ed576cac1cf%3A0xca1ed89e0b48ccc0!2sMercado%20del%20Sol%20Shopping%20Center!5e0!3m2!1sen!2sus!4v1705997144599!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

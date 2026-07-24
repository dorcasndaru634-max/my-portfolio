import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Have a project in mind or want to work together? Feel free to reach out.
        </p>

        <div className="space-y-6 text-lg max-w-md mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <Mail size={24} className="text-teal-600" />
            <p>
              <strong>Email:</strong> dorcasndaru634@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Phone size={24} className="text-teal-600" />
            <p>
              <strong>Phone:</strong> +254 797721600
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <MapPin size={24} className="text-teal-600" />
            <p>
              <strong>Location:</strong> Kenya
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
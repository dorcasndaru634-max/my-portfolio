import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/contact/")
      .then((response) => response.json())
      .then((data) => {
        setContactData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch("http://localhost:8000/api/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("Failed to send message. Please try again.");
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!contactData) {
    return <div className="text-center py-20">No data available</div>;
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {contactData.title}
            </h2>

            <p className="text-gray-600 mb-10">
              {contactData.description}
            </p>

            <div className="space-y-6 text-lg max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Mail size={24} className="text-teal-600" />
                <p>
                  <strong>Email:</strong> {contactData.email}
                </p>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Phone size={24} className="text-teal-600" />
                <p>
                  <strong>Phone:</strong> {contactData.phone}
                </p>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <MapPin size={24} className="text-teal-600" />
                <p>
                  <strong>Location:</strong> {contactData.location}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>

              {formStatus && (
                <p
                  className={`text-center ${
                    formStatus.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
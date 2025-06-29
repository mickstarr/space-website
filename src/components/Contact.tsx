import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Agricultural Monitoring',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to a server
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: 'Agricultural Monitoring',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Our Team</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Have questions about our satellite imagery systems or want to schedule a consultation? Reach out to our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Interest*
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="Agricultural Monitoring">Agricultural Monitoring</option>
                    <option value="Forestry Management">Forestry Management</option>
                    <option value="Water Resource Management">Water Resource Management</option>
                    <option value="Disaster Response">Disaster Response</option>
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">contact@earthvision.tech</p>
                    <p className="text-gray-300">support@earthvision.tech</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Office Location</h4>
                    <p className="text-gray-300">123 Satellite Drive</p>
                    <p className="text-gray-300">Mountain View, CA 94043</p>
                    <p className="text-gray-300">United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              <p className="text-gray-300 mb-6">
                Speak directly with our technical experts to discuss your specific satellite imagery requirements.
              </p>
              <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
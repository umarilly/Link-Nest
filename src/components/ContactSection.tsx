
import { useState } from 'react';
import AnimatedText from './AnimatedText';
import GlassMorphicCard from './GlassMorphicCard';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle the form submission
    // with a backend service or API
    
    setFormState({ ...formState, isSubmitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        ...formState,
        isSubmitting: false,
        isSubmitted: true,
        name: '',
        email: '',
        message: ''
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@yourname.dev',
      href: 'mailto:contact@yourname.dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];
  
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <AnimatedText 
            text="Get In Touch"
            className="section-heading"
          />
          <AnimatedText 
            text="Have a question or want to work together? Feel free to reach out!"
            className="section-subheading"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <GlassMorphicCard delay={300}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  Schedule a Call
                </h4>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book a Meeting
                </a>
              </div>
            </GlassMorphicCard>
          </div>
          
          <div className="lg:col-span-3">
            <GlassMorphicCard delay={500}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              {formState.isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                  <p className="text-green-700 dark:text-green-400 text-center">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                      placeholder="Your name"
                      disabled={formState.isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                      disabled={formState.isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    disabled={formState.isSubmitting}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className={cn(
                      "w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all",
                      formState.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    )}
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </GlassMorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "54852e3f-1fb3-4685-8db8-e42ac0819e0a", // Real key for Imthiyas
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after a few seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12 lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-primary-500">Connect</span></h2>
            <p className="text-foreground/70 mb-10 text-lg">
              Whether you're looking for a software engineer, digital marketing consultant, or a creative director for your next project—I'm ready to collaborate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/50 mb-1">Email</h4>
                  <a href="mailto:imthiyasibnuibrahim@gmail.com" className="text-lg font-medium hover:text-primary-400 transition-colors break-all">
                    imthiyasibnuibrahim@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/50 mb-1">Phone</h4>
                  <a href="tel:+917558089875" className="text-lg font-medium hover:text-accent transition-colors">
                    +91 75580 89875
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/50 mb-1">Location</h4>
                  <p className="text-lg font-medium">
                    Kottakkal, Malappuram
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12 lg:w-2/3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              {/* Form decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full bg-background/50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/20'} rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full bg-background/50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/20'} rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all`}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full bg-background/50 border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/20'} rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Software Engineering Collaboration"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full bg-background/50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/20'} rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-emerald-400 text-sm mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    Oops! Something went wrong. Please check your connection or try again later.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

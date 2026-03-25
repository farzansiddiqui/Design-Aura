import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiFacebook, SiInstagram, SiPinterest, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);

    // Construct WhatsApp message
    const whatsappNumber = "919643665648";
    const text = `New Inquiry from ${data.name}
-----------------------------
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Project Type: ${data.projectType}
Budget: ${data.budget || 'N/A'}
Message: ${data.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting you to send your inquiry via WhatsApp.",
    });

    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-12" data-testid="section-contact-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
              Let's Start Your Project
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your space? Contact us for a free consultation
              and let's discuss your vision.
            </p>
          </div>
        </section>

        <section className="pb-20" id="contact-form" data-testid="section-contact-form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-8 space-y-6">
                  <h3 className="font-serif text-xl">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Visit Our Studio</p>
                        <p className="text-muted-foreground text-sm">
                          Om Chambers, 648/A, 4th floor,<br />
                          Binnamangla 1st Stage, Indiranagar, Bangalore 560038
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-muted-foreground text-sm">+91-9643665648</p>
                        <p className="text-muted-foreground text-sm">+91-7088188901</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <SiWhatsapp className="h-5 w-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a
                          href="https://wa.me/919643665648"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          Message us on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-muted-foreground text-sm">hello@homeprojectstudio.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Tue - Sun: 10:30 AM - 7:00 PM<br />

                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-4">
                  <h3 className="font-serif text-xl">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline" asChild data-testid="link-contact-whatsapp">
                      <a href="https://wa.me/919643665648" target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild data-testid="link-contact-facebook">
                      <a href="https://www.facebook.com/profile.php?id=61583653915873" target="_blank" rel="noopener noreferrer">
                        <SiFacebook className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild data-testid="link-contact-instagram">
                      <a href="https://www.instagram.com/thehomeprojectstudio?igsh=cTA3YWg0NHYxNWc5" target="_blank" rel="noopener noreferrer">
                        <SiInstagram className="h-5 w-5" />
                      </a>
                    </Button>
                    {/* <Button size="icon" variant="outline" data-testid="link-contact-pinterest">
                        <SiPinterest className="h-5 w-5" />
                      </Button> */}
                    <Button size="icon" variant="outline" asChild data-testid="link-contact-linkedin">
                      <a href="https://www.linkedin.com/company/112417567/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </Card>

                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8259200000807!2d77.6403575!3d12.982983500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1745d457345b%3A0xb966b074f9f8ef2a!2sOm%20Chambers!5e0!3m2!1sen!2sin!4v1771754751593!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              <Card className="lg:col-span-3 p-8">
                <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="9876543210"
                                type="tel"
                                {...field}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/\D/g, "");
                                  field.onChange(value.slice(0, 10));
                                }}
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-project-type">
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="residential">Residential Design</SelectItem>
                                <SelectItem value="commercial">Architectural Construction</SelectItem>
                                <SelectItem value="modular">Modular Interiors</SelectItem>
                                <SelectItem value="renovation">Luxury Renovation</SelectItem>
                                <SelectItem value="consultation">Design Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-budget">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-2l">Under ₹2 Lakh</SelectItem>
                              <SelectItem value="2l-5l">₹2 Lakh - ₹5 Lakh</SelectItem>
                              <SelectItem value="5l-10l">₹5 Lakh - ₹10 Lakh</SelectItem>
                              <SelectItem value="10l-15l">₹10 Lakh - ₹15 Lakh</SelectItem>
                              <SelectItem value="over-15l">Over ₹15 Lakh</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, timeline, and any specific requirements..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full gap-2" data-testid="button-contact-submit">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

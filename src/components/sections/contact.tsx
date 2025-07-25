import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter, Globe, Send } from 'lucide-react';
import { user,contactinfo } from "@/lib/data"; // Assuming user data is exported from data.js

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-headline mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
                </p>
                <div className=" flex md:flex gap-6">
                    <a href={`mailto:${contactinfo.email}`} className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-primary" />
                        {/* <span className="text-lg group-hover:underline">{contactinfo.email}</span> */}
                    </a>
                    <a href={contactinfo.twitter} className="flex items-center gap-4 group">
                        <Twitter className="h-6 w-6 text-primary" />
                        {/* <span className="text-lg group-hover:underline">{contactinfo.twitter}</span> */}
                    </a>
                     <a href={contactinfo.linkedin} className="flex items-center gap-4 group">
                        <Linkedin className="h-6 w-6 text-primary" />
                        {/* <span className="text-lg group-hover:underline">{contactinfo.linkedin}</span> */}
                    </a>
                     <a href={contactinfo.website} className="flex items-center gap-4 group">
                        <Globe className="h-6 w-6 text-primary" />
                        {/* <span className="text-lg group-hover:underline">{contactinfo.website}</span> */}
                    </a>
                </div>
            </div>
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full">
                    <Send className="mr-2"/>
                    Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

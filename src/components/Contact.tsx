"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GithubIcon from "@/components/icons/GithubIcon";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { CONTACT_INFO, FORMSPREE_ENDPOINT } from "@/lib/constants";

const contactItems = [
  { icon: <Mail size={20} />, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: <Phone size={20} />, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: <MapPin size={20} />, label: "Location", value: CONTACT_INFO.location },
  { icon: <GithubIcon size={20} />, label: "GitHub", value: "tanjimhasan", href: CONTACT_INFO.github },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const leftRef = useGsapScrollTrigger<HTMLDivElement>({ direction: "left" });
  const rightRef = useGsapScrollTrigger<HTMLDivElement>({ direction: "right" });
  const isFormConfigured = Boolean(FORMSPREE_ENDPOINT);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormConfigured) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Contact"
          subtitle="Let's work together"
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div ref={leftRef} className="space-y-6">
            <p className="leading-relaxed text-text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-tertiary text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "GitHub" ? "_blank" : undefined}
                        rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                        className="text-text-primary transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={rightRef}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-border bg-bg-tertiary px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={status === "loading" || !isFormConfigured}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-3 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {!isFormConfigured && (
                <p className="text-sm text-amber-400">
                  Contact form is not configured yet. Add <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to enable submissions.
                </p>
              )}

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

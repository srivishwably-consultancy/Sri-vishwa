import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { AnimatedButton } from "./AnimatedButton";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-[#111111]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-serif leading-none tracking-tight uppercase mb-8">
              Get In <span className="text-outline">Touch</span>
            </h1>
            <p className="text-xl font-light text-secondary/80 leading-relaxed mb-12">
              Let's discuss your next visionary project.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent mb-2">
                  Address
                </h4>
                <p className="text-secondary/80 font-light">
                  Kalika Kamateshwara Complex, Beside Deepak Store,
                  <br />
                  Kalamma Street, Bellary-583101, Karnataka
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent mb-2">
                  Direct Contact
                </h4>
                <p className="text-secondary/80 font-light">
                  srivishwably@gmail.com
                  <br />
                  +91 81055 61005
                  <br />
                  +91 80500 43880
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <form className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-secondary/60"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-white font-light transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-widest text-secondary/60"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-white font-light transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="mobile"
                  className="text-xs uppercase tracking-widest text-secondary/60"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-white font-light transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="interest"
                  className="text-xs uppercase tracking-widest text-secondary/60"
                >
                  Project Area
                </label>
                <select
                  id="interest"
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-white font-light transition-colors appearance-none"
                >
                  <option className="bg-[#111111] text-accent">
                    Residential Design
                  </option>
                  <option className="bg-[#111111] text-accent">
                    Commercial Build
                  </option>
                  <option className="bg-[#111111] text-accent">
                    Interior Architecture
                  </option>
                  <option className="bg-[#111111] text-accent">
                    General Inquiry
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-secondary/60"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-white font-light transition-colors resize-none"
                />
              </div>
              <AnimatedButton className="w-full">Send Message</AnimatedButton>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

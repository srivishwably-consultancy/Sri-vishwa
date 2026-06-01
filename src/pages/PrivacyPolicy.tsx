import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 text-center md:text-left">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Legal
              </h4>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">Privacy Policy</h1>
              <p className="text-secondary/70 font-light text-sm tracking-wider">
                Last Updated: June 1, 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8 text-secondary/80 font-light leading-relaxed text-sm md:text-base border-t border-white/10 pt-10">
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">1. Introduction</h2>
                <p>
                  Welcome to Sri Vishwa Consultancy. We respect your privacy and are committed to protecting any personal information you provide to us. This Privacy Policy describes how we collect, use, and share information when you engage our architectural, interior styling, and construction consultancy services, visit our website, or interact with us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">2. Information We Collect</h2>
                <p>
                  To deliver premium, tailored engineering and design services, we may collect variables and information including:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li><strong>Contact Details:</strong> Your name, email address, phone number, and billing/mailing address.</li>
                  <li><strong>Project Details:</strong> Site properties, land dimensions, structural blueprints, design preferences, and estimated budgets.</li>
                  <li><strong>Communication History:</strong> Feedback, query logs, emails, WhatsApp messages, and design reviews.</li>
                  <li><strong>Technical Usage Information:</strong> IP address, device specs, browser types, and usage statistics collected during your platform visits.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">3. How We Use Your Information</h2>
                <p>
                  We process and execute actions upon your data for professional purposes:
                </p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>To provide architectural drafting, modeling, estimation, interior visualization, and site supervision.</li>
                  <li>To draft, adjust, and present customized service proposals and estimates.</li>
                  <li>To coordinate with structural engineers, site contractors, and municipal planning departments on your behalf.</li>
                  <li>To share progress reports, blueprint updates, and payment request documentation.</li>
                  <li>To answer queries, provide follow-up customer care, and process active contract obligations.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">4. Data Sharing and Third-Party Disclosure</h2>
                <p>
                  We hold your information in absolute confidence. We do not sell or lease out your private details. We only share specific data segments:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>With trusted structural engineers, general contractors, or sub-contractors directly involved in executing your project.</li>
                  <li>With relevant municipal, state, or federal planning offices to secure construction permits and utility clearances.</li>
                  <li>In response to valid warrants or directives under the legal jurisdiction of local authorities.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">5. Security of Your Information</h2>
                <p>
                  Sri Vishwa Consultancy implements modern physical, electronic, and procedural controls to secure project documents, data records, and payment information. However, no data transmission over the Internet can be guaranteed as 100% secure. While we strive to protect your correspondence, you transmit data at your own discretion.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">6. Retention and Location Rights</h2>
                <p>
                  We store project files, design artifacts, and records to comply with professional architectural standards, fiscal audits, and to offer post-project consultation. We operate from our head offices in Bellary, Karnataka, India. All stored digital records are handled under local IT frameworks, guidelines, and compliance standards.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">7. Contact Information</h2>
                <p>
                  For any requests related to accessing, updating, or deleting your personal records, or to understand how your project details are managed, reach out to our team:
                </p>
                <div className="bg-white/5 border border-white/10 p-6 space-y-2 rounded-sm mt-4">
                  <p className="font-semibold text-accent">Sri Vishwa Consultancy</p>
                  <p><strong>Email:</strong> srivishwably@gmail.com</p>
                  <p><strong>Phone:</strong> +91 81055 61005 / +91 80500 43880</p>
                  <p><strong>Office:</strong> Kalika Kamateshwara Complex, Beside Deepak Store, Kalamma Street, Bellary-583101, Karnataka, India.</p>
                </div>
              </section>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}

import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function TermsOfService() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 text-center md:text-left">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Legal
              </h4>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">Terms of Service</h1>
              <p className="text-secondary/70 font-light text-sm tracking-wider">
                Last Updated: June 1, 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8 text-secondary/80 font-light leading-relaxed text-sm md:text-base border-t border-white/10 pt-10">
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">1. Agreement to Terms</h2>
                <p>
                  By accessing, consulting, or executing design/survey contracts with Sri Vishwa Consultancy ("we", "us", or "our"), you agree to be bound by these Terms of Service. These terms govern the provision of all design, planning, structural consultancy, interior styling, costing, and general supervision services offered to clients ("you" or "client").
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">2. Nature of Services</h2>
                <p>
                  Sri Vishwa Consultancy is an architectural, interior design, and estimation agency based in Bellary, Karnataka. Our services represent professional advisory and technical support:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li><strong>Architectural Design:</strong> Concept visualization, blueprint drafting, floor plan layout, elevations, and structural detailing.</li>
                  <li><strong>Interior Styling:</strong> Materials recommendation, color scheme selection, lighting profiles, cabinetry design, and furnishing layouts.</li>
                  <li><strong>Estimating & Costing:</strong> Preparing detailed quantity take-offs, bills of quantities (BOQ), and project budgets based on material standards.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">3. Professional Fees & Payments</h2>
                <p>
                  Our fee schedules are structured based on the specific scope of work, project scale, or milestone timelines:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li><strong>Retainer Fee:</strong> An initial non-refundable deposit is required before starting core conceptual plans or design surveys.</li>
                  <li><strong>Milestone Payments:</strong> Payments are tied to deliverables (e.g., draft layout release, final estimation delivery, 3D visualization sign-off, or construction phases).</li>
                  <li><strong>Delay/Modifications:</strong> Substantial alterations to approved layouts or repeated revisions beyond the contract-defined iteration limit will incur extra professional fees.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">4. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise specified in a supplementary deed of transfer:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>All architectural designs, drawing sheets, structural schematics, BOQs, 3D renders, and digital layouts drafted by Sri Vishwa Consultancy remain our exclusive intellectual property.</li>
                  <li>The client is granted a non-transferable, single-location license to use our files and designs for the execution of the specific project designated in the contract.</li>
                  <li>Our designs or blueprints may not be reused for secondary projects or cloned developments without direct technical permission and proper compensation.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">5. Client Duties & Responsibilities</h2>
                <p>
                  To ensure proper execution of services, you agree to:
                </p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Provide correct boundaries, plot dimensions, surveys, title papers, and soil profiles as requested.</li>
                  <li>Obtain and fund all civil clearances, building license permissions, and local approvals from municipal or village state bodies.</li>
                  <li>Adhere strictly to agreed review dates and coordinate responsibly with local material suppliers and third-party labor.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">6. Limitation of Liability</h2>
                <p>
                  While our consultants practice highest institutional care, we do not assume direct liability for civil errors committed by on-site execution teams, construction workers, structural failures originating from unapproved contractor deviations, or poor-quality sand/cement materials used at the construction site. It is the client's responsibility to hire authorized engineering checkers or quality control officers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">7. Termination of Services</h2>
                <p>
                  Either party may terminate a project contract by providing 14 days written notice. Upon termination, you shall settle all pending charges for work completed up to the date of notice, and Sri Vishwa Consultancy will hand over the relevant level of completed project sheets or plans.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif text-[#f2f0e9] font-medium">8. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms of Service and any dispute, claim, or transaction arising under them shall be governed by, and construed in accordance with, the laws of the Republic of India. Any litigation, arbitration, or regulatory proceeding shall fall strictly under the jurisdiction of courts in Bellary, Karnataka, India.
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}

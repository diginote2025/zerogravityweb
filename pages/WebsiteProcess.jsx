export default function WebsiteProcess() {
  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-black px-8 py-12 md:px-12 text-white">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Website building <br /> process
              </h2>
              <p className="mt-4 max-w-md text-lg text-gray-400">
                A simple step-by-step approach to design, develop, and launch
                high-quality websites.
              </p>
            </div>

            {/* Right Steps */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-white/20" />

              <ProcessStep
                step="Step 1"
                title="Requirement Analysis"
                desc="Understand goals, audience, and website requirements."
              />

              <ProcessStep
                step="Step 2"
                title="Design & Wireframing"
                desc="Create layouts focused on usability and brand identity."
              />

              <ProcessStep
                step="Step 3"
                title="Development"
                desc="Build fast, responsive, and scalable web applications."
              />

              <ProcessStep
                step="Step 4"
                title="Testing & Launch"
                desc="Test performance, fix issues, and deploy the website."
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, title, desc }) {
  return (
    <div className="mb-6">
      <span className="text-lg font-semibold text-orange-400">
        {step}
      </span>
      <h4 className="mt-1 text-lg font-medium text-white">
        {title}
      </h4>
      <p className="mt-1 text-md text-gray-400">
        {desc}
      </p>
    </div>
  );
}

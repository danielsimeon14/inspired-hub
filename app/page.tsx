import Image from "next/image";
import NetworkHero from "./components/NetworkHero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NetworkHero />

      <section className="mx-auto text-center my-10 px-8 md:px-16 lg:px-20  text-[#061b4b]">
        <h2 className="text-3xl md:text-4xl max-w-2xl font-bold mb-8">
          {" "}
          Our concern - your <span className="text-[#ff8a00]">academic </span>
          journey
        </h2>
        <article className="max-w-3xl mx-auto">
          inspired hub exist to help you find scholarship for international
          students, international students funding opportunities, eligibility
          criteria, and application process. We are committed to providing you
          with full scholarships to study abroad and get fundings. .
        </article>

        {/* cards */}
        <div
          aria-label="services we render"
          className="flex max-w-5xl mx-auto flex-col mt-10 md:flex-row justify-center items-stretch gap-6"
        >
          {/* Card 1 */}
          <div className="group bg-white border border-[#E5EAF4] shadow-lg hover:shadow-xl rounded-xl p-3 w-full max-w-[280px] min-h-[340px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1">
            <div className="w-full h-36 rounded-lg overflow-hidden relative">
              <Image
                src="/pgd.jpg"
                fill
                priority
                alt="A student offered scholarship"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="px-2 pt-5 pb-3 text-left">
              <span className="block w-9 h-1 bg-[#FF8A00] rounded-full mb-3" />
              <h3 className="text-lg text-[#061D50] font-bold mb-2">
                Finding scholarships
              </h3>
              <p className="text-sm text-[#53627D] leading-relaxed mb-5">
                We research, find and provide support on every step of your
                scholarship journey.
              </p>

              <Link
                href="/about/#services"
                className="inline-block text-sm font-semibold text-[#0645D9] underline underline-offset-4 decoration-1 hover:text-[#FF8A00] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#061D50] border border-[#061D50] shadow-lg hover:shadow-xl rounded-xl p-3 w-full max-w-[280px] min-h-[340px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1">
            <div className="w-full h-36 rounded-lg overflow-hidden relative">
              <Image
                src="/masters.jpg"
                fill
                priority
                alt="International student studying"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="px-2 pt-5 pb-3 text-left">
              <span className="block w-9 h-1 bg-[#FF8A00] rounded-full mb-3" />
              <h3 className="text-lg text-white font-bold mb-2">
                International study guidance
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mb-5">
                Get guidance on admission requirements, applications and
                studying abroad.
              </p>

              <Link
                href="/about/#services"
                className="inline-block text-sm font-semibold text-white underline underline-offset-4 decoration-1 hover:text-[#FF8A00] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#F0F4FF] border border-[#DCE5FA] shadow-lg hover:shadow-xl rounded-xl p-3 w-full max-w-[280px] min-h-[340px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1">
            <div className="w-full h-36 rounded-lg overflow-hidden relative">
              <Image
                src="/phd.jpg"
                fill
                priority
                alt="Student receiving educational support"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="px-2 pt-5 pb-3 text-left">
              <span className="block w-9 h-1 bg-[#FF8A00] rounded-full mb-3" />
              <h3 className="text-lg text-[#061D50] font-bold mb-2">
                Application support
              </h3>
              <p className="text-sm text-[#53627D] leading-relaxed mb-5">
                We help you understand eligibility criteria and navigate the
                application process.
              </p>

              <Link
                href="/about/#services"
                className="inline-block text-sm font-semibold text-[#0645D9] underline underline-offset-4 decoration-1 hover:text-[#FF8A00] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/about/#services"
          className="accent px-3 py-2 rounded-lg text-white font-bold"
        >
          View all services
        </Link>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  GraduationCap,
  Printer,
  Megaphone,
  Palette,
  BookOpen,
  ArrowUpRight,
  Target,
  Lightbulb,
  Users,
} from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Scholarship Support",
      description:
        "Discover scholarship opportunities, understand eligibility requirements and get guidance through your study-abroad application journey.",
    },
    {
      icon: Printer,
      title: "Printing & Publishing",
      description:
        "From academic documents to professional printing, we provide reliable printing and publishing solutions.",
    },
    {
      icon: Megaphone,
      title: "Advertising & Marketing",
      description:
        "We help businesses grow their visibility through social media advertising, digital campaigns and brand promotion.",
    },
    {
      icon: Palette,
      title: "Graphics & Creative Design",
      description:
        "Creative visual designs that help individuals and businesses communicate their ideas and build memorable brands.",
    },
    {
      icon: BookOpen,
      title: "Academic Tools & Books",
      description:
        "Access useful educational materials, academic books, learning resources and tools that support your educational journey.",
    },
  ];

  return (
    <section className="bg-[#F5F7FC] py-20 md:py-28 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#0645D9] mb-4">
            About Inspired Hub
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#061D50] leading-tight mb-6">
            One Hub. Multiple Possibilities.
            <span className="text-[#FF8A00]"> Endless Growth.</span>
          </h2>

          <p className="text-[#53627D] leading-8 text-base md:text-lg">
            Inspired Hub is an education, creative and business support brand
            committed to helping students access opportunities, supporting
            businesses with creative solutions and making essential academic
            resources accessible.
          </p>
        </div>

        {/* BRAND STORY */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-24">
          {/* LEFT */}
          <div className="bg-[#061D50] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#0645D9]/30" />
            <div className="absolute -bottom-16 -left-10 w-40 h-40 rounded-full bg-[#FF8A00]/15" />

            <div className="relative z-10">
              <span className="text-[#FF8A00] text-sm font-bold uppercase tracking-widest">
                Who We Are
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mt-5 mb-6 leading-snug">
                Helping people learn, create and grow.
              </h3>

              <p className="text-white/75 leading-8 mb-5">
                At Inspired Hub, we believe that access to the right
                opportunities, resources and creative solutions can make a
                meaningful difference in people's lives.
              </p>

              <p className="text-white/75 leading-8 mb-8">
                That is why we bring together scholarship guidance, academic
                resources, professional printing, graphic design and digital
                advertising under one brand. Whether you are a student pursuing
                an international education opportunity or a business looking to
                grow, we are here to support your next step.
              </p>

              <Link
                href="/about/#services"
                className="inline-flex items-center gap-2 text-white font-semibold underline underline-offset-8 decoration-[#FF8A00] hover:text-[#FF8A00] transition"
              >
                Explore what we do
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-7">
            <div>
              <span className="text-[#0645D9] font-bold text-sm uppercase tracking-widest">
                Our Approach
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#061D50] mt-3 mb-4">
                More than a service provider, a partner in progress.
              </h3>
              <p className="text-[#53627D] leading-8">
                We combine educational support, creative expertise and practical
                business services to help individuals and organisations move
                forward with confidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#E5EAF4] rounded-xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-[#E6EDFF] text-[#0645D9] rounded-lg flex items-center justify-center mb-4">
                  <Target size={23} />
                </div>
                <h4 className="font-bold text-[#061D50] mb-2">Our Mission</h4>
                <p className="text-sm text-[#53627D] leading-6">
                  To make educational opportunities, creative services and
                  useful resources more accessible.
                </p>
              </div>

              <div className="bg-white border border-[#E5EAF4] rounded-xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-[#FFF0DC] text-[#FF8A00] rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb size={23} />
                </div>
                <h4 className="font-bold text-[#061D50] mb-2">Our Vision</h4>
                <p className="text-sm text-[#53627D] leading-6">
                  To become a trusted hub for learning, creativity and
                  sustainable growth.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#E6EDFF] rounded-xl p-5">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#0645D9] text-white flex items-center justify-center">
                <Users size={23} />
              </div>
              <div>
                <h4 className="font-bold text-[#061D50]">
                  People at the centre
                </h4>
                <p className="text-sm text-[#53627D]">
                  Every service begins with understanding what our customers
                  need to achieve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div id="services" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#0645D9] text-sm font-bold uppercase tracking-widest">
              What We Do
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#061D50] mt-3 mb-4">
              Everything you need to move forward.
            </h3>
            <p className="text-[#53627D] leading-7">
              Explore our range of services designed to support students,
              individuals and growing businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`group bg-white border border-[#E5EAF4] rounded-xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    index === 0
                      ? "border-t-4 border-t-[#FF8A00]"
                      : "border-t-4 border-t-[#0645D9]"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E6EDFF] text-[#0645D9] group-hover:bg-[#0645D9] group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-lg font-bold text-[#061D50] mb-3">
                    {service.title}
                  </h4>

                  <p className="text-sm text-[#53627D] leading-7 mb-6">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0645D9] underline underline-offset-4 decoration-[#FF8A00] hover:text-[#FF8A00] transition-colors"
                  >
                    Learn more
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CTA */}
        <div className="mt-20 bg-[#061D50] rounded-2xl px-7 py-12 md:px-14 md:py-14 text-center relative overflow-hidden">
          <div className="absolute w-48 h-48 rounded-full bg-[#0645D9]/30 -top-24 -right-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-4xl text-white font-bold mb-5">
              Your next opportunity starts here.
            </h3>
            <p className="text-white/75 leading-7 mb-8">
              Whether you want to study abroad, promote your business, get a
              creative design or access academic resources, Inspired Hub is
              ready to help.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E87900] text-[#061D50] font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

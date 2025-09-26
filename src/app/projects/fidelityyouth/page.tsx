import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <div className="w-full bg-neutral-100 py-12 md:py-24">
        <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48">
          <div className="space-y-2">
            <p className="text-acorn-500 text-sm font-bold">Fidelity Investments</p>
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Fidelity Youth™ App</h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-medium">
              A teen-owned brokerage account that gives teens ages 13-17 the power to save, spend, and invest their own money while letting parents stay connected.
            </p>
            <p className="text-sm text-gray-800 font-bold">iOS & Android app</p>
          </div>
          <div className="flex flex-row justify-center lg:justify-between md:gap-x-4 mt-8">
            <Image
              src="/fidyouthhero1.png"
              width={230}
              height={498}
              className="md:block rounded-xl"
              alt="Fidelity Youth Home screenshot"
            />
            <Image
              src="/fidyouthhero2.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fidelity Youth Invest screenshot"
            />
            <Image
              src="/fidyouthhero3.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fidelity Youth Learn/Education screenshot"
            />
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48 py-12 md:py-24">
        <div className="space-y-12">
          <div className="gap-y-8 space-y-12">
            <div className="pb-8">
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As the <span className="font-bold">Principal UX Designer</span> on a small team, I led the design process for portions of the app from early-stage ideas and concepts through refinement, high-fidelity design, and final app release, including ongoing iterations.
              </p>
            </div>
            <div className="pb-8">
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Skills</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">UX/UI</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Prototyping</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">User testing</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Interviewing</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Conceptual designs</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Design systems</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Information architecture</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Mobile design</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Web design</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Visual design</span>
                <span className="bg-[#275C1D] text-white px-3 py-1 rounded-full text-sm font-semibold">Competitive analysis</span>
              </div>
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">My contributions</h1>

            {/* NDA Notice */}
            <div className="bg-[#ffdbdb] flex flex-col gap-1 items-start justify-center p-8 rounded-2xl w-full mb-12">
              <div className="font-bold text-[#975a5a] text-2xl">
                <p>NDA</p>
              </div>
              <div className="font-medium text-[#975a5a] text-lg leading-relaxed">
                <p>This project is under NDA, so I can’t share full details. Below are a few highlights from my contributions at Fidelity.</p>
              </div>
            </div>
            <div className="pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">Main transaction button</h2>
              <div className="space-y-4">
              <p className="text-neutral-600 font-medium text-xl">Early on, I researched and explored navigation patterns to make moving money and completing simple transactions easier. We landed on a design with a raised transaction button in the bottom toolbar, giving quick access to the most-used actions. When we shared our work in a demo, the Flagship app team saw the value and later incorporated a similar approach into the main Fidelity app. It was a surprise to see my designs adopted at that scale, but ultimately rewarding to know they helped improve how users move their money.</p>
              </div>
              
              {/* Transaction Button Images */}
              <div className="flex flex-col lg:flex-row gap-6 mt-6">
                {/* Fidelity Youth Transaction Button */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidyouth_invest.png"
                      alt="Fidelity Youth Transaction Button Design"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Youth app transaction button design</p>
                </div>
                
                {/* Fidelity Flagship Transaction Button */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidflagship_invest.png"
                      alt="Fidelity Flagship Transaction Button Design"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Flagship app transaction button design</p>
                </div>
              </div>
              
              {/* Transaction State Images */}
              <div className="flex flex-col lg:flex-row gap-6 mt-6">
                {/* Transaction Closed State */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidflagship_transact_closed.png"
                      alt="Fidelity Youth Transaction Button Closed State"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Flagship app transaction button closed state</p>
                </div>
                
                {/* Transaction Open State */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidflagship_transact_open.png"
                      alt="Fidelity Youth Transaction Button Open State"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Flagship app transaction button open state</p>
                </div>
              </div>
              
              </div>

              <div className="pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">Investment amount screen</h2>
              <div className="space-y-4">
              <p className="text-neutral-600 font-medium text-xl">During the concept phase, I explored several investment screen designs, creating concepts to guide possible directions. After researching competitors, I proposed a solution that made investment amounts clearer and simplified the process while maintaining market parity. The Flagship app later incorporated my concepts, which was rewarding to see. I had hoped to apply a similar approach to transactions and money movement, but business constraints made that difficult.</p>
              </div>
              
              {/* Investment Amount Images */}
              <div className="flex flex-col lg:flex-row gap-6 mt-6">
                {/* Fidelity Youth Investment Amount */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidyouth_invest_amount.png"
                      alt="Fidelity Youth Investment Amount Design"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Youth app investment amount design</p>
                </div>
                
                {/* Fidelity Flagship Investment Amount */}
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    <Image
                      src="/fidflagship_invest_amount.png"
                      alt="Fidelity Flagship Investment Amount Design"
                      width={400}
                      height={600}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-neutral-500">Fidelity Flagship app investment amount design</p>
                </div>
              </div>
              
              </div>

              <div className="pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">Component library</h2>
              <div className="space-y-4">
              <p className="text-neutral-600 font-medium text-xl">I created the initial component library for the Fidelity Youth app in Figma to keep designs consistent, organized, and on brand. This required close collaboration with the Fidelity Design System team to stay aligned with the broader brand vision. At the same time, we contributed to their system updates and tokenization work, as our team was often pushing the boundaries of the brand.</p>
              </div>
              
              {/* Component Library Image */}
              <div className="flex justify-center items-center w-full mt-6">
                <Image
                  src="/fidyouth_components.png"
                  alt="Fidelity Youth Component Library"
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm flex justify-center items-center w-full mt-2 text-neutral-500">Not actual design components, visual only</p>
              </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full py-8 md:py-12">
          <div className="invisible">
            <p className="text-xs text-gray-600 ml-6 hidden md:block">Previous project</p>
            <Link
              href="/projects/cdm"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#41AD7B]">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="hidden md:flex items-center gap-2 text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Chronic disease management
              </span>
            </Link>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500"
          >
            Home
          </Link>
          <div>
            <p className="text-xs text-gray-600 hidden md:block">Next project</p>
            <Link
              href="/projects/freshfoodfarmacy"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <span className="hidden md:flex items-center gap-2 text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500">
                Fresh Food Farmacy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#41AD7B]">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
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
          <div className="gap-y-8 space-y-8">
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As the <span className="font-bold">Principal UX Designer</span> on a small team, I led the design process for portions of the app from early-stage ideas and concepts through refinement, high-fidelity design, and final app release, including ongoing iterations.
              </p>
            </div>
            <div>
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
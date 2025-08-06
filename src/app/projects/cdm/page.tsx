import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      {/* HERO SECTION */}
      <div className="w-full bg-neutral-100 py-12 md:py-24">
        <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48">
          <div className="space-y-2">
            <p className="text-sky-500 text-sm font-bold">Geisinger Health System</p>
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Chronic disease management</h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-medium">
              A project designed to help patients, providers and care managers combine to manage a patient's chronic conditions. The solution is an app for patients and an administration dashboard and app for the care team.
            </p>
          </div>
          <div className="flex flex-row justify-center md:gap-x-4 mt-8">
            <Image
              src="/cdm.png"
              width={800}
              height={465}
              className="md:block rounded-xl"
              alt="Chronic disease management screenshot"
            />
          </div>
        </div>
      </div>
      {/* CONTENT BELOW HERO */}
      <main className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48 py-12 md:py-24">
        <div className="space-y-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As <span className="font-bold">Senior UX Designer</span> I worked in tandem with a consultant group and was responsible for user experience strategy and designs. I also lead the internal team through the design process.
              </p>
            </div>
            
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Skills</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">UX/UI</span>
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">Wireframing</span>
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">Prototyping</span>
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">Interviewing</span>
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">Conceptual designs</span>
                <span className="bg-[#6C61CF] text-white px-3 py-1 rounded-full text-sm font-semibold">Contextual inquiry</span>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Goal</h1>
              <p className="text-neutral-600 font-medium text-xl">
                To improve chronic disease management by creating a comprehensive platform that enables better coordination between patients, providers, and care managers.
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Problem</h1>
              <p className="text-neutral-600 font-medium text-xl">
                Patients with chronic conditions are notoriously hard to manage and understand in the outpatient setting. The care team needed a way to know what's going with the patient and keep in contact with the patients as much as possible, and the patients needed a way to get faster answers and be guided through their chronic condition journey.
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Process</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Research & Understanding</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    In the beginning the project team along with the consultants interviewed and held workshops with stakeholders to understand their journeys and their needs. We then held workshops to brainstorm and ideate on solutions and created a few wireframes to help facilitate the conversation.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Wireframes and Prototypes</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    After our brainstorming sessions I took everything we learned along with the wireframes and created the administration and care manager side of the application while the consultant team worked on the patient application. We also had review sessions to make sure our products worked seamlessly and ideas were meshing. We then reviewed the applications along the way and had several iterations with stakeholders giving their input and the design teams going back and making adjustments to our designs until we had what we felt was a good solution to pursue.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Development</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    After knowing what we were looking for the project team did a market assessment to see what other solutions were available that were similar to what we built.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Outcome</h1>
              <p className="text-neutral-600 font-medium text-xl">
                Ultimately it was decided rather then develop something on our own we would buy a product from a vendor and work with them to fit our workflows.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full py-8 md:py-12">
          <div>
            <p className="text-xs text-gray-600 ml-6 hidden md:block">Previous project</p>
            <Link
              href="/projects/asthma"
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
                Asthma management suite
              </span>
            </Link>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500"
          >
            Home
          </Link>
          <div className="invisible">
            <p className="text-xs text-gray-600 hidden md:block">Next project</p>
            <Link
              href="/projects/fidelityyouth"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <span className="hidden md:flex items-center gap-2 text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500">
                Fidelity Youth™ App
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
  );
}
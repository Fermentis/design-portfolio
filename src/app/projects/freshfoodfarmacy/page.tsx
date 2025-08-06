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
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Fresh Food Farmacy</h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-medium">
              Assists people with food insecurity, and helps those with diabetes to lower their blood sugar through healthy eating.
            </p>
            <p className="text-sm text-gray-800 font-bold">
              Patient iOS & Android app • Administrative web app
            </p>
          </div>
          <div className="flex flex-row justify-center lg:justify-between md:gap-x-4 mt-8">
            <Image
              src="/fffhome.png"
              width={230}
              height={498}
              className="md:block rounded-xl"
              alt="Fresh Food Farmacy Home screenshot"
            />
            <Image
              src="/fffmealplan.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fresh Food Farmacy Meal Plan screenshot"
            />
            <Image
              src="/fffjournal.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fresh Food Farmacy Schedule screenshot"
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
                As <span className="font-bold">Senior UX Designer</span> I was responsible for all user experience strategy and designs. I also led the team through the full design process including research, prototypes, and user testing.
              </p>
            </div>
            
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Skills</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">UX/UI</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Prototyping</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">User testing</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Interviewing</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Conceptual designs</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Contextual inquiry</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Information architecture</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Mobile design</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Web design</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Visual design</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Material design</span>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Goal</h1>
              <p className="text-neutral-600 font-medium text-xl">
              Lower patients A1c by enrolling them in a program that educates them on diabetes, and providing them with good nutritious food through a food pantry.              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Problem</h1>
              <p className="text-neutral-600 font-medium text-xl">
              Food insecurity and diabetes are both hard problems to manage individually. It's hard to manage your diabetes when you can't afford food, and less expensive food usually isn't very nutritious. You also aren't sure what to eat because you lack the proper education.              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Apps</h1>
                              <div className="space-y-4">
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Patient</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                    The patient app is a personalized app for individuals who needed assistance managing their diabetes and A1c(blood sugar), they can also arrange for food pickups of healthy food and view healthy recipes.                    </p>
                  </div>
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Administration</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                    The administration dashboard allows for farmacy staff to manage patients and their food pantry. There is also a clinical portion of the app that enabled the clinicians to monitor how their patients are doing and help them when needed.                    </p>
                  </div>
                </div>
            </div>

                          <div>
                <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Process</h1>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Research</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                    To better understand the patients we conducted several site visits through the pantry where we observed patients and were able to ask questions as they went through the food pantry and listen to any issues they had. We were also able to take pictures and ask the staff about their process and shadow them in their work.                    </p>
                  </div>
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Ideation</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                    After our site visits and interviews we looked to identify opportunities and brainstorm to ideate around initial and future features.                    </p>
                  </div>
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Prototypes</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                      We then created apps for both the administrators and patients. We reviewed and went through several iterations with the stakeholders, and we also showed patients the app for some user testing and impressions.eation of apps for administrators and patients, followed by iterations with stakeholders and user testing.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-l text-sky-500 font-bold">Development & Iterations</h2>
                    <p className="text-neutral-600 font-medium text-xl">
                    After some changes based on our testing and patient feedback the app was then released and we began enrolling patients.
                    </p>
                  </div>
                </div>
              </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Outcome</h1>
              <p className="text-neutral-600 font-medium text-xl">
              Patients were using the app successfully, but due to COVID the team was pulled in other directions and work. The patient side mostly stood still while there were iterations on the admin side to better accommodate their process.              </p>
            </div>
          </div>
        </div>
                <div className="flex justify-between items-center w-full py-8 md:py-12">
          <div>
            <p className="text-xs text-gray-600 ml-6 hidden md:block">Previous project</p>
            <Link
              href="/projects/fidelityyouth"
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
                Fidelity Youth™ App
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
              href="/projects/asthma"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <span className="hidden md:flex items-center gap-2 text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500">
                Asthma management suite
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
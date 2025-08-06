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
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Asthma management suite</h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-medium">
              A suite of tools that assists patients in managing asthma. The app allowed patients to talk to their doctors about their conditions and view patterns in their health for better management.
            </p>
            <p className="text-sm text-gray-800 font-bold">
              Patient iOS & Android app • Provider web app • Pulmonary specialist web app
            </p>
          </div>
          <div className="flex flex-row justify-center md:gap-x-4 mt-8">
            <Image
              src="/project_edge.png"
              width={975}
              height={600}
              className="md:block rounded-xl"
              alt="Asthma management suite screenshots"
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
                As <span className="font-bold">Senior UX Designer</span> I was responsible for all user experience strategy and designs. I also led the team through the design process including research, personas, journey mapping, prototypes, and user testing.
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
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Journey mapping</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Information architecture</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Mobile design</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Web design</span>
                <span className="bg-[#007FC4] text-white px-3 py-1 rounded-full text-sm font-semibold">Material design</span>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Goal</h1>
              <p className="text-neutral-600 font-medium text-xl">
                Reduce asthma attacks by creating a single place where patients can manage their asthma.
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Problem</h1>
              <p className="text-neutral-600 font-medium text-xl">
                Asthma can be a hard condition to nail down and manage. Asthmatic patients don't always know their triggers that cause an attack, medications work for some patients and not others, patients don't always know the external conditions around them, and in order to get any help it can take up to 48 hrs if they message their provider through a portal.
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Apps</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Patient</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    Asthma Management Suite was a personalized app for individuals who needed assistance managing their asthma. The app allowed patients to talk to their doctors about their conditions and view patterns in their health for better management.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Provider</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    On the doctor side they were able to view aggregated data and information in a dashboard to better understand their patients' asthma experience at the appointment.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Specialist</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    The specialist was able to view aggregated data and information in a dashboard to better understand their patients' asthma experience at any time. They would be notified when a patient was having issues and be able to act between appointments and monitor the patients between visits, because patients need help all the time, not just during a visit.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-neutral-600 mb-4">Process</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Research and Market Assessment</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    In the beginning of the project the team held focus groups to better understand the patients and how they're living their lives with asthma. We also did a market assessment to see what other solutions are available. I watched YouTube videos of patients describing their lives with the condition, and joined asthma forums and Facebook groups to see the questions and trouble people are experiencing when managing their asthma. I personally find this method of research extremely helpful and revealing. Sometimes this method is called a Sales Safari. The team also shadowed and interviewed providers and other members of the care team to get their take on managing asthma.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Personas & Journey Maps</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    I then created personas and journey maps with the product team to better define the experience, create alignment, and identify opportunities.
                  </p>
                </div>
                <div>
                  <h2 className="text-l text-sky-500 font-bold">Prototypes</h2>
                  <p className="text-neutral-600 font-medium text-xl">
                    We then created one app per user type, a patient, provider, and specialist app. We had been sharing, getting feedback from, and designing with the provider and specialist, so we were able to make sure we were on the right direction with the clinical apps as we went. We also held another focus group with our patients and ran user testing.
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
                Patients liked the app and appreciated that everything was in a single place for them to manage their asthma. The clinicians also liked that they had a dashboard to view exacerbations as they happened, and see how patients were doing between visits in order to help them when they weren't in the clinic. Eventually Astra Zeneca took over the project from Geisinger and my part in the project ended.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full py-8 md:py-12">
          <div>
            <p className="text-xs text-gray-600 ml-6 hidden md:block">Previous project</p>
            <Link
              href="/projects/freshfoodfarmacy"
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
                Fresh Food Farmacy
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
              href="/projects/cdm"
              className="flex items-center gap-2 text-sm font-bold"
            >
              <span className="hidden md:flex items-center gap-2 text-acorn-500 hover:text-acorn-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500">
                Chronic disease management
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
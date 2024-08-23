import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex min-h-screen flex-col">
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">Geisinger Health System</p>
          <h1 className="text-3xl font-bold">Fresh Food Farmacy</h1>
          <p className="text-xl text-gray-700">Helping patients with food insecurity and their conditions</p>
        </div>
        <div className="flex flex-row bg-sky-400 justify-center">
          <Image
            src="/fffhome.png"
            width={412}
            height={525}
            className="md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/fffmealplan.png"
            width={412}
            height={525}
            className="hidden md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/fffjournal.png"
            width={412}
            height={525}
            className="hidden md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-24 space-y-12 items-center">
          <div className="flex flex-col w-full lg:w-2/3 gap-y-8">
            <div>
              <h3 className="text-l text-gray-800 font-bold">My Role</h3>
              <p className="text-gray-700">I was responsible for all user experience strategy and designs. I also led the team through the design process including research, prototypes, and user testing.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Skills</h3>
              <p className="text-gray-700">UI, UX, Prototyping, Interviewing, Contextual Inquiry/Job Shadowing, User Testing</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Overview</h2>
              <p className="text-gray-700">Fresh Food Farmacy is a program that seeks to both assist people with food insecurity, and help those with diabetes to lower their A1c(blood sugar) through healthy eating. The solution is a patient app and an administration dashboard.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Patient app</h3>
              <p className="text-gray-700">The patient app is a personalized app for individuals who needed assistance managing their diabetes and A1c(blood sugar), they can also arrange for food pickups of healthy food and view healthy recipes.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Administration app</h3>
              <p className="text-gray-700">The administration dashboard allows for farmacy staff to manage patients and their food pantry. There is also a clinical portion of the app that enabled the clinicians to monitor how their patients are doing and help them when needed.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Problem</h2>
              <p className="text-gray-700">Food insecurity and diabetes are both hard problems to manage individually. The program aims to lower your A1c through proper nutrition and education, thus eliminating both at the same time. It's hard to manage your diabetes when you can't afford food, and less expensive food usually isn't very nutritious, and you also aren't sure what to eat because you lack the proper education.</p>
            </div>
            <h2 className="text-2xl text-gray-800 font-bold">Process</h2>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Research</h3>
              <p className="text-gray-700">To better understand the patients we conducted several site visits through the pantry where we observed patients and were able to ask questions as they went through the food pantry and listen to any issues they had. We were also able to take pictures and ask the staff about their process and shadow them in their work.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Ideation</h3>
              <p className="text-gray-700">After our site visits and interviews we looked to identify opportunities and brainstorm to ideate around initial and future features.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Prototypes</h3>
              <p className="text-gray-700">We then created apps for both the administrators and patients. We reviewed and went through several iterations with the stakeholders, and we also showed patients the app for some user testing and impressions.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Development and Iteration              </h3>
              <p className="text-gray-700">After some changes based on our testing and patient feedback the app was then released and we began enrolling patients.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Outcome</h2>
              <p className="text-gray-700">Patients were using the app successfully, but due to COVID the team was pulled in other directions and work on the patient side mostly stood still while there were iterations on the admin side to better accommodate their process.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
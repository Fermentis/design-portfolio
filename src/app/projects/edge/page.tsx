import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex min-h-screen flex-col">
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">Geisinger Health System</p>
          <h1 className="text-3xl font-bold">Asthma Management Suite</h1>
          <p className="text-xl text-gray-700">Healthcare app ecosystem to help users manage their asthma</p>
        </div>
        <div className="flex flex-row justify-center pt-16 pb-16 bg-[#5eb84e]">
          <Image
            src="/project_edge.png"
            width={1730}
            height={620}
            className="rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-24 space-y-12 items-center">
          <div className="flex flex-col w-full lg:w-2/3 gap-y-8">
            <div>
              <h3 className="text-l text-gray-800 font-bold">My Role</h3>
              <p className="text-gray-700">I was responsible for all user experience strategy and designs. I also led the team through the design process including research, personas and journey mapping, prototypes, and user testing.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Skills</h3>
              <p className="text-gray-700">UI, UX, Prototyping, Interviewing, Contextual Inquiry/Job Shadowing, Focus Groups, User Testing, Journey mapping</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Overview</h2>
              <p className="text-gray-700">Asthma Management Suite was a project designed to help reduce the complexity of navigating health information and removing the barriers to communicating and getting answers from your health care team. The solution was an ecosystem of interlinked apps for patients, doctors, and specialists to work together in managing a patient's asthma.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Patient App</h3>
              <p className="text-gray-700">Asthma Management Suite was a personalized app for individuals who needed assistance managing their asthma. The app allowed patients to talk to their doctors about their conditions and view patterns in their health for better management.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Provider App</h3>
              <p className="text-gray-700">On the doctor side they were able to view aggregated data and information in a dashboard to better understand their patients' asthma experience at the appointment.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Specialist App</h3>
              <p className="text-gray-700">The specialist was able to view aggregated data and information in a dashboard to better understand their patients' asthma experience at any time. They would be notified when a patient was having issues and be able to act between appointments and monitor the patients between visits, because patients need help all the time, not just during a visit.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Problem</h2>
              <p className="text-gray-700">Asthma can be a hard condition to nail down and manage. Asthmatic patients don't always know their triggers that cause an attack, medications work for some patients and not others, patients don't always know the external conditions around them, and in order to get any help it can take up to 48 hrs if they message their provider through a portal.</p>
            </div>
            <h2 className="text-2xl text-gray-800 font-bold">Process</h2>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Research and Market Assessment</h3>
              <p className="text-gray-700">In the beginning of the project the team held focus groups to better understand the patients and how they're living their lives with asthma. We also did a market assessment to see what other solutions are available. I watched YouTube videos of patients describing their lives with the condition, and joined asthma forums and Facebook groups to see the questions and trouble people are experiencing when managing their asthma. I personally find this method of research extremely helpful and revealing. Sometimes this method is called a Sales Safari.</p>
              <p className="text-gray-700">The team also shadowed and interviewed providers and other members of the care team to get their take on managing asthma.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Personas & Journey Maps</h3>
              <p className="text-gray-700">After our brainstorming sessions I took everything we learned along with the wireframes and created the administration and care manager side of the application while the consultant team worked on the patient application. We also had review sessions to make sure our products worked seamlessly and ideas were meshing. We then reviewed the applications along the way and had several iterations with stakeholders giving their input and the design teams going back and making adjustments to our designs until we had what we felt was a good solution to pursue.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Prototypes</h3>
              <p className="text-gray-700">We then created one app per user type, a patient, provider, and specialist app. We had been sharing, getting feedback from, and designing with the provider and specialist, so we were able to make sure we were on the right direction with the clinical apps as we went. We also held another focus group with our patients and ran user testing.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Development and Iteration</h3>
              <p className="text-gray-700">After some changes based on our testing and patient feedback the app was then released and we began enrolling patients.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Outcome</h2>
              <p className="text-gray-700">Patients liked the app and appreciated that everything was in a single place for them to manage their asthma. The clinicians also liked that they had a dashboard to view exacerbations as they happened, and see how patients were doing between visits in order to help them when they weren't in the clinic. Eventually Astra Zeneca took over the project from Geisinger and my part in the project ended.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex min-h-screen flex-col">
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">Geisinger Health System</p>
          <h1 className="text-3xl font-bold">Chronic Disease Management Center</h1>
          <p className="text-xl text-gray-700">App ecosystem to help users manage their chronic conditions 
          </p>
        </div>
        <div className="flex flex-row justify-center pt-16 pb-16 bg-[#958bea]">
          <Image
            src="/cdmmain.png"
            width={800}
            height={350}
            className="rounded-xl"
            alt="CDM screenshot"
          />
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-24 space-y-12 items-center">
          <div className="flex flex-col w-full lg:w-2/3 gap-y-8">
            <div>
              <h3 className="text-l text-gray-800 font-bold">My Role</h3>
              <p className="text-gray-700">I worked in tandem with a consultant group and was responsible for user experience strategy and designs. I also lead the internal team through the design process.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Skills</h3>
              <p className="text-gray-700">UI, UX, Prototyping, Interviewing, Contextual Inquiry/Job Shadowing</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Overview</h2>
              <p className="text-gray-700">The Chronic Disease Management Center is a concept project designed to help patients, providers and care managers combine to manage a patient's chronic conditions. The solution is an app for patients and an administration dashboard and app for the care team. While the solution wasn't used it helped guide the team in project direction and eventual choosing of a vendor app. The patient app was designed by the consultant design team under guidance of the product team.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Care Team App</h3>
              <p className="text-gray-700">I designed the care manager and care team side of the solution along with the product team stakeholders. The app allows the care managers to view aggregated data and information in a dashboard to better understand their patients' conditions and manage them while the patients are at home.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Problem</h2>
              <p className="text-gray-700">Patients with chronic conditions are notoriously hard to manage and understand in the outpatient setting. The care team needed a way to know what's going with the patient and keep in contact with the patients as much as possible, and the patients needed a way to get faster answers and be guided through their chronic condition journey.</p>
            </div>
            <h2 className="text-2xl text-gray-800 font-bold">Process</h2>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Research & Understanding</h3>
              <p className="text-gray-700">In the beginning the project team along with the consultants interviewed and held workshops with stakeholders to understand their journeys and their needs. We then held workshops to brainstorm and ideate on solutions and created a few wireframes to help facilitate the conversation.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Wireframes and Prototypes</h3>
              <p className="text-gray-700">After our brainstorming sessions I took everything we learned along with the wireframes and created the administration and care manager side of the application while the consultant team worked on the patient application. We also had review sessions to make sure our products worked seamlessly and ideas were meshing. We then reviewed the applications along the way and had several iterations with stakeholders giving their input and the design teams going back and making adjustments to our designs until we had what we felt was a good solution to pursue.</p>
            </div>
            <div>
              <h3 className="text-l text-gray-800 font-bold">Development</h3>
              <p className="text-gray-700">After knowing what we were looking for the project team did a market assessment to see what other solutions were available that were similar to what we built.</p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-800 font-bold">Outcome</h2>
              <p className="text-gray-700">Ultimately it was decided rather then develop something on our own we would buy a product from a vendor and work with them to fit our workflows.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
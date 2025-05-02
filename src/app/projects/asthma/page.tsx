import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      {/* HERO SECTION */}
      <div className="w-full bg-neutral-100 py-12">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
              src="/asthma.png"
              width={975}
              height={600}
              className="md:block rounded-xl"
              alt="Asthma management suite screenshots"
            />
          </div>
        </div>
      </div>
      {/* CONTENT BELOW HERO */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16">
        <div className="space-y-12">
          <div className="gap-y-8 space-y-8">
            <div>
              <h1 className="text-l text-sky-500 font-bold">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As <span className="font-bold">Senior UX Designer</span> I was responsible for all user experience strategy and designs. I also led the team through the design process including research, personas, journey mapping, prototypes, and user testing.
              </p>
            </div>
            <div>
              <h1 className="text-l text-sky-500 font-bold">Skills</h1>
              <div className="font-medium text-xl">
                <p className="text-gray-700">+ User experience</p>
                <p className="text-gray-700">+ User interface</p>
                <p className="text-gray-700">+ Prototyping</p>
                <p className="text-gray-700">+ UserTesting</p>
                <p className="text-gray-700">+ Interviewing</p>
                <p className="text-gray-700">+ Concept designs</p>
                <p className="text-gray-700">+ Contextual Inquiry/Job Shadowing</p>
                <p className="text-gray-700">+ Journey mapping</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
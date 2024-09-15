import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex flex-col min-h-screen">
        <div className="flex-col bg-neutral-100 justify-center space-y-12">

          <div className="flex flex-row justify-center">
            <div className="flex-col justify-center w-full md:w-4/5 p-4 md:px-12 md:pt-12 md:pb-0 lg:px-24 lg:pt-16 lg:pb-0 space-y-2">
              <p className="text-sky-500 text-sm font-bold">Geisinger Health System</p>
              <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Fresh Food Farmacy</h1>
              <p className="text-xl md:text-2xl text-neutral-600 font-medium">Assists people with food insecurity, and helps those with diabetes to lower their blood sugar through healthy eating.</p>
              <p className="text-sm text-gray-800 font-bold">Patient iOS & Android app • Administrative web app</p>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex-col justify-center w-full md:w-4/5">
              <div className="flex flex-row justify-center lg:justify-between md:gap-x-4 p-4 md:px-12  md:pb-12 lg:px-24 lg:pt-4">
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
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-12 lg:p-24 space-y-12 items-center">
          <div className="flex flex-col w-full md:w-4/5 gap-y-8">
            <div>
              <h1 className="text-l text-sky-500 font-bold">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">As <span className="font-bold">Senior UX Designer</span> I was responsible for all user experience strategy and designs. I also led the team through the design process including research, prototypes, and user testing.</p>
            </div>
            <div>
              <h1 className="text-l text-sky-500 font-bold">Skills</h1>
              <div className="font-medium text-xl">
                <p className="text-gray-700">+ User experience</p>
                <p className="text-gray-700">+ User interface</p>
                <p className="text-gray-700">+ Prototyping</p>
                <p className="text-gray-700">+ UserTesting</p>
                <p className="text-gray-700">+ Design systems</p>
                <p className="text-gray-700">+ Concept designs</p>
                <p className="text-gray-700">+ Contextual Inquiry/Job Shadowing</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
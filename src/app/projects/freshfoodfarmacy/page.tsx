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
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16">
        <div className="space-y-12">
          <div className="gap-y-8 space-y-8">
            <div>
              <h1 className="text-l text-sky-500 font-bold">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As <span className="font-bold">Senior UX Designer</span> I was responsible for all user experience strategy and designs. I also led the team through the full design process including research, prototypes, and user testing.
              </p>
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
  );
}
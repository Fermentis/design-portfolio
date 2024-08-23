import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex min-h-screen flex-col">
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-600">Fidelity Investments</p>
          <h1 className="text-3xl font-bold">Fidelity Youth™ App</h1>
          <p className="text-xl text-gray-700">An app to help teens learn the life skills of managing and investing their own money.</p>
        </div>
        <div className="flex flex-row bg-gradient-to-b from-[#301f67] to-[#3b8f3b] justify-center gap-8 pt-16 pb-16">
          <Image
            src="/fidyouthhero1.png"
            width={230}
            height={498}
            className="md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/fidyouthhero2.png"
            width={230}
            height={498}
            className="hidden md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/fidyouthhero3.png"
            width={230}
            height={498}
            className="hidden md:block rounded-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-24 space-y-12 items-center">
          <div className="flex flex-col w-full lg:w-2/3 gap-y-8">
            <div>
              <h1 className="text-l text-gray-800 font-bold">My Role</h1>
              <p className="text-gray-700">As Principal designer on a small team of designers, and as part of a large product team, I was responsible for bringing the project from ideas, to concepts, and refinement all the way through pixel perfect designs and ultimately app release and iterations.</p>
            </div>
            <div>
              <h1 className="text-l text-gray-800 font-bold">Skills</h1>
              <p className="text-gray-700">UI, UX, Prototyping, Concept designs, User Testing</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
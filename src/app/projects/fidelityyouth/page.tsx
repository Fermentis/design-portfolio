import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <div className="w-full bg-neutral-100 py-12">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="space-y-2">
            <p className="text-acorn-500 text-sm font-bold">Fidelity Investments</p>
            <h1 className="text-2xl lg:text-6xl font-bold text-neutral-800">Fidelity Youth™ App</h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-medium">
              A teen-owned brokerage account that gives teens ages 13–17 the power to save, spend, and invest their own money—while letting parents stay connected.
            </p>
            <p className="text-sm text-gray-800 font-bold">iOS & Android app</p>
          </div>
          <div className="flex flex-row justify-center lg:justify-between md:gap-x-4 mt-8">
            <Image
              src="/fidyouthhero1.png"
              width={230}
              height={498}
              className="md:block rounded-xl"
              alt="Fidelity Youth Home screenshot"
            />
            <Image
              src="/fidyouthhero2.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fidelity Youth Invest screenshot"
            />
            <Image
              src="/fidyouthhero3.png"
              width={230}
              height={498}
              className="hidden md:block rounded-xl"
              alt="Fidelity Youth Learn/Education screenshot"
            />
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16">
        <div className="space-y-12">
          <div className="gap-y-8 space-y-8">
            <div>
              <h1 className="text-l text-acorn-500 font-bold">Role</h1>
              <p className="text-neutral-600 font-medium text-xl">
                As the <span className="font-bold">Principal UX Designer</span> on a small team, I led the design process from early-stage ideas and concepts through refinement, high-fidelity design, and final app release — including ongoing iterations.
              </p>
            </div>
            <div>
              <h1 className="text-l text-acorn-500 font-bold">Skills</h1>
              <div className="font-medium text-xl">
                <p className="text-gray-700">+ User experience</p>
                <p className="text-gray-700">+ User interface</p>
                <p className="text-gray-700">+ Prototyping</p>
                <p className="text-gray-700">+ UserTesting</p>
                <p className="text-gray-700">+ Design systems</p>
                <p className="text-gray-700">+ Concept designs</p>
                <p className="text-gray-700">+ Competitive analysis</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
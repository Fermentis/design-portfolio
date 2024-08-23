import TopNavigation from "@/app/ui/topnav";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavigation />
      <main className="flex flex-col min-h-screen items-center mb-24">
        <div className="text-center space-y-2">
          <p className="text-gray-600">Concepts</p>
        </div>
        <div className="flex flex-col col-span-full p-4 md:p-24 space-y-12 items-center">
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-3xl font-bold">Yewwniverse</h1>
            <p className="text-xl text-gray-700">Yewwniverse is a concept travel landing page created for a fictional resort on another planet.</p>
            <Image
              src="/yeww.png"
              width={1440}
              height={4918}
              className="w-full rounded-xl"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-3xl font-bold">MovieSync</h1>
            <p className="text-xl text-gray-700">The MovieSync concept app syncs both all your streaming accounts into a single app for simplicity, but also syncs up your watching socially with your friends. When you search for something to watch it would also search your friends watch list to pair up a streaming watch session.</p>
            <div className="flex flex-row flex-wrap justify-around gap-8">
              <Image
                src="/explainer.png"
                width={375}
                height={620}
                className="rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Image
                src="/addsubscriptions.png"
                width={375}
                height={620}
                className="rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="flex flex-row flex-wrap justify-around gap-8">
              <Image
                src="/feed.png"
                width={375}
                height={620}
                className="rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Image
                src="/matchedfriends.png"
                width={375}
                height={620}
                className="rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div className="flex flex-row">
              <Image
                src="/join.png"
                width={375}
                height={620}
                className="rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-3xl font-bold">Alpen Fondo</h1>
            <p className="text-xl text-gray-700">The Alpen Fondo is a concept race signup and landing page created for a fictional Alps mountain cycling race.</p>
            <Image
              src="/dracarys.png"
              width={1400}
              height={3320}
              className="w-full rounded-xl"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-3xl font-bold">Alpen Fondo</h1>
            <p className="text-xl text-gray-700">The Alpen Fondo is a concept race signup and landing page created for a fictional Alps mountain cycling race.</p>
            <Image
              src="/AlpenFondo.png"
              width={1440}
              height={2989}
              className="w-full rounded-xl"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
import CarList from "./components/CarList";

export default function Home({data}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
      <div className="z-10 items-center justify-between text-3xl lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Jikaven ALPR
        </h1>
      </div>
      <div className="grid lg:max-w-5xl lg:mb-0 lg:grid-cols-2 items-center p-20">
        <div className="relative text-3xl place-items-center group" >
            <p>Automatic</p>
            <p>License</p>
            <p>Plate</p>
            <p>Recognition</p>
            <p>(Service)</p>
        </div>
        <CarList data={[]} />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Upload image
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Fetch the numberplate from your provided image.
          </p>
        </a>

        <a
          href="https://github.com/jikaven/jikalpr"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Repo
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The repo containing all of the code for this service.
          </p>
        </a>

        <a
          href="https://github.com/openalpr/openalpr"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            OpenALPR
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The repo containing the ALPR service used.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/janis-avenins"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            View my LinkedIn profile :)
          </p>
        </a>
      </div>
    </main>
  );
}

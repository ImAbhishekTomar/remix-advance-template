export default function home1() {
  return (
    <>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-extrabold text-white sm:text-slate-900 md:text-3xl dark:sm:text-white">
            Focused on web fundamentals and modern UX, you’re simply going to build better websites
          </h1>
          <p className="text-5xl mb-6 font-extrabold leading-4  text-white">Remix 😎</p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="https://remix.run/img/og.1.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src="https://dashus.typepad.com/.a/6a00d83451739969e201538e785252970b-800wi"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src="https://remix.run/img/og.1.jpg"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
        </div>

        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            onClick={() => {
              location.href = "https://remix.run/docs/en/v1";
            }}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg font-extrabold px-8 py-5 text-center mr-2 mb-2">
            Read the Docs 👨🏻‍💻
          </button>
        </div>
        <p className="mt-4 text-xl leading-2 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          Remix is a full stack web framework that lets you focus on the user interface and work
          back through web fundamentals to deliver a fast, slick, and resilient user experience.
          People are gonna love using your stuff.
        </p>
      </div>
    </>
  );
}

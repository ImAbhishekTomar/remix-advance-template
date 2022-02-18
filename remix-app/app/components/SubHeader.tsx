export function SubHeader(props: { heading: string }) {
  return (
    <header className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">{props.heading}</h1>
      </div>
    </header>
  );
}

import { NavbarTop } from "../components/NavbarTop";
import { SubHeader } from "../components/SubHeader";

export default function Layout(props: any): JSX.Element {
  return (
    <>
      <div className="min-h-full bg-slate-800">
        <NavbarTop />
        <SubHeader heading={"Remix Starter Template"} />
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{props.children}</div>
        </main>
      </div>
    </>
  );
}

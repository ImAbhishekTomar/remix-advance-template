import { NavbarTop } from "../components/NavbarTop";
import { SubHeader } from "../components/SubHeader";
import useSubHeaderHading from "../hooks/useSubHeaderHeading";

export default function Layout(props: any): JSX.Element {
  const [heading] = useSubHeaderHading("Dashboard");
  return (
    <>
      <div className="min-h-full">
        <NavbarTop />
        <SubHeader heading={heading} />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{props.children}</div>
        </main>
      </div>
    </>
  );
}

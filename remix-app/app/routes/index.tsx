import Layout from "~/components/Layout";
import useSubHeaderHeading from "../hooks/useSubHeaderHeading";
import Page1 from "./page1";

export default function Index() {
  const [heading] = useSubHeaderHeading("Dashboard");
  return (
    <>
      <Layout>
        <Page1 />
      </Layout>
    </>
  );
}

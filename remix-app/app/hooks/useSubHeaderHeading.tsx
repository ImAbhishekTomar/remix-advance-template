import { useState } from "react";

const useSubHeaderHeading = (heading: string) => {
  const [data, setData] = useState<string>(heading);
  return [data];
};

export default useSubHeaderHeading;

import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["JavaScript", "NodeJS", "MongoDB", "ExpressJS"];

const DecryptName = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div>{result}</div>;
};
export default DecryptName;

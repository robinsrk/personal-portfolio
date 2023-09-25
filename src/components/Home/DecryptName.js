// import * as React from "react";

// import { useDencrypt } from "use-dencrypt-effect";

// const values = ["JavaScript", "React", "Flutter", "Kotlin", "Jetpack Compose"];

// const DecryptName = () => {
//   const { result, dencrypt } = useDencrypt();

//   React.useEffect(() => {
//     let i = 0;

//     const action = setInterval(() => {
//       dencrypt(values[i]);

//       i = i === values.length - 1 ? 0 : i + 1;
//     }, 2000);

//     return () => clearInterval(action);
//   }, [dencrypt]);

//   return <div>{result}</div>;
// };
// export default DecryptName;

import React from "react";
import Typed from "typed.js";

export default function DecryptName() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const values = [
    "I work on JavaScript",
    "I work on React",
    "I work on Flutter",
    "I work on Kotlin",
    "I work on Jetpack Compose",
  ];

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: values,
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

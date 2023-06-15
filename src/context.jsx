// import { createContext, useState } from "react";
import { createContext } from "react";

// import PropTypes from "prop-types";
const Context = createContext(null)

// const Context = createContext({
  // first: 12,
  // setFirst: () => {},
  // });

// const ContextProvider = ({ children }) => {
//   const [first, setFirst] = useState(12);
//   return (
//     <ContextProvider value={{ first, setFirst }}>{children}</ContextProvider>
//   );
// };

// export { Context, ContextProvider };

export { Context };

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Namaste Everyone React1");
//const heading2 = React.createElement("h2", {}, "Namaste Everyone React2");
//const container = React.createElement("div", {}, [heading, heading2]);
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

//React component
// functional componenet
const Heading2 = () => {
  return <h2>Namaste Everyone React2</h2>;
};

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <Heading2 />
      {Heading2()}
      <h1>Function</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

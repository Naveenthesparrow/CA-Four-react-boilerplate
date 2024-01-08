import { useContext } from "react";
import { ToggleTheme } from "../App";
import QuestionBox from "./QuestionBox";
function UseContext() {
  // Get the theme from the ToggleTheme context
  const theme = useContext(ToggleTheme);
  // Define the theme style based on the theme value
  const themeStyle = {
    backgroundColor: theme ? "black" : "#CBCBCB",
    color: theme ? "grey" : "black",
    padding: "2rem",
    marginTop: "8rem",
    marginLeft: "15rem",
    height: "500px",
    width: "70%",
  };
  // Render the component with the theme style
  return (
    <div>
      <div style={themeStyle}>
        <QuestionBox />
      </div>
    </div>
  );
}

export default UseContext;

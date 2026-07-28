import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//starts with a capital letter
/* React intro components 
1.create a function name is my component.< starts with a capital letter>
  return null
  you have created a react component that returns null.<>
2.create a function name is MyComponent2. this should return a valid html element
  eg a div inside  have h1 with some txt <div> <h1>fav text</h1> </div>
3.using react fragment.create function name is MyComponent3.this should return a react fragment inside multiple html elements eg <><div></div>
*/
function MyComponent() {
  return null; //valid jsx
}
function MyComponent2() {
  return (
    <div>
      <h1>consistency & time is key</h1>
    </div>
  );
}
function MyComponent3() {
  return (
    <>
      <div>
        <div>
          <p>
            "Take time to deliberate,but when the the time for action has
            arrived , stop thinking & go in." By <i>Napoleon Bonaparte</i>
          </p>
        </div>
        <div>
          <h3>Great things take much of your time</h3>
        </div>
      </div>
    </>
  );
}
function parentComponent() {
  return (
    <div>
      <h1>My first react app</h1>

      <MyComponent></MyComponent>
      <MyComponent2></MyComponent2>
      <MyComponent3></MyComponent3>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My first react app</h1>

    
    <MyComponent></MyComponent>
    <MyComponent2></MyComponent2>
    <MyComponent3></MyComponent3>
    <parentComponent></parentComponent>
  </StrictMode>,
);

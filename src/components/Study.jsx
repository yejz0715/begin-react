import React from "react";

const Study = () => {
  return (
    <>
      <div>저는 지금 공부를 하고있습니다. </div>
      <label>
        <input type="checkBox" name="study" value="html" />
        html
      </label>
      <label>
        <input type="checkBox" name="study" value="css" />
        css
      </label>
      <label>
        <input type="checkBox" name="study" value="javaScript" />
        javaScript
      </label>
      <label>
        <input type="checkBox" name="study" value="java" />
        java
      </label>
      <label>
        <input type="checkBox" name="study" value="db" />
        db
      </label>
    </>
  );
};
export default Study;

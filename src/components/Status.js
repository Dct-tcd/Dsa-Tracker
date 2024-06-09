import React, { useState } from "react";

function Status(props) {

  return (
    <div>
      {props.visi == "visible" ? (
        <div className="alert alert-warning flex justify-between" role="alert">
          Try reloading the page inside the topic to remove any discrepancy
          <div>
            <button
              autofocus=""
              className="mr-6"
              type="button"
              aria-label="Dismiss this message"
              onClick={props.handlevisi}
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-x fill-yellow-500 stroke-yellow-500"
              >
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="h-4 bg-transparent border-transparent "
          role="alert"
        ></div>
      )}
    </div>
  );
}

export default Status;

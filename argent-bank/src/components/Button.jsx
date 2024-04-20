import React from "react";

import "../styles/banner.css";

export function Button({content,btnClass}) {
  return (
    <button type="submit" className={btnClass}>
        {content}
    </button>
  );
}
export default Button;

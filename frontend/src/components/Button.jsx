import React from "react";

import "../styles/button.minify.css";

export function Button({ content, btnClass, event, onClick }) {
  return (
    <button type="submit" className={btnClass} onClick={onClick} event={event}>
      {content}
    </button>
  );
}
export default Button;

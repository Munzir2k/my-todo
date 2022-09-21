import React from "react";

export default function Footer() {
  let FooterStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer>
      <p className="bg-dark text-light text-center" style={FooterStyle}>
        Copyright &copy; By Mohammad Munzir
      </p>
    </footer>
  );
}

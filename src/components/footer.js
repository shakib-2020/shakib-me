import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="mt-4 p-3 bg-dark crv-8 text-white bx-shadow footer display-centery rm-md-0 rcrv-md-0"
    >
      {/* <h5 className="text-warning font-weight-bold hidden-lg">
        Let's make your ideas possible !!
      </h5> */}
      <small className="copyright-text">
        Copyright © 2022 Md.Nazmus Shakib
      </small>
      <a href="#top" style={{ color: "white" }}>
        Go to top
      </a>
    </div>
  );
}

export default Footer;

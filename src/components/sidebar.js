import React from "react";

// Sidebar
function SideBar() {
  return (
    <div className="glass-card side-bar">
      <h4 className="name  p-3">
        Md.Nazmus Shakib
        <br />
        <small className="font-weight-normal">Web Developer</small>
      </h4>

      <img
        src="img/profile.png"
        alt="Md.Nazmus Shakib"
        className="img-fluid side-banner"
      />

      <div className="key-points">
        <ul className="text-white pl-5 pr-2 list-unstyled">
          <li className="big"></li>
          <li>
            <span className="font-weight-bold">Contact: </span>
            <br />

            {/* <i className="ion-email text-white"></i> */}
            <span className="contact-info">
              <i className="ion-email text-white"></i> nazshakib01@gmail.com
            </span>
            <br />
            <span className="contact-info">
              <i className="ion-ios-telephone text-white"></i> +880 1739 400729
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Export sidebar
export default SideBar;

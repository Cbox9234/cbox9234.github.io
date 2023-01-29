import React from "react";

export default function CompanyInfo() {
  return (
    <div id="companyinfo" className="companyInfoSection">
      <div className="infoSet">
        <div
          style={{
            backgroundImage: `url('https://cdn.discordapp.com/attachments/886692415572946984/1069213342268395550/img.png')`,
          }}
          className="rCont"
        ></div>
        <div className="lCont">
          <div className="title">Experiences that matter</div>
          <div className="info">
            At LEGiON Platforms we are proud to use cutting-edge technology to
            create immersive and engaging gaming experiences for our users. We
            strive to push the boundaries of what is possible in gaming and
            constantly work to improve the user experience.
          </div>
        </div>
      </div>

      <div className="infoSet">
        <div
          style={{
            backgroundImage: `url('https://media.discordapp.net/attachments/1063575553610883182/1063580761841729646/8.png')`,
          }}
          className="rCont"
        ></div>
        <div className="lCont">
          <div className="title">We work to innovate</div>
          <div className="info">
            LEGiON Platforms is dedicated to innovation in technology,
            constantly pushing the boundaries of what is possible in the gaming
            industry. Our focus on the latest advancements in technology allows
            us to create truly immersive experiences for our users.
          </div>
        </div>
      </div>
    </div>
  );
}

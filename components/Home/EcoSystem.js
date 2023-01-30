import { useRouter } from "next/router";
import React from "react";

const images = [
  "https://media.discordapp.net/attachments/1063575553610883182/1063575643486441542/4.png?width=598&height=598",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069318965953835048/1.png",
  "https://media.discordapp.net/attachments/1063575553610883182/1063575681348411422/9.png?width=598&height=598",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069319166579978261/10.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069319346842763354/11.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069320792376090745/image.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069321166197628988/Untitled_design_1.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069321321768558632/7.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069321356929409196/6.png",
  "https://cdn.discordapp.com/attachments/886692415572946984/1069321440530280448/5.png",
];

export default function EcoSystem() {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };

  const router = useRouter();

  return (
    <section id="legionExperiences" className="aSection legionEcoSystem">
      <div className="title">
        The <span>LEGiON</span> Ecosystem
      </div>
      <div className="info">Join the ultimate ecosystem, built for all</div>
      <button onClick={() => router.push("/company#companyinfo")}>
        Learn More
      </button>

      <div
        // style={{
        //   backgroundImage: `url('https://cdn.discordapp.com/attachments/886692415572946984/1068819094033399828/Moon_Transparent_PNG_Clip_Art-639687983.png')`,
        // }}
        className="card-set"
      >
        <div className="cards">
          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON Portal
            </div>
            <div className="content">
              Play thousands of <br></br>games within clicks
            </div>
            <div className="last-set">
              <button
                onClick={() => handleClick("https://legionportal.netlify.app/")}
              >
                Explore
              </button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('https://media.discordapp.net/attachments/867587464733130812/993640743891636315/render_4.png')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('https://media.discordapp.net/attachments/1063575553610883182/1063575644476297277/3.png?width=663&height=663')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON Distribution
            </div>
            <div className="content">
              Premium games for<br></br> your products
            </div>
            <div className="last-set">
              <button
                onClick={() =>
                  handleClick("https://legiondistribution.netlify.app/")
                }
              >
                Explore
              </button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('${images[0]}')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('${images[1]}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON Publishing
            </div>
            <div className="content">
              Bring your game or<br></br> project to millions
            </div>
            <div className="last-set">
              <button
                onClick={() =>
                  handleClick("https://legionpublishing.netlify.app/")
                }
              >
                Explore
              </button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('${images[2]}')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('${images[3]}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON Advertising
            </div>
            <div className="content">
              Advertise your brand<br></br> to millions
            </div>
            <div className="last-set">
              <button className="disabled">Coming Soon</button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('${images[4]}')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('${images[5]}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON White Label
            </div>
            <div className="content">
              Ultimate white label<br></br> for your products
            </div>
            <div className="last-set">
              <button className="disabled">Coming Soon</button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('${images[6]}')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('${images[7]}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                alt="Logo"
                src="https://cdn.discordapp.com/attachments/918131950106083378/1068795423600410684/logo.png"
              />
              LEGiON Database
            </div>
            <div className="content">
              Database, backend,<br></br> dashboard all in one
            </div>
            <div className="last-set">
              <button className="disabled">Coming Soon</button>
              <div className="rCont">
                <div className="image one">
                  <div
                    style={{
                      backgroundImage: `url('${images[8]}')`,
                    }}
                  ></div>
                </div>
                <div className="image two">
                  <div
                    style={{
                      backgroundImage: `url('${images[9]}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

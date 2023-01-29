import { useRouter } from "next/router";
import React from "react";

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
      <div className="title">The LEGiON Ecosystem</div>
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
        </div>
      </div>
    </section>
  );
}

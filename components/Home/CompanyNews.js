import Image from "next/image";
import bigNewsBg from "../../res/news/big.png";
import newsBg1 from "../../res/news/n1.png";
import newsBg2 from "../../res/news/n2.png";
import newsBg3 from "../../res/news/n3.png";

export default function CompanyNews() {
  return (
    <section className="aSection companyNews">
      <div className="title">Company News</div>
      <div className="newsCont">
        <div className="bigNews">
          <div>
            <div className="news-title">Plundur.io launches alpha</div>
            <div className="news-type">LEGiON NEWS</div>
          </div>
          <Image src={bigNewsBg} className="bg" alt="big news"></Image>
        </div>
        <div className="news">
          <div>
            <div className="news-title">LEGiON Launches Snow Blast</div>
            <div className="news-type">GAME LAUNCH</div>
          </div>
          <Image src={newsBg1} className="bg" alt="news"></Image>
        </div>
        <div className="news">
          <div>
            <div className="news-title">CrazyRun.io Beta is released</div>
            <div className="news-type">BETA LAUNCH</div>
          </div>
          <Image src={newsBg2} className="bg" alt="news"></Image>
        </div>
        <div className="news">
          <div>
            <div className="news-title">TheSeas wraps up beta testing</div>
            <div className="news-type">UPDATE</div>
          </div>
          <Image src={newsBg3} className="bg" alt="news"></Image>
        </div>
      </div>
    </section>
  );
}

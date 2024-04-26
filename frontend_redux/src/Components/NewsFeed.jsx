import { useEffect, useState } from "react";
import "../css/NewsFeed.css";

const newsDummyData = [
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Will Shanklin",
    title:
      "Amazon says a whopping 140 third-party stores in four countries use its Just Walk Out tech",
    description:
      "Amazon published a blog post on Wednesday providing an update about its Just Walk Out technology, which it reportedly pulled from its Fresh grocery stores earlier this month. While extolling Just Walk Out’s virtues as a sales pitch to potential retail partner…",
    url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_12c11d09-77dc-41d7-a0ce-dfe499e21829",
    urlToImage: null,
    publishedAt: "2024-04-17T19:16:50Z",
    content:
      "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Dan DeFrancesco",
    title: "Tesla's awful 2024 is getting much worse",
    description:
      "Fears of layoffs at Tesla had been building along with Wall Street's growing concerns.",
    url: "https://www.businessinsider.com/tesla-bad-year-layoffs-elon-musk-evs-wall-street-robotaxis-2024-4",
    urlToImage:
      "https://i.insider.com/661fa95a49058e669356ce47?width=1200&format=jpeg",
    publishedAt: "2024-04-17T13:28:12Z",
    content:
      "Smith Collection/Gado; Maja Hitij/Getty Images; Alyssa Powell/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newslette… [+7705 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: null,
    title: "Amazon is cutting hundreds of jobs in its cloud computing unit AWS",
    description:
      "The AWS layoffs follow other layoffs that happened at Amazon and its subsidiaries this year, including at Prime Video, the MGM Studios unit and Twitch, the social media platform owned by Amazon.",
    url: "https://www.npr.org/2024/04/04/1242718244/amazon-cutting-jobs-cloud-computing",
    urlToImage:
      "https://media.npr.org/assets/img/2024/04/04/ap24094574121384_wide-2126292842a7dee349a389c2728c3c3313a87c36-s1400-c100.jpg",
    publishedAt: "2024-04-04T05:18:01Z",
    content:
      "Amazon said on April 3, 2024, it's cutting hundreds of jobs in its cloud computing unit AWS as part of a strategic shift.\r\nMichel Spingler/AP\r\nAmazon said Wednesday it's cutting hundreds of jobs in i… [+1495 chars]",
  },
];

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(newsDummyData);
  }, []);
  return (
    <div className="newsFeed">
      <h2>News Feed</h2>
      <div className="container">
        {news.map((n) => {
          return (
            <div className="card">
              {n.urlToImage && <img src={n.urlToImage} alt="news" />}
              <div className="card-content">
                <h3>{n.title}</h3>
                <p>{n.description}</p>
                <button onClick={() => window.open(n.url)}>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsFeed;

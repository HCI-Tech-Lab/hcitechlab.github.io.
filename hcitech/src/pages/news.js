import {news} from '../data/news_data';
import Image from 'next/image';

export default function News() {
    return (
      <div className = "container">
        <div className = "row">
          <div className="col-lg-12 mb-3">
            <div className = "card h-100">
              <div className = "card-body">
                <h2 class="card-title">News</h2>
                <div className = "row news_item">
                  {
                    news.map((news, _) => (
                      <div className="news-item">
                        <div className = "title_news">{news["icon"] == "" ? null : <Image alt = "icon" src = {news["icon"]} width = {news["tall"] ? 41.88 : 25} height = {news["tall"] ? 35 : 25}/>}&nbsp; {news["title"]}</div>
                        <div className="date"> {news["date"]}</div>
                        <div className="context_news mb-3">{news["content"]}</div>
                        {
                          news["images"].map((src, _) => (
                            <Image alt="news_image" src={src} width = {5000} height={150} style={{ width: 'auto', marginRight: '4px' }} />
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
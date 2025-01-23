import SectionContainer from "@/components/section_container";
import Link from "next/link";
import { research_temp } from "@/data/research_data";

export default function Publications() {
    return (
      <SectionContainer>
        {
          Object.keys(research_temp).reverse().map((year, index) => (
            <>
              <h2 className="card-title" style={{color:"rgb(0, 50, 100)"}}>{year}</h2>
              {
                research_temp[year].map((item, index) => (
                  <div className = "row research_item">
                    <div className="col-md-4">
                        <video  className="img-fluid" style={{height:"200px"}} autoPlay loop muted playsInline poster={item['poster']}>
                          {item['demo'] == "" ? "" : <source type="video/mp4" src={item['demo']} />}
                        </video>
                    </div>
                    <div className="col-md-8">
                        <h4><b>{item['title']}</b></h4>
                        <h6><b>AUTHORS</b> {item['authors']}</h6>
                        <h6>{item['status']}<Link className="link-success" href={item['conferenceLink']} target="_blank"> {item['conference']}</Link></h6>
                        {item['award'] == "" ? null : <h6><b>AWARD </b> {item['award']}</h6>}
                        {item['website'] == "" ? null : <Link className="publication-link"  href={item['website']} target="_blank">Project Website</Link>}
                        {item['doi'] == "" ? null : <Link className="publication-link"  href={item['doi']} target="_blank">DOI</Link>}
                        {item['video'] == "" ? null : <Link className="publication-link"  href={item['video']} target="_blank">VIDEO</Link>}
                        {item['pdf'] == "" ? null : <Link className="publication-link"  href={item['pdf']} target="_blank">PDF</Link>}
                        {item['presentation'] == "" ? null : <Link className="publication-link"  href={item['presentation']} target="_blank">PRESENTATION</Link>}
                        {item['media'] == "" ? null : <Link className="publication-link"  href={item['media']} target="_blank">MEDIA</Link>}
                    </div>
                  </div>
                ))
              }
            </>
          ))
        }
        
      </SectionContainer>
    );
  }
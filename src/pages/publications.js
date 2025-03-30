import { useRef, useEffect, useState } from "react";
import SectionContainer from "@/components/section_container";
import Link from "next/link";
import { research_temp } from "@/data/research_data";

export default function Publications() {
    const yearRefs = useRef({});
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        Object.keys(research_temp).forEach(year => {
            yearRefs.current[year] = yearRefs.current[year] || useRef(null);
        });
    }, []);

    const scrollToYear = (year) => {
      if (yearRefs.current[year]) {
          const yOffset = -80; // Adjust based on your navbar height
          const y = yearRefs.current[year].getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Filter options
    const categories = [
        "All",
        "Conference / Journal (peer-reviewed)",
        "Poster / Demo / Workshop",
        "Domestic Conference / Journal",
        "Preprint"
    ];

    return (
        <SectionContainer>
            <div className="row">

                {/* Research Publications List */}
                <div className="col-md-10">
                    {Object.keys(research_temp)
                    .sort((a, b) => {
                        if (a === "2021 and Before") return 1;
                        if (b === "2021 and Before") return -1;
                        return parseInt(b) - parseInt(a);
                    })
                    .filter(year => research_temp[year].some(item => selectedCategory === "All" || item.category === selectedCategory)) // Filter out empty years
                    .map(year => (
                        <div key={year} ref={(el) => (yearRefs.current[year] = el)}>
                            <h2 className="card-title" style={{ color: "rgb(0, 50, 100)" }}>{year}</h2>
                            {research_temp[year]
                                .filter(item => selectedCategory === "All" || item.category === selectedCategory)
                                .map((item, index) => (
                                    <div key={`${year}-${index}`} className="row research_item">
                                        <div className="col-md-4">
                                            <video className="img-fluid" style={{ height: "120px" }} autoPlay loop muted playsInline poster={item.poster}>
                                                {item.demo && <source type="video/mp4" src={item.demo} />}
                                            </video>
                                        </div>
                                        <div className="col-md-8">
                                            <h4><b>{item.title}</b></h4>
                                            <h6><b>AUTHORS:</b> {item.authors}</h6>
                                            <h6>
                                                {item.status}
                                                {item.conferenceLink && (
                                                    <Link className="link-success" href={item.conferenceLink} target="_blank">
                                                        {" "}{item.conference}
                                                    </Link>
                                                )}
                                            </h6>
                                            {item.award &&  <h6 className="d-flex align-items-center">
                                                <img
                                                    src="/img/icon/award_small.png"
                                                    alt="award"
                                                    style={{ width: "20px", height: "20px", marginRight: "5px" }}
                                                    />
                                                <b>AWARD:&nbsp;</b> {item.award}</h6>}
                                            {item.website && <Link className="publication-link" href={item.website} target="_blank">Project Website</Link>}
                                            {item.doi && <Link className="publication-link" href={item.doi} target="_blank">DOI</Link>}
                                            {item.video && <Link className="publication-link" href={item.video} target="_blank">VIDEO</Link>}
                                            {item.pdf && <Link className="publication-link" href={item.pdf} target="_blank">PDF</Link>}
                                            {item.presentation && <Link className="publication-link" href={item.presentation} target="_blank">PRESENTATION</Link>}
                                            {item.media && <Link className="publication-link" href={item.media} target="_blank">MEDIA</Link>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>

                {/* Sidebar for Year Navigation & Tag Filters */}
                <div className="col-md-2">
                  <div className="sticky-top" style={{ top: "80px", height: "calc(100vh - 80px)", overflowY: "auto" }}>
                      <div className="list-group">
                          <h6>Jump to Year:</h6>
                          {Object.keys(research_temp) .sort((a, b) => {
                                    if (a === "2021 and Before") return 1;
                                    if (b === "2021 and Before") return -1;
                                    return parseInt(b) - parseInt(a);
                                }).map(year => (
                              <button key={year} className="list-group-item list-group-item-action category" onClick={() => scrollToYear(year)}>
                                  {year}
                              </button>
                          ))}
                      </div>
                      <br />
                      <div className="list-group">
                          <h6>Filter by Category:</h6>
                          {categories.map(category => (
                              <button
                                  key={category}
                                  className={`list-group-item list-group-item-action category ${selectedCategory === category ? "category-active" : ""}`}
                                  onClick={() => setSelectedCategory(category)}
                              >
                                  {category}
                              </button>
                          ))}
                      </div>
                  </div>
                </div>


            </div>
        </SectionContainer>
    );
}

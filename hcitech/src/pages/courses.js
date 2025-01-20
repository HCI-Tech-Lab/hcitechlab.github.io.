import SectionContainer from "@/components/section_container";
import { courses } from "@/data/course_data";
import Link from "next/link";

export default function Courses() {
    return (
      <SectionContainer>
        <h2 className="card-title">Courses</h2>
        <div className = "row news_item">
          {
            courses.map((course, _) => (
              <div className = "news-item">
                <h5><b>{course["title"]}</b></h5>
                <h5>{course["desc"]}</h5>
                {
                  course["years"].map((year, _) => (
                    <Link href={year[0]} target="_blank">{year[1]}<br/></Link>
                  ))
                }
              </div>
            ))
          }
          
        </div>
      </SectionContainer>
    );
  }
import SectionContainer from "@/components/section_container";
import { courses } from "@/data/course_data";
import {gct565_data} from "@/data/course_data/gct565_data";
import Link from "next/link";

export default function Courses() {
    return (
      <SectionContainer>
        <h2 className="card-title">Courses</h2>
        <div className = "row courses_item">
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
        <div className = "row courses_item">
            <div className = "news-item">
                <h5><b>GCT 565 Augmented Humans</b></h5>
                <h5>This course explores various aspects (interfaces, sensing & haptics, applications) of augmented humans.</h5>
                {
                  gct565_data.map((item, index) => (
                    <Link key = {index} href={`/gct565/${item.course_info.code.toLowerCase()}`} target="_blank">{item.course_info.code}<br/></Link>
                  )) 
                }
            </div>

        </div>

      </SectionContainer>
    );
  }
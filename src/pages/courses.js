import SectionContainer from "@/components/section_container";
import { courses, courses_new, courses_new_new } from "@/data/course_data";
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
          {
            Object.keys(courses_new).map((course, index) => (
              <div key = {index} className = "news-item">
                <h5><b>{course}</b></h5>
                <h5>{courses_new[course].desc}</h5>
                {
                  courses_new[course].items.map((item, index) => (
                    <Link href={`/courses/${item.course_info.code.toLowerCase()}`} target="_blank">{item.course_info.code}<br/></Link>
                  )) 
                }
              </div>
            ))
          }

        </div>

      </SectionContainer>
    );
  }
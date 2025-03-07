import SectionContainer from "@/components/section_container";
import AnnouncementBlock from "./announcement_block";
import CourseTitle from "./course_title";
import ProjectGallery from "./project_gallery";
import CourseInfo from "./course_info";
import CourseSchedule from "./course_schedule";

export default function CourseTemplate({course_info, prof, ta, time, loc, submission, discussion, announcements, projects, schedule}) {
    return (
        <SectionContainer>
            <CourseTitle course_info = {course_info}/>
            <CourseInfo prof = {prof} ta = {ta} submission = {submission} discussion = {discussion} time = {time} loc = {loc}/>
            {announcements.length > 0 ? <AnnouncementBlock announcements={announcements}/> : null}
            {projects.length > 0 ? <ProjectGallery projects = {projects}/> : null}
            <CourseSchedule schedule = {schedule}/>
        </SectionContainer>
    )
}
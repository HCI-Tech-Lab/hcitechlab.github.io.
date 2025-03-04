import CourseTemplate from "@/components/course_template_components/course_template";
import {courses_new, courses_new_new} from "@/data/course_data";

export async function getStaticPaths() {
    const paths = Object.keys(courses_new).flatMap(
        course => (
            courses_new[course].items.map(
                item => ({
                    params: {code: item.course_info.code.toLowerCase()}
                }) 
            )
        )
    )

    return {paths, fallback: false};
}

export async function getStaticProps({ params }) {
    let course = null;

    for (const category of Object.keys(courses_new)) {
        course = courses_new[category].items.find(course => course.course_info.code.toLowerCase() == params.code);
        if (course) {
            break;
        }
    }

    if (!course) {
        return {notFound: true}
    }

    return {
        props: course,
    };
}

export default function CoursePage(props) {
    return <CourseTemplate {...props} />
}
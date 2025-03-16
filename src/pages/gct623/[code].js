import CourseTemplate from "@/components/course_template_components/course_template";
import {gct623_data} from "@/data/course_data/gct623_data";

export async function getStaticPaths() {
    const paths = gct623_data.map(
        course => ({
            params: {
                code: course.course_info.code.toLowerCase()
            }
        })
    )

    return {paths, fallback: false};

}

export async function getStaticProps({ params }) {
    
    let course = gct623_data.find(course => course.course_info.code.toLowerCase() == params.code);

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
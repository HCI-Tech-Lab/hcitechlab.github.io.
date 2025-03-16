import CourseTemplate from "@/components/course_template_components/course_template";
import {ctp445_data} from "@/data/course_data/ctp445_data";

export async function getStaticPaths() {
    const paths = ctp445_data.map(
        course => ({
            params: {
                code: course.course_info.code.toLowerCase()
            }
        })
    )

    return {paths, fallback: false};

}

export async function getStaticProps({ params }) {
    
    let course = ctp445_data.find(course => course.course_info.code.toLowerCase() == params.code);

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
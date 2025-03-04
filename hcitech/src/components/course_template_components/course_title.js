export default function CourseTitle({course_info}) {
    return (
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">{course_info.code}<br />
                                            {course_info.title}
                    </h1></center><br /><br />
                </div>
                <div class="card-body">
                    {course_info.desc}<br />
                </div>
            </div>
        </div>
    )
}
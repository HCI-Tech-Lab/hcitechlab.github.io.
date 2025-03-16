export default function CourseTitle({course_info}) {
    return (
        <div className = "container-fluid mb-3">
            <div className="card h-100">
                <div className="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 className="card-title">{course_info.code}<br />
                                            {course_info.title}
                    </h1></center><br /><br />
                </div>
                <div className="card-body">
                    {course_info.desc}<br />
                </div>
            </div>
        </div>
    )
}
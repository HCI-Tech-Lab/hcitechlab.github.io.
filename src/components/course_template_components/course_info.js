import Link from "next/link";
import { Fragment } from "react";
import PersonName from "./person_name";

export default function CourseInfo({prof, ta, submission, discussion, time, loc}) {
    return (
        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-6 bg-white">
                    <div className="card h-100">
                    <div className="card-header bg-success text-white">
                        Course Staff
                    </div>
                        <div className="card-body">
                        <b>Instructor: 
                            {
                                prof.map(
                                    (item, index) => (
                                        <Fragment key = {index}>
                                            <> </>
                                            <PersonName person = {item}/>
                                            {index < prof.length - 1 ? <>, </> : <></>}
                                        </Fragment>
                                    )
                                )
                            }
                        </b><br />
                        <i>Office Hours: By Appointment</i><br /><br />
                        <b>TAs</b>: {
                                ta.map(
                                    (item, index) => (
                                        <Fragment key = {index}>
                                            <> </>
                                            <PersonName person = {item}/>
                                            {index < ta.length - 1 ? <>, </> : <></>}
                                        </Fragment>
                                    )
                                )
                            } <br />
                        <i>Office Hours: By Appointment</i>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 bg-white">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">
                            Course Info
                        </div>
                        <div className="card-body">
                            <b>Time</b>: {time}<br />
                            <b>Location</b>: {loc}<br />
                            <b>Assignment Submission & Grading</b>: <PersonName person = {submission}/><br />
                            <b>Discussion and Q&A</b>: <PersonName person = {discussion}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Fragment } from "react";
import Link from "next/link";

export default function CourseSchedule({schedule}) {
    return (
        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">Schedule</div><br />
                        <span style={{ color: 'blue' }}>&nbsp;&nbsp;&nbsp;* Blue box indicates activity related lectures (team project, paper seminar, ML lecture)</span>
                        <div className="card-body ta">
                            <table className="table table-bordered text-center text-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-md-1">Week</th>
                                        <th scope="col" className="col-md-1">Date</th>
                                        <th scope="col" className="col-md-4">Topic</th>
                                        <th scope="col" className="col-md-3">Note</th>
                                        <th scope="col" className="col-md-3">Due</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        schedule.map(
                                            (week, index) => (
                                                <Fragment key = {index}>
                                                    <tr>
                                                        <th scope="row" rowSpan="2" className="align-middle">{index + 1}</th>
                                                        <td className="align-middle">{week.day1.date}</td>
                                                        <td className={`align-middle ${week.day1.type == 0 ? null : week.day1.type == 1 ? "table-info" : "table-secondary"}`}>
                                                            {
                                                                week.day1.titles.map(
                                                                    (title, index) => (
                                                                        <Fragment key = {index}>
                                                                            {title}
                                                                            {index == week.day1.titles.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                        <td className="align-middle">
                                                            {
                                                                week.day1.notes.map(
                                                                    (note, index) => (
                                                                        <Fragment key = {index}>
                                                                            {note.reading && (
                                                                                <img
                                                                                src="/img//book-half.svg"
                                                                                alt="reading"
                                                                                style={{ width: "18px", height: "18px", marginRight: "5px" }}
                                                                                />
                                                                            )}
                                                                            {
                                                                                note.link == "" 
                                                                                ? <>{note.name}</> 
                                                                                : <Link href = {note.link} target="_blank">{note.name}</Link>
                                                                                
                                                                            }
                                                                            {index == week.day1.notes.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                        <td className="align-middle">
                                                            {
                                                                week.day1.dues.map(
                                                                    (due, index) => (
                                                                        <Fragment key = {index}>
                                                                            &#9642;{" "}
                                                                            {
                                                                                due.link == "" 
                                                                                ? <>{due.name}</> 
                                                                                : <Link href = {due.link} target="_blank">{due.name}</Link>
                                                                                
                                                                            }
                                                                            {index == week.day1.dues.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">{week.day2.date}</td>
                                                        <td className={`align-middle ${week.day2.type == 0 ? null : week.day2.type == 1 ? "table-info" : "table-secondary"}`}>
                                                            {
                                                                week.day2.titles.map(
                                                                    (title, index) => (
                                                                        <Fragment key = {index}>
                                                                            {title}
                                                                            {index == week.day2.titles.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                        <td className="align-middle">
                                                            {
                                                                week.day2.notes.map(
                                                                    (note, index) => (
                                                                        <Fragment key = {index}>
                                                                            {note.reading && (
                                                                                <img
                                                                                src="/img//book-half.svg"
                                                                                alt="reading"
                                                                                style={{ width: "18px", height: "18px", marginRight: "5px" }}
                                                                                />
                                                                            )}
                                                                            {
                                                                                note.link == "" 
                                                                                ? <>{note.name}</> 
                                                                                : <Link href = {note.link} target="_blank">{note.name}</Link>
                                                                            }
                                                                            {index == week.day2.notes.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                week.day2.dues.map(
                                                                    (due, index) => (
                                                                        <Fragment key = {index}>
                                                                            &#9642;{" "}
                                                                            {
                                                                                due.link == "" 
                                                                                ? <>{due.name}</> 
                                                                                : <Link href = {due.link} target="_blank">{due.name}</Link>
                                                                            }
                                                                            {index == week.day2.dues.length - 1 ? null : <br />}
                                                                        </Fragment>
                                                                    )
                                                                )
                                                            }
                                                        </td>
                                                    </tr>
                                                </Fragment>
                                                
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Fragment } from "react";

export default function AnnouncementBlock({announcements}) {
    return (
        <div className="container-fluid mb-3">
        <div className="row">
            <div className="col-md-12 bg-white">
                <div className="card h-100">
                <div className="card-header bg-success text-white">
                    Announcement
                </div>
                <div className="card-body">
                    {
                        announcements.map(
                            (item, index) => (
                                <Fragment key = {index}>
                                    &#9642; <b style = {{width: "50px", display: "inline-block"}}>{item.date}</b>{item.content}<br />
                                </Fragment>
                            )
                        )
                    }
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}
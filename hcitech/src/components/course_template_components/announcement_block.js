import { Fragment } from "react";

export default function AnnouncementBlock({announcements}) {
    return (
        <div class="container-fluid mb-3">
        <div class="row">
            <div class="col-md-12 bg-white">
                <div class="card h-100">
                <div class="card-header bg-success text-white">
                    Announcement
                </div>
                <div class="card-body">
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
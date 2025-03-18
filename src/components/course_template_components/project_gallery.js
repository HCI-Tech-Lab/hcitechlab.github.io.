import { Fragment } from "react";
import Image from "next/image";
import trophy from "@/dynamic_assets/trophy.jpg";

export default function ProjectGallery({projects}) {
    return (
        <>  
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">Project Gallery</div>
                        <div className="card-body">
                            {
                                projects.map(
                                    (project, index) => (
                                        <Fragment key = {index}>
                                            <div className="row">
                                                <div>
                                                    {
                                                        project.recognition == "" ? null : 
                                                            <h3>
                                                                <Image src={trophy} width = {50} height = {50} alt="trophy" />{" "}
                                                                <span className="badge rounded-pill bg-secondary">{project.recognition}</span>
                                                            </h3>
                                                    }
                                                    <h1>{project.title}</h1>
                                                    <h3>
                                                        Members: {project.members}
                                                        {
                                                            project.slideLink != "" ? 
                                                                <a href={project.slideLink} target="_blank" rel="noreferrer">
                                                                    {" "}[Slide]
                                                                </a> : null
                                                        }
                                                    </h3>
                                                    <div>{project.desc}</div>
                                                    <br />
                                                    {
                                                        project.imageLink === "" ? <iframe
                                                            width="560"
                                                            height="315"
                                                            src={project.videoLink}
                                                            title={project.title}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe> : 
                                                        <img
                                                            className="img-fluid"
                                                            src={project.imageLink}
                                                            style={{ height: "250px" }}
                                                            alt={project.title}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                            <hr />
                                        </Fragment>
                                    )
                                )
                            }

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
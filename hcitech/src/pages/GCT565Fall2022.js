import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT565 Fall 2022<br />
                                            Augmented Humans
                    </h1></center><br /><br />
                </div>
                <div class="card-body">
                The idea of augmenting the human intellect has long trandition. The advancement of digital technologies has enabled physical, cognitive, and perceptual augmentation of humans. This course will introduce concepts and examples related to augmented humans where technologies enhance human capabilities beyond the individual. Students will learn basic research approach and state-of-art works in the field of augmented humans.<br />
                </div>
            </div>
        </div>

        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-6 bg-white">
                    <div class="card h-100">
                    <div class="card-header bg-success text-white">
                        Course Staff
                    </div>
                        <div class="card-body">
                        <b>Instructor: <a href="https://hcidesigner.weebly.com/" target="_blank">Prof. Sang Ho Yoon</a></b><br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp; <i>Office Hours: By Appointment</i><br /><br />
                        <b>TAs</b>: Hyeonho Na <br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp; Eunji Oh<br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp; <i>Office Hours: By Appointment</i>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 bg-white">
                    <div class="card h-100">
                        <div class="card-header bg-success text-white">
                            Course Info
                        </div>
                        <div class="card-body">
                            <b>Time</b>: 1:00-2:30pm Mon/Wed<br />
                            <b>Location</b>: N25 #3229<br />
                            <b>Assignment Submission & Grading</b>: <a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a><br />
                            <b>Discussion and Q&A</b>: <a href="https://classum.com/" target="_blank"><b>Classum</b></a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-12 bg-white">
                    <div class="card h-100">
                    <div class="card-header bg-success text-white">
                        Announcement
                    </div>
                    <div class="card-body">
                        &#9642; <b>12/27</b> Check out the fantastic videos/presentations from Augmented Humans Project in the Project Gallery!<br />
                        &#9642; <b>11/4</b>&nbsp;&nbsp;&nbsp; Final Presentation on 12/5 will be held in N25 #3229 from 12-2:30pm.<br />
                        &#9642; <b>10/24</b>Progress Presentation on 10/31 & 11/2 will be held in N25 #3229.<br />
                        &#9642; <b>9/13</b>&nbsp;&nbsp;&nbsp;Paper Seminar Group & Schedule Announcement<br />
                        &#9642; <b>9/5</b>&nbsp;&nbsp;&nbsp;&nbsp;Reading GroupAnnouncement<br />
                        &#9642; <b>8/29</b>&nbsp;&nbsp;&nbsp;Class Starts!
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-12">
                <div className="card h-100">
                    <div className="card-header bg-success text-white">
                    Project Gallery
                    </div>

                    <div className="card-body">
                    <div className="row">
                        <div>
                        <h1>Avatar-Ego</h1>
                        <h3>Members: Sungwoo Jeon, Seoyoung Kang</h3>
                        <div>
                            Speech-Gesture integration method for enhancement of egocentric pose estimation in VR remote collaboration
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/A6HGqyw1QCM"
                            title="[GCT565 Project] AvatarEgo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h3>
                            <img src="/img/trophy.jpg" alt="trophy" />{" "}
                            <span className="badge rounded-pill bg-secondary">
                            Best Augmented Humans Project
                            </span>
                        </h3>
                        <h1>HAPTICtactoc (HCIKorea 2023)</h1>
                        <h3>Members: Youjin Sung, Kyungeun Jung, Yoonjae Hong</h3>
                        <div>
                            Customizable VR Controller with Multi-input Kinesthetic Haptic Feedback
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/8qIUiHDd8tQ"
                            title="[GCT565 Project] Meta-Blocks"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>AHHA</h1>
                        <h3>Members: Minju Baeck, Kwan Yun</h3>
                        <div>
                            MR Physics Simulation Authoring Tool for Teachers with AR/MR Glasses
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/mg-SmMgKpT8"
                            title="[GCT565 Project] MR.Teacher"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>WEinVR</h1>
                        <h3>Members: Byeoli Choi, Taeyeon Kim, Seungchan Lim</h3>
                        <div>
                            The sense of embodiment derived by Customized full-body avatar in VR Reduces pain
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/U6blNLrL1hc"
                            title="[GCT565 Project] WEinVR Customization"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>CONTEXTuAALs</h1>
                        <h3>Members: Kyungjin Seo, Nicha Vanichvoranun, Emily Liu</h3>
                        <div>
                            A methodology of classifying sounds to objects through awareness of both the physical environmental context and user behavior signals
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ROYv521fjrc"
                            title="[GCT565 Project] CONTEXTuAALS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div >
                        <h1>Echipa</h1>
                        <h3>Members: Bianca Budulacu, Martina Lackova</h3>
                        <div>
                            Vibrotactile glove for improving navigation in the 3D game environment for visually impaired people
                        </div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/WY6hi7w32oc"
                            title="[GCT565 Project] Haptic Glove"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>VR Walking</h1>
                        <h3>
                            Members: Xintong Wu, Aylar Akbari{" "}
                            <a href="./GCT565_Fall2022/Team1.pdf" target="_blank" rel="noreferrer">
                            [Slide]
                            </a>
                        </h3>
                        <div>
                            Assessing General Mental Pressure in Virtual Walking Scenarios Using Human Factors Approach - a Pilot Study
                        </div>
                        <br />
                        <img
                            className="img-fluid"
                            src="./GCT565_Fall2022/Team1.jpg"
                            style={{ height: "250px" }}
                            alt="VR Walking"
                        />
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div >
                        <h1>Team BJ</h1>
                        <h3>
                            Members: Minjae Jo, Ki-Dong Baek{" "}
                            <a href="./GCT565_Fall2022/Team2.pdf" target="_blank" rel="noreferrer">
                            [Slide]
                            </a>
                        </h3>
                        <div>
                            Enabling physical interaction through wrist-mounted haptic controller with force feedback
                        </div>
                        <br />
                        <img
                            className="img-fluid"
                            src="./GCT565_Fall2022/Team2.jpg"
                            style={{ height: "250px" }}
                            alt="Team BJ"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


    </SectionContainer>
  );
}
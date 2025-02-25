import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT565 Fall 2023<br />
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
                        <b>Instructor: <a href="https://sanghoy.com/" target="_blank">Prof. Sang Ho Yoon</a></b><br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp; <i>Office Hours: By Appointment</i><br /><br />
                        <b>TAs</b>: Youjin Sung <br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp;  Kyungjin Seo<br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp;  Jina Kim<br />
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
                            <b>Time</b>: 9:00-10:30am Tue/Thu<br />
                            <b>Location</b>: N5 #2332<br />
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
                        <h3>
                            <img src="/img/trophy.jpg" alt="trophy" />{" "}
                            <span className="badge rounded-pill bg-secondary">Best Augmented Humans Project (Best)</span>
                        </h3>
                        <h1>Athem</h1>
                        <h3>Members: Yi Hyung Il, Yi Hyung Wook, Kwak Dong Kyu</h3>
                        <div>Thermal Illusions in VR: Enhancing Perception of Distance and VelocitySpeech-Gesture integration method for enhancement of egocentric pose estimation in VR remote collaboration</div>
                        <br />
                        <iframe
                            width="560" height="315"
                            src="https://www.youtube.com/embed/5OPypDY-G3k" title="[GCT565 Project] AvatarEgo"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>h(eye)de</h1>
                        <h3>Members: Min-yung Kim, Yohan Lim, Kun Woo Song</h3>
                        <div>Collision Prevention in Diminished Reality through the Use of Peripheral Vision</div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/PDGqpaoq7VA" title="[GCT565 Project] Meta-Blocks"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>Teams JMT</h1>
                        <h3>Members: Junghoon Seo, Tamana Pirzad, Minji Park <a href="./GCT565_Fall2023/Team1.pdf" target="_blank">[Slide]</a></h3>
                        <div></div>
                        <br />
                        <img class="img-fluid" src="./GCT565_Fall2023/Team1.jpg" style={{height: "250px"}} />
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>OddEye</h1>
                        <h3>Members: Jeeseung Ryu, Minhong Jeong, Seungmin Lee</h3>
                        <div>Communication Enhancement in VR Multi-talker Environment using EEG-Based Auditory Attention Decoding</div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/T95e0fDtgoE" title="[GCT565 Project] WEinVR Customization"
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
                            <span className="badge rounded-pill bg-secondary">Best Augmented Humans Project (Runner-up)</span>
                        </h3>
                        <h1>The Augmenters</h1>
                        <h3>Members: Hyunyoung Han, Jisu Yim, Eunhee Jeong</h3>
                        <div>You Only Look at Yourself: Real-time Visual and Haptic Guidance System for Golf Swing in Virtual RealityA methodology of classifying sounds to objects through awareness of both the physical environmental context and user behavior signals</div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/F4O0P7j7Nj4" title="[GCT565 Project] CONTEXTuAALS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div >
                        <h1>Fresh</h1>
                        <h3>Members: Zosia Marciniak, Hojeong Lee, Fangqing Li <a href="./GCT565_Fall2023/Team2.pdf" target="_blank">[Slide]</a></h3>
                        <div>Multimodal Haptic Display for Varying Texture Perception in Virtual Reality using Vibrotactile and Thermal FeedbackVibrotactile glove for improving navigation in the 3D game environment for visually impaired people</div>
                        <br />
                        <img class="img-fluid" src="./GCT565_Fall2023/Team2.jpg" style={{height: "250px"}}/>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div>
                        <h1>Team VC</h1>
                        <h3>Members: Hyunsong Kwon, Pooseung Koh, Vanessa Tan</h3>
                        <div>Enhancing Participation in VR Concerts through Motion Interaction and Immersive Audio</div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/qGL8z7rRI_o" title="[GCT565 Project] CONTEXTuAALS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div >
                        <h1>RealityRifters</h1>
                        <h3>Members: Ryan Gallagher, David Rudebjer, Yong Won Choi</h3>
                        <div>MARIMOGOTCHI: Harnessing the Fusion of Nature and Technology for Interactive Environmental Engagement</div>
                        <br />
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/3cjT2TmyFYI" title="[GCT565 Project] CONTEXTuAALS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
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
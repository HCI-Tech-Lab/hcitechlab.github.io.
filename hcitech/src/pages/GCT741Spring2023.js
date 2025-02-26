import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT741 Spring 2023<br />Interaction Sensing Principle & Application</h1></center><br /><br />
                </div>
                <div class="card-body">
                  This course will educate core principles of 3D & Physical sensing adopted for human-computer interaction. We will cover basic optics for 3D sensing and basic knowledge of each component for physical sensing. Also, we will look at applications where 3D & physical sensing is combined to provide interaction.<br />
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
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <b><a href="https://sites.google.com/view/damislab" target="_blank">Prof. Jae Sang Hyun</a></b><br />
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <i>Office Hours: By Appointment</i><br/><br/>
                        <b>TAs</b>: Hyuckjin Jang (KAIST) <br/>
                                        &ensp;&ensp;&ensp;&ensp; <i>Office Hours: By Appointment</i>
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
                            <b>Location</b>: Zoom (N5#2332 if needed)<br />
                            <b>Assignment Submission & Grading</b>: <a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a><br />
                            <b>Discussion and Q&A</b>: <a href="https://classum.com/" target="_blank"><b>Classum</b></a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="card h-100">
                      <div class="card-header bg-success text-white">Project Gallery</div>
                        <div class="card-body">

                          <div class="row">
                            <div>
                                <h1>MetaHands</h1>
                                <h3> Members: Kyungjin Seo,	Jeonghoon Seo </h3>
                                <div> sEMG based Simultaneous Estimation of Hand Pose and Palm Force </div>
                                <br/>
                                <iframe 
                                  width="560" 
                                  height="315" 
                                  src="https://www.youtube.com/embed/fS6a6rfNG5M?list=PLsnyS9wZul9Yl3K6dzoIaOJGkkA37WWt-" 
                                  title="[GCT741/MEU5062] sEMG based Simultaneous Estimation of Hand Pose and Palm Force"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen />
                              </div>
                          </div>
                          <hr/>

                          <div class="row">
                            <div>
                                <h1>InFinIt (ISMAR 2023 Poster)</h1>
                                <h3> Members: Jina Kim, Nicha Vanichvoranun </h3>
                                <div> Swiped-it!: One-handed Thumb-tip Interaction for Text Editing in XR </div>
                                <br/>
                                <iframe 
                                  width="560" 
                                  height="315" 
                                  src="https://www.youtube.com/embed/SFiDFJFhAPY?list=PLsnyS9wZul9Yl3K6dzoIaOJGkkA37WWt-" title="[GCT741] InFinIt"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen />
                              </div>
                          </div>
                          <hr/>

                          <div class="row">
                            <div>
                                <h1>Ch3 Game</h1>
                                <h3>Members: Sehoon Tak, Donghoon Shin, Mincheol Choi, Jeonghyeop Son</h3>
                                <br/>
                                <iframe 
                                  width="560" 
                                  height="315" 
                                  src="https://www.youtube.com/embed/5Us7tf8LCeo?list=PLsnyS9wZul9Yl3K6dzoIaOJGkkA37WWt-" title="[GCT741/MEU5062]  Ch3 Game"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen />
                              </div>
                          </div>
                          <hr/>

                          <div class="row">
                            <div>
                                <h1>Sound Trigger Recognition</h1>
                                <h3>Members: Minseong Kim, Chanjoon Park, Sanghoon Jeon, Byeongseok Kim</h3>
                                <br/>
                                <iframe 
                                  width="560" 
                                  height="315" 
                                  src="https://www.youtube.com/embed/IXMEx_t4F_M?list=PLsnyS9wZul9Yl3K6dzoIaOJGkkA37WWt-" title="[GCT741/MEU5062] Sound Trigger Recognition"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen />
                              </div>
                          </div>
                          <hr/>

                          <div class="row">
                            <div>
                                <h1>Smart Sensing Gloves</h1>
                                <h3>Members: Jinhui An, Sunghun Kim, Keunhee Cho</h3>
                                <br/>
                                <iframe 
                                  width="560" 
                                  height="315" 
                                  src="https://www.youtube.com/embed/mWWUqPf3IKo?list=PLsnyS9wZul9Yl3K6dzoIaOJGkkA37WWt-" title="[GCT741/MEU5062] Smart Sensing Gloves"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen />
                              </div>
                          </div>
                          <hr/>
                          
                         </div>
                       </div>
                  </div>
              </div>
          </div>

    </SectionContainer>
  );
}
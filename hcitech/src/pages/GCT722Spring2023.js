import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT722 Spring 2023<br />Interactive Haptic Technologies</h1></center><br /><br />
                </div>
                <div class="card-body">
                This course will cover interactive haptic technologies for XR/AR/VR, Mobile/Ubiquitous Computing, and Tangible & Object Interfaces. Primarily, we will go through the theoretical background and application of different sensing and haptic technologies along with perception theory. The course will cover associated technical evaluations and user study methods and state-of-art advanced interactive technologies.<br />
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
                        <b>TAs</b>: Jinwook Kim, Haemin Kim, Kyungeun Jung
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
                <div class="col-md-12">
                    <div class="card h-100">
                      <div class="card-header bg-success text-white">Project Gallery</div>

                        <div class="card-body">
                            <div class="row">
                                <div >
                                    <h3><img src="../img/trophy.jpg" /> <span class="badge rounded-pill bg-secondary">Best Haptic Idea</span>&nbsp;&nbsp;<img src="../img/like.jpg" /><span class="badge rounded-pill bg-secondary">Cool Video</span></h3>
                                    <h1>Weekendo</h1>
                                    <h3>Members: Doyo Choi, Sungbaek Kim</h3>
                                    <div>EMPop: Electromagnetic Actuation for Augmented Projection Mapping</div><br/>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/vx0_V1mBSDU?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                                        title="[GCT722] EMPop" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen 
                                    />
                                </div>
                            </div>
                            <hr/>

                      <div class="row">
                        <div >
                            <h1>Xensation (ISMAR 2023 Poster)</h1>
                            <h3>Members: Kyungjin Seo, Yeonsu Kim, Nicha Vanichvoranun</h3>
                            <div> GoGoHand+: Designing Haptic Feedback to Enhance the GoGo Hand Interaction Technique </div>
                            <br/>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/RM-1zAk3iyw?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                                title="[GCT722] GoGoHand+" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                      </div>
                      <hr/>

                      <div class="row">
                      <div >
                          <h1>CITPAH</h1>
                          <h3>Members: Ki-Dong Baek, Yewon Lee, Yong Won Choi</h3>
                          <div> Estimating the Role of Thickness in Enhancing Artistic Experiences Through Haptic Collage: A Multisensory Approach in Virtual Reality </div>
                          <br/>
                          <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/YoabS4z4fNY?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                            title="[GCT722] CITPAH" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            />
                        </div>
                    </div><hr/>

                    <div class="row">
                      <div >
                       <h3><img src="../img/trophy.jpg" /> <span class="badge rounded-pill bg-secondary">Best Haptic Idea</span></h3>
                          <h1>Haptician</h1>
                          <h3>Members: Youjin Sung, Taeyeon Kim,	Dongkyu Kwak</h3>
                          <div>Deep-Texture: A Foldable Haptic Ring for Shape and Texture Rendering in Virtual Reality</div>
                          <br/>
                          <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/EVGpitmeL4o?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                            title="[GCT722] Deep-Texture" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            />
                        </div>
                     </div><hr/>

                    <div class="row">
                      <div >
                          <h1>Haptics is the future</h1>
                          <h3>Members: Minyung Kim, Soyeong Yang, Linda Sinani</h3>
                          <div> HaptoRelax: Haptic Feedback for Enhancing Human Touch in VR Relaxation Using SMA </div>
                          <br/>
                          <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/dUzEfDyQXyE?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" title="[GCT722] HaptoRelax" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            /> 
                      </div>
                    </div><hr/>

                    <div class="row">
                      <div>
                          <h1>ErGO</h1>
                          <h3> Members: Erik Jonathan, Karin Rizky Irminanda </h3>
                          <div> Enhancing VR Assembly Simulation Realism with Weight Illusion and Force Exertion </div>
                          <br/>
                          <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/nMH6W4Qd468?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                            title="[GCT722] ErGO" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                      </div>
                    </div><hr/>

                    <div class="row">
                      <div>
                          <h1>Haptriks</h1>
                          <h3> Members: Hyung IL Yi,	Atish Waghwase,	Vera Janneke Jansen </h3>
                          <div> Controller Adaptation to Enhance Haptic Feedback for Archery in Virtual Reality </div>
                          <br/>
                          <iframe 
                            width="560" 
                            eight="315" 
                            src="https://www.youtube.com/embed/x0dAXSfRMB4?list=PLsnyS9wZul9YJUW0gtgbLOoz6YdjA74Jk" 
                            title="[GCT722] Haptriks" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                        </div>
                    </div><hr/>


                         </div>
                       </div>
                    </div>
                </div>
              </div>

    </SectionContainer>
  );
}
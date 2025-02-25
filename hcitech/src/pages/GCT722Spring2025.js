import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT722 Spring 2025<br />Interactive Haptic Technologies</h1></center><br /><br />
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
                        <b>TAs</b>: Youjin Sung <br/>
                            &ensp;&ensp;&ensp;&ensp;&nbsp; Dongkyu Kwak<br/>
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
                            <b>Time</b>: 10:30am-12:00pm Tue/Thu<br />
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
                        <div class="card-header bg-success text-white">Announcement</div>
                        <div class="card-body">
                            &#9642; <b>2/25</b>&nbsp;&nbsp;&nbsp;Class Starts!
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="card h-100">
                        <div class="card-header bg-success text-white">Schedule</div> <br/>
                        <span style={{color:"blue"}}>&nbsp; &nbsp; &nbsp; * Blue box indicates team project related lectures</span>
                        <div class="card-body ta">
                            <table class="table table-bordered text-center text-responsive">
                                <thead>
                                  <tr>
                                    <th scope="col" class="col-md-1">Week</th>
                                    <th scope="col" class="col-md-1">Date</th>
                                    <th scope="col" class="col-md-4">Topic</th>
                                    <th scope="col" class="col-md-4">Note</th>
                                    <th scope="col" class="col-md-2">Due</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">1</th>
                                        <td class = "align-middle">2/25</td>
                                        <td class = "align-middle">Introduction & Course Overview</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://forms.gle/4ULWNEgQxPPShTtu9" target="_blank">Course Sign Up</a> due by 2/27(Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">2/27</td>
                                        <td class="align-middle">Tactile Interface I</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">2</th>
                                        <td class = "align-middle">3/4</td>
                                        <td class="align-middle table-info">Project Kick-off Workshop</td>
                                        <td class = "align-middle"><a href="https://klms.kaist.ac.kr/" target="_blank">Reading Group Announcement</a></td>
                                        <td class = "align-middle">&#9642; Team Formation Activity Form due by 3/3(Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/6</td>
                                        <td class="align-middle">Tactile Interface II</td>
                                        <td class = "align-middle">HW#1 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)<br/>
                                        <img src="../img/book-half.svg" /> Choi et al. <a href="https://doi.org/10.1109/JPROC.2012.2221071" target="_blank">"Vibrotactile Display: Perception, Technology, and Applications"</a>, Proceedings of the IEEE, 2012</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">3</th>
                                        <td class = "align-middle">3/11</td>
                                        <td class="align-middle">Tactile Interface III</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle">&#9642;<a href="https://klms.kaist.ac.kr/" target="_blank">HW#1</a> due by 3/11(Mon) 11:59pm<br />
                                        &#9642; <a href="https://forms.gle/CqLLwnsQLpcGHuFS7" target="_blank">Project Team Sign Up</a> due by 3/11(Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/13</td>
                                        <td class="align-middle">Kinesthetic Interface I</td>
                                        <td class = "align-middle">Topic Presentation Group Schedule Announement<br/>
                                        <img src="../img/book-half.svg"/> Preechayasomboon et al. <a href="https://doi.org/10.1109/JPROC.2012.2221071" target="_blank">"Haplets: Finger-worn wireless and low-encumbrance vibrotactile haptic feedback for virtual and augmented reality"</a>, Frontiers in Virtual Reality, 2021<br/>
                                        HW#2 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Reading Response (RR)</a> due by 3/13(Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">4</th>
                                        <td class = "align-middle">3/18</td>
                                        <td class="align-middle table-info">Topic Presentation#1<br/>Kinesthetic Interface II</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/> Hinchet et al. <a href="https://doi.org/10.1145/3242587.3242657" target="_blank">"DextrES: Wearable Haptic Feedback for Grasping in VR via a Thin Form-Factor Electrostatic Brake"</a>, UIST 2019</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 3/18 (Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/20</td>
                                        <td class = "align-middle table-info">Project Proposal Q&A</td>
                                        <td class = "align-middle">Individual Team Meeting</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#2</a> due by 3/21(Fri) 11:59pm<br/>&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B</a> due by 3/20 (Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">5</th>
                                        <td class = "align-middle">3/25</td>
                                        <td class = "align-middle table-info">Topic Presentation#2<br/>Project Proposal Q&A</td>
                                        <td class = "align-middle">Individual Team Meeting</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/27</td>
                                        <td class = "align-middle table-info">Project Proposal Presentation</td>
                                        <td class = "align-middle">Proposal Presentation Schedule</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">6</th>
                                        <td class = "align-middle">4/1</td>
                                        <td class="align-middle">Haptic Rendering I</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg" /> Park et al. <a href="https://doi.org/10.1145/3173574.3173832" target="_blank">"Tactile Information Transmission by 2D Stationary Phantom Sensations"</a>, CHI 2018</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 3/31 (Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">4/3</td>
                                        <td class = "align-middle table-info">Haptic Rendering II<br/>Topic Presentation#3</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg" /> Shao et al. <a href="https://doi.org/10.1073/pnas.1520866113" target="_blank">"Spatial patterns of cutaneous vibration during whole-hand haptic interactions"</a>, PNAS 2016</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">7</th>
                                        <td class = "align-middle">4/8</td>
                                        <td class="align-middle">Haptic Perception I</td>
                                        <td class = "align-middle">HW#3 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B</a> due by 4/7 (Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class="align-middle">4/10</td>
                                        <td class="align-middle table-info">Haptic Perception II<br />Topic Presentation#4</td>
                                        <td class="align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#3</a> due by 4/15(Sun) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">8</th>
                                        <td>4/15</td>
                                        <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4/17</td>
                                        <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg" /> Son et al. <a href="https://doi.org/10.1109/TVCG.2023.3247068" target="_blank">"Upper Body Thermal Referral and Tactile Masking for Localized Feedback"</a>, TVCG 2023</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">9</th>
                                        <td>4/22</td>
                                        <td class = "align-middle">Haptic Illusions</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 4/21 (Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">4/24</td>
                                        <td class = "align-middle table-info">Topic Presentation#5<br/>Project Progress Q&A</td>
                                        <td>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">10</th>
                                        <td class = "align-middle">4/29</td>
                                        <td class = "align-middle table-info">Project Progress Presentation</td>
                                        <td class = "align-middle">Presentation Schedule</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Presentation Slides</a><br /> due by 4/28(Mon) 12pm (All Teams)</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/1</td>
                                        <td class = "align-middle table-info">Project Progress Feedback </td>
                                        <td class = "align-middle">Feedback Schedule</td>
                                        <td class = "align-middle">
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Audience Evaluaion</a> due by 5/1(Thu) 11:59pm<br/>
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Report</a> due by 5/4(Sun) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">11</th>
                                        <td class = "align-middle">5/6</td>
                                        <td class="align-middle">Quantitative and Qualitative Study</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/8</td>
                                        <td class="align-middle ">Emerging Haptics I</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/> Azmandian et al. <a href="https://doi.org/10.1145/2858036.2858226" target="_blank">"Haptic Retargeting: Dynamic Repurposing of Passive Haptics for Enhanced Virtual Reality Experiences"</a>, CHI 2016</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B</a> due by 5/11 (Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">12</th>
                                        <td class = "align-middle">5/13</td>
                                        <td class = "align-middle table-info">Emerging Haptics II<br/>Topic Presentation#6</td>
                                        <td class = "align-middle">HW#4 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/15</td>
                                        <td class="align-middle table-secondary">No class (Admission Interview)</td>
                                        <td class="align-middle">Substitute with CT Scape Participation<br/>
                                        <img src="../img/book-half.svg"/> Bau et al. <a href="https://doi.org/10.1145/1866029.1866074" target="_blank">"TeslaTouch: electrovibration for touch surfaces"</a>, UIST 2010</td>
                                        <td class="align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 5/18 (Thu) 11:59pm</td>
                                    </tr>
                                        <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">13</th>
                                        <td class = "align-middle">5/20</td>
                                        <td class="align-middle table-info">XR Haptics Design Guidelines	<br />Topic Presentation#7</td>
                                        <td class="align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/22</td>
                                        <td class = "align-middle">XR Haptics Design Guidelines (Recorded)</td>
                                        <td class = "align-middle">  <img src="../img/book-half.svg" /> Shen et al. <a href="https://doi.org/10.1145/3491102.3501960" target="_blank">"Mouth Haptics in VR using a Headset Ultrasound Phased Array"</a>, CHI 2022</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#4</a> due by 5/24(Wed) 11:59pm<br />
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 5/25 (Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">14</th>
                                        <td class = "align-middle">5/27</td>
                                        <td class="table-secondary">No class (National Holiday)</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td>5/29</td>
                                        <td class = "align-middle table-info">Topic Presentation#8<br />Applications</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">15</th>
                                        <td class ="align-middle">6/3</td>
                                        <td class="align-middle table-info">Final Presentation Preparation</td>
                                        <td class = "align-middle">Final Project Q&A</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                        <tr>
                                        <td class = "align-middle">6/5</td>
                                        <td class = "align-middle table-info">Final Presentation</td>
                                        <td class = "align-middle">Presentation Schedule</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Presentation Slides</a> due by 6/6 (Tue) 11:59pm<br />
                                                                &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Presentation Audience Evaluation</a> due by 6/7 (Wed) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">16</th>
                                        <td>6/10</td>
                                        <td class="align-middle table-secondary">No class (Finals Week)</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td>6/12</td>
                                        <td class="align-middle table-secondary">No class (Finals Week)</td>
                                        <td></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Report & Peer Evaluation</a> due by 6/14 (Wed) 11:59pm<br />
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Video</a> due by 6/14 (Wed) 11:59pm<br />
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Video Audience Evaluation</a> due by 6/16 (Fri) 12pm
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </SectionContainer>
  );
}
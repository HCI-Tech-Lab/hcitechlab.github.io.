import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div className="card h-100">
                <div className="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 className="card-title">GCT623/MV623 Spring 2024<br />Interaction Sensing Principle & Application</h1></center><br /><br />
                </div>
                <div className="card-body">
                  This course will educate core principles of 3D & Physical sensing adopted for human-computer interaction. We will cover basic optics for 3D sensing and basic knowledge of each component for physical sensing. Also, we will look at applications where 3D & physical sensing is combined to provide interaction.<br />
                </div>
            </div>
        </div>

        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-6 bg-white">
                    <div className="card h-100">
                    <div className="card-header bg-success text-white">
                        Course Staff
                    </div>
                        <div className="card-body">
                        <b>Instructor: <a href="https://sanghoy.com/" target="_blank">Prof. Sang Ho Yoon</a></b><br />
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <b><a href="https://sites.google.com/view/damislab" target="_blank">Prof. Jae Sang Hyun</a></b><br />
                        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <i>Office Hours: By Appointment</i><br/><br/>
                        <b>TAs</b>: Hyuckjin Jang (KAIST) <br/>
                                        &ensp;&ensp;&ensp;&ensp; <i>Office Hours: By Appointment</i>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 bg-white">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">
                            Course Info
                        </div>
                        <div className="card-body">
                            <b>Time</b>: 9:00-10:30am Mon/Wed<br />
                            <b>Location</b>: Zoom (N5#2332 if needed)<br />
                            <b>Assignment Submission & Grading</b>: <a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a><br />
                            <b>Discussion and Q&A</b>:  Email to instructors
                        </div>
                    </div>
                    </div>
            </div>
        </div>

        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-12 bg-white">
                    <div className="card h-100">
                    <div className="card-header bg-success text-white">
                        Announcement
                    </div>
                    <div className="card-body">
                        &#9642; <b>3/4</b>&nbsp;&nbsp;&nbsp;Class Starts!<br />
                        &#9642; <b>3/4</b> &nbsp; <a href="https://forms.gle/9dSzXXU5VKCiAK1s5" target="_blank">Course Sign-up</a> due 3/6 11:59pm<br />
                        &#9642; <b>3/25</b>&nbsp; Proposal Presentation Slides due 3/26 11:59pm (All Teams)<br />
                        &#9642; <b>4/21</b>&nbsp;&nbsp; Submit Progress Presentation Slides to <a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a> due by 4/28(Sun) 11:59pm.<br />
                        &#9642; <b>4/21</b>&nbsp;&nbsp; <a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Progress Presentation</a> on <b>4/29</b> will be held in N25 #3229 & Zoom.
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
                                        <td class = "align-middle">2/26</td>
                                        <td class = "table-secondary align-middle">No Class</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">2/28</td>
                                        <td class = "table-secondary align-middle">No Class</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">2</th>
                                        <td class = "align-middle">3/4</td>
                                        <td class="align-middle">Introduction & Course Overview</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                        <tr>
                                        <td class = "align-middle">3/6</td>
                                        <td class="align-middle">Introduction to Physical Sensing</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">3</th>
                                        <td class = "align-middle">3/11</td>
                                        <td class="align-middle table-info">Project Workshop</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg" />Grosse-Puppendahl et al. <a href="https://doi.org/10.1145/3025453.3025808" target="_blank">"Finding Common Ground: A Survey of Capacitive Sensing in Human-Computer Interaction"</a>, CHI 2017</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 3/14(Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/13</td>
                                        <td class="align-middle ">Pressure/Touch Sensor</td>
                                        <td class = "align-middle">HW#1 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">4</th>
                                        <td class = "align-middle">3/18</td>
                                        <td class="align-middle">Pressure/Touch Sensor</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                        <tr>
                                        <td class = "align-middle">3/20</td>
                                        <td class = "align-middle">Topic Presentation #1</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg" />Xu et al. <a href="https://dl.acm.org/doi/10.1145/3491102.3501904" target="_blank">"Enabling Hand Gesture Customization on Wrist-Worn Devices"</a>, CHI 2022</td>
                                        <td class = "align-middle"><a href="https://klms.kaist.ac.kr/" target="_blank">HW#1</a> due by 3/22(Fri) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">5</th>
                                        <td class = "align-middle">3/25</td>
                                        <td class = "align-middle table-info">Project Proposal Q&A</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Individual Team Meeting</a></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">3/27</td>
                                        <td class = "align-middle table-info">Project Proposal Presentation</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Proposal Presentation Schedule</a></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Proposal Presentation Slides</a><br/> due by 3/26(Tue) 11:59pm (All Teams)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">6</th>
                                        <td class = "align-middle">4/1</td>
                                        <td class="align-middle table-info">Project Proposal Feedback</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Individual Team Meeting</a></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 4/1(Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">4/3</td>
                                        <td class = "align-middle">Inertial Measurement Unit Sensor (Recorded Video)</td>
                                        <td class = "align-middle">HW#2 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">7</th>
                                        <td class = "align-middle">4/8</td>
                                        <td class="align-middle">Topic Presentation #2<br/>
                                                                Bioacoustic Sensing</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/>Laput et al. <a href="https://doi.org/10.1145/2984511.2984582" target="_blank">"ViBand: High-Fidelity Bio-Acoustic Sensing Using Commodity Smartwatch Accelerometers"</a>, UIST 2016</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class="align-middle">4/10</td>
                                        <td class="table-secondary align-middle">No Class</td>
                                        <td class="align-middle"></td>
                                        <td class="align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#2</a> due by 4/10(Wed) 11:59pm<br/>
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 4/11(Thu) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">8</th>
                                        <td>4/15</td>
                                        <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class="align-middle">4/17</td>
                                        <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                        <td class = "align-middle">HW#3 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 4/18(Thu) 11:59pm</td>
                                    </tr>

                                    <tr>                                    
                                        <th scope="row" rowspan="2" class = "align-middle">9</th>
                                        <td>4/22</td>
                                        <td class = "align-middle">Topic Presentation#3<br/>
                                                                Physiological Sensing</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/>Eddy et al. <a href="https://doi.org/10.1145/3544548.3580962" target="_blank">"A Framework and Call to Action for the Future Development of EMG-Based Input in HCI"</a>, CHI 2023</td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">4/24</td>
                                        <td class = "align-middle">Introduction to 3D Sensor</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">10</th>
                                        <td class = "align-middle">4/29</td>
                                        <td class = "align-middle table-info">Project Progress Presentation</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                        <td class = "align-middle">&#9642;  <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Presentation Slides</a> due by 4/28(Sun) 11:59pm (All Teams)<br/>
                                                                &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#3</a> due by 4/28(Sun) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/1</td>
                                        <td class = "align-middle table-info">Project Progress Feedback</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Feedback Schedule</a></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">11</th>
                                        <td class = "align-middle">5/6</td>
                                        <td class="table-secondary align-middle">No Class</td>
                                        <td class="align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 5/6(Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/8</td>
                                        <td class="align-middle ">Topic Presentation#4<br/>Vision-based Sensor: Stereo Vision I</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/> Li et al. <a href="https://doi.org/10.1109/CVPR52688.2022.01578" target="_blank">"Practical Stereo Matching via Cascaded Recurrent Network with Adaptive Correlation"</a>, CVPR, 2012</td>
                                        <td class="align-middle"></td>
                                        </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">12</th>
                                        <td class = "align-middle">5/13</td>
                                        <td class = "align-middle">Vision-based Sensor: Stereo Vision II</td>
                                        <td class="align-middle">HW#4 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)<br/>
                                        <img src="../img/book-half.svg"/> Chen et al. <a href="https://doi.org/10.1016/j.optlaseng.2021.106763" target="_blank">"Comparative study on 3D optical sensors for short range applications"</a>, Optics and Lasers in Engineering, 2022</td>
                                        <td class="align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Report</a> due by 5/12(Sun) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/15</td>
                                        <td class="table-secondary align-middle">No Class</td>
                                        <td class="align-middle"></td>
                                        <td class="align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">13</th>
                                        <td class = "align-middle">5/20</td>
                                        <td class = "align-middle">Vision-based Sensor: Structured light Sensor</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/> An et al. <a href="https://doi.org/10.1364/OE.24.018445" target="_blank">"Pixel-wise absolute phase unwrapping using geometric constraints of structured light system"</a>, Optics Express, 2016</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 5/20(Mon) 11:59pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/22</td>
                                        <td class = "align-middle">Topic Presentation#5<br/>Digital Fringe Projection (1): Pinhole</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">14</th>
                                        <td class = "align-middle">5/27</td>
                                        <td class = "align-middle">Topic Presentation#5<br/>Digital Fringe Projection (2): Phase</td>
                                        <td class = "align-middle"><img src="../img/book-half.svg"/><a href="https://doi.org/10.1364/AO.445800" target="_blank">"Downsampled depth encoding for enhanced 3D range geometry compression"</a>, Applied Optics, 2022</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR</a> due by 5/27(Mon) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">5/29</td>
                                        <td class = "align-middle">Topic Presentation#6<br/>
                                                                Digital Fringe Projection (3):  phase unwrapping method & 3D reconstruction</td>                                    
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">15</th>
                                        <td class ="align-middle">6/3</td>
                                        <td class="align-middle">Digital Fringe Projection (4): 3D Data compression with phase</td>
                                        <td class = "align-middle">HW#5 Handout (<a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a>)</td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW#5</a> due by 6/9(Sun) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">6/5</td>
                                        <td class = "align-middle table-info">Final Presentation Preparation</td>
                                        <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/12yMG0GJL-YoHcZhBU2Flk6D4DTINMCSSjhEinVz2Au0/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                        <td class = "align-middle"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" rowspan="2" class = "align-middle">16</th>
                                        <td class = "align-middle">6/10</td>
                                        <td class="align-middle table-info">Final Presentation Preparation</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Presentation Slides</a> due by 6/11(Tue) 11:59pm</td>
                                    </tr>
                                    <tr>
                                        <td class = "align-middle">6/12</td>
                                        <td class="align-middle table-info">Final Presentation (Finals Week)</td>
                                        <td class = "align-middle"></td>
                                        <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Presentation Audience Evaluation</a> due by 6/12(Wed) 11:59pm<br/>
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Report & Peer Evaluation</a> due by 6/12(Wed) 11:59pm<br/>
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Video</a> due by 6/12(Wed) 11:59pm<br/>
                                        &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Video Audience Evaluation</a> due by 6/14(Fri) 12pm</td>
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
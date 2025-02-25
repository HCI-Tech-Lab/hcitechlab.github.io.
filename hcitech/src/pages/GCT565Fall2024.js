import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div className = "container-fluid mb-3">
            <div class="card h-100">
                <div class="card-header bg-secondary text-white">
                    <br /><br />
                    <center>
                    <h1 class="card-title">GCT565 Fall 2024<br />
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
                        <b>TAs</b>: Jina Kim <br />
                                    &ensp;&ensp;&ensp;&ensp;&nbsp; Kun-woo Song<br />
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
                            <b>Time</b>: 10:30-12:00pm Mon/Wed<br />
                            <b>Location</b>: N5 #2332<br />
                            <b>Assignment Submission & Grading</b>: <a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a><br />
                            <b>Discussion and Q&A</b>: <b>Email</b>
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
                        &#9642; <b>11/25</b> Final Presentation on 12/9 will be held in N5 #2332.<br />
                        &#9642; <b>10/3</b>&nbsp;&nbsp;&nbsp;Course schedule has been updated<br />
                        &#9642; <b>9/30</b>&nbsp;&nbsp;Project Proposal Presentation<br />
                        &#9642; <b>9/13</b>&nbsp;&nbsp; Team Project Announcement<br />
                        &#9642; <b>9/6</b>&nbsp;&nbsp;&nbsp;&nbsp; Paper Seminar Group & Schedule Announcement<br />
                        &#9642; <b>9/2</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class Starts! <br />
                        &#9642; <b>8/31</b>&nbsp;&nbsp; Course website has been updated<br />
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
                    Schedule
                    </div>
                    <br />
                    <span style={{ color: 'blue' }}>
                    &nbsp;&nbsp;&nbsp;* Blue box indicates activity related lectures (team project, paper seminar, ML lecture)
                    </span>
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
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">1</th>
                            <td className="align-middle">9/2</td>
                            <td className="align-middle">Course Overview</td>
                            <td className="align-middle">HW#1 Handout (KLMS)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="align-middle">9/4</td>
                            <td className="align-middle">Augmented Interfaces</td>
                            <td className="align-middle"></td>
                            <td>
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">HW#1</a> due by 9/5 (Fri) 12pm
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">2</th>
                            <td className="align-middle">9/9</td>
                            <td className="align-middle table-info">Project Workshop<br /></td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; Team Formation Activity Form due by 9/8 (Sun)<br />
                            &#9642; Paper Seminar Sign Up due by 9/8 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">9/11</td>
                            <td className="align-middle">Augmented Display</td>
                            <td className="align-middle">HW#2 Handout (KLMS)</td>
                            <td className="align-middle">
                            &#9642; Project Team Sign Up due by 9/12(Thu) 12pm
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">3</th>
                            <td className="align-middle">9/16</td>
                            <td className="table-secondary align-middle">No Class (Chuseok)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">9/18</td>
                            <td className="table-secondary align-middle">No Class (Chuseok)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">HW#2</a> due by 9/20 (Fri)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#1</a> due by 9/22 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">4</th>
                            <td className="align-middle">9/23</td>
                            <td className="align-middle">
                            Augmented Sensing I<br />(Optical Sensing &amp; Wearables)
                            </td>
                            <td></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">9/25</td>
                            <td className="align-middle table-info">
                            Paper Seminar #1<br />Project Proposal Q&amp;A
                            </td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Team Project Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#2</a> due by 9/29 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">5</th>
                            <td className="align-middle">9/30</td>
                            <td className="align-middle table-info">Project Proposal Presentation</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Presentation Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Proposal Presentation Slides</a> due by 9/30 (Mon)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">10/2</td>
                            <td className="align-middle table-info">
                            Paper Seminar #2<br />Project Proposal Feedback
                            </td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Feedback Schedule
                            </a>
                            </td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">6</th>
                            <td className="align-middle">10/7</td>
                            <td className="align-middle">Machine Learning &amp; Data Mining Toolkit I</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">10/9</td>
                            <td className="table-secondary align-middle">No Class (Hangul Day)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">7</th>
                            <td className="align-middle">10/14</td>
                            <td className="align-middle">
                            Augmented Sensing II<br />(On-body Interface)
                            </td>
                            <td className="align-middle">HW#3 Handout (KLMS)</td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#3</a> due by 10/13 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">10/16</td>
                            <td className="align-middle table-info">Paper Seminar #3</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">8</th>
                            <td className="align-middle">10/21</td>
                            <td className="table-secondary align-middle">No class (Midterms Week)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">10/23</td>
                            <td className="table-secondary align-middle">No class (Midterms Week)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">HW#3</a> due by 10/24 (Thu)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">9</th>
                            <td className="align-middle">10/28</td>
                            <td className="align-middle">
                            Machine Learning &amp; Data Mining Toolkit II<br />EMG Data Collection
                            </td>
                            <td className="align-middle">HW#4 Handout (KLMS)</td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">10/30</td>
                            <td className="align-middle">Project Progress Discussion (Zoom)</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Discussion Schedule
                            </a>
                            </td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">10</th>
                            <td className="align-middle">11/4</td>
                            <td className="align-middle table-info">Project Progress Presentation</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Presentation Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Progress Presentation Slides</a> due by 11/4 (Mon)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Audience Evaluation Form</a> due by 11/5 (Tue)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">11/6</td>
                            <td className="align-middle">Augmented Sensing III (Remote/Ambient)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#4</a> due by 11/7 (Thu)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">HW#4</a> due by 11/10 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">11</th>
                            <td className="align-middle">11/11</td>
                            <td className="align-middle table-info">
                            Paper Seminar #4<br />Technical Evaluation
                            </td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">11/13</td>
                            <td className="align-middle table-info">Project Feedback</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Feedback Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Progress Report</a> due by 11/15 (Fri)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Peer Evaluation</a> due by 11/15 (Fri)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#5</a> due by 11/17 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">12</th>
                            <td className="align-middle">11/18</td>
                            <td className="align-middle">Augmented Haptic Feedback</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">11/20</td>
                            <td className="align-middle table-info">
                            Paper Seminar #5<br />Quantitative and Qualitative Study
                            </td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">13</th>
                            <td className="align-middle">11/25</td>
                            <td className="align-middle">Applied Machine Learning for Augmented Humans</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">RR#6</a> due by 11/24 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">11/27</td>
                            <td className="align-middle table-info">
                            Paper Seminar#6<br />Augmented hearing, taste, and smell
                            </td>
                            <td className="align-middle">HW#5 Handout (KLMS)</td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">14</th>
                            <td className="align-middle">12/2</td>
                            <td className="align-middle">Augmented Humans Storytelling &amp; Design Approaches</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">12/4</td>
                            <td className="align-middle">Project Preparation</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">HW#5</a> due by 12/4 (Wed)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">15</th>
                            <td className="align-middle">12/9</td>
                            <td className="align-middle table-info">Final Presentation</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Presentation Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Final Presentation Slides</a> due by 12/8 (Sun)
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">12/11</td>
                            <td className="align-middle table-info">Final Project Feedback</td>
                            <td className="align-middle">
                            <a href="https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Feedback Schedule
                            </a>
                            </td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Audience Evaluation Form</a> due by 12/12 (Thu)
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" className="align-middle">16</th>
                            <td className="align-middle">12/16</td>
                            <td className="table-secondary">No class (Finals Week)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <td className="align-middle">12/18</td>
                            <td className="align-middle table-secondary">No class (Finals Week)</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Final Report</a> due by 12/17 (Tue)<br />
                            &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Peer Evlauation</a> due by 12/17 (Tue)
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
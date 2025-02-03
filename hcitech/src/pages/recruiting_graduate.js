import SectionContainer from "@/components/section_container";
import Link from "next/link";

export default function RecruitingGrad() {
    return (
        <SectionContainer>
            <h1 className="card-title">M.S./Ph.D. Open Positions</h1>
            <br />
            <h2> Applications for M.S./Ph.D. Positions <Link href="https://forms.gle/bsay5LuEGfJjBC1P9" target="_blank">[Apply Now]</Link></h2>
            <p>If you are interested in working with us as a MS/PhD student, please send me an <b><i><a href="mailto:sangho@kaist.ac.kr"> email</a></i></b> or submit <b><i><a href="https://forms.gle/PFQ9CbpZDgLED2gGA" target="_blank">Google Form</a></i></b>.</p>
            <p>State briefly why you are interested and attach a CV, including information about the grades you had as an undergraduate.</p>
            <b>Important: please insert “Application PhD” or “Application MS" in the subject line if you send an email.</b>

            <br />
            <br />
            <br />

            <h2>HCI Tech Lab Introduction</h2>
            <p>As an interdisciplinary research group in Culture Technology, we build physical/digital interactive system empowered by novel sensing/haptic technologies. In HCI Tech Lab, we aim to explore novel interactive technologies that bring direct benefits to real world users. Our research process generally includes:</p>
            <ul style={{marginLeft: "30px"}}>
                <li><h5>Find gaps between interface/device and human</h5></li>
                <li><h5>Bridge the gap with novel technical/social solution</h5></li>
                <li><h5>Evaluate the solution with research methods</h5></li>
                <li><h5>Deploy the solution with practical applications</h5></li> 
            </ul>
            <h5 style={{marginLeft: "10px", paddingBottom: "20px"}}> Refer to recent <Link href="/publication"><b>papers</b></Link> for examples. </h5>
            


            <h2>Potential Projects</h2>
            <h5> You’ll be working on a research project, and closely interacting with me and others. Here are some potential project ideas: </h5>
            <ul style={{marginLeft: "30px"}}>
                <li><h5>Design/build/evaluate novel sensing techniques (capacitive, magnetic, Ultra wideband, radar, LiDAR, Computer Vision, biosignal) for AR/VR interactions. (Related Projects: <Link href="/publications">VibAware, iSoft, Scenariot, TRing</Link>)</h5></li>
                <li><h5>Design/build/evaluate wearable haptic experiences for AR/VR interactions. (Related Projects: <Link href="/publications">HapMotion, WriMoucon</Link>)</h5></li>
                <li><h5>Augmented humans with bio-physiological (e.g., EMG, MMG, ECG, EEG) sensing with applied machine learning to understand user intention and status. (Related Projects: <Link href="/publications">Stress Monitoring using Multimodal Bio-sensing Headset</Link>)</h5></li>
                <li><h5>Customization & Recommender Toolkit for Sensing/Haptic Interfaces design in AR/VR. (Related Projects: <Link href="/publications">HapticPilot</Link> )</h5></li>
                <li><h5>Design study (e.g., Elicitation, data capture) on deformable/soft/wearable interfaces. (Related Projects: <Link href="/publications">BikeGesture</Link> )</h5></li>
                <li><h5>You can also suggest new ideas!</h5></li>
            </ul>

            <br />

            <h2>Requirement</h2>

            <ul style={{marginLeft: "30px"}}>
                <li><h5>We are looking for students who are eager to learn and build physical & digital interactive system.<br />
                        <b>(Looking for students from diverse backgrounds & majors!)</b></h5></li>
                <li><h5>We are looking for students who are ready for get their hands dirty for prototyping.</h5></li>
                <li><h5>We are looking for students with responsibility who can actually realize proposed ideas.</h5></li>
                <li><h5>We are looking for students to have prototyping experience or intro-level HCI knowledge. (Optional, but strongly recommended)</h5></li>
            </ul>

            <br />

            <h2>Ph.D. Student</h2>
            <ul style={{marginLeft: "30px"}}>
                <li><h5>I prefer accepting Ph.D. student who has valid prior research experiences. Please apply as M.S. if you do not have feasible research experiences.</h5></li>
                <li><h5>If you would like to have research experience prior to Ph.D., please work in our lab as an intern or apply as a M.S. student.</h5></li>
                <li><h5>In KAIST GSCT, a Master's degree is a requirement for all incoming Ph.D. students.</h5></li>
            </ul>

            <br />

            <h2>M.S. Student</h2>
            <ul style={{marginLeft: "30px"}}>
                <li><h5>I do not have any preference on research experiences for M.S. students.</h5></li>
                <li><h5>All M.S. students are expected to carry out research project and write a thesis.</h5></li>
                <li><h5>Please contact me as early as possible since slots are limited each semester.</h5></li>
                <li><h5>For official admission in Graduate School of Culture Technology, please refer to <Link href="https://ct.kaist.ac.kr/pages/sub/sub0601" target="_blank">admission website.</Link></h5></li>
                <li><h5>For official admission in Graduate School of Metaverse, please refer to <Link href="https://meta.kaist.ac.kr/" target="_blank">admission website.</Link></h5></li>
                <li><h5>For official admission in School of Computing, please refer to <Link href="https://cs.kaist.ac.kr/content?menu=41" target="_blank">admission website.</Link></h5></li>
            </ul>

            <br />

            <h2>Conditions</h2>
            <ul style={{marginLeft: "30px"}}>
                <li><h5>Monthly Stipend + Research Incentive</h5></li>
                <li><h5>Personal office space in the N5 building. Hybrid work environment is allowed if needed.</h5></li>
                <li><h5>Standing desk and individual PC & monitor provided.</h5></li>
                <li><h5>Prototyping related consumables & equipment are supported.</h5></li>
            </ul>
            <br />
        </SectionContainer>
    );
}
import Link from 'next/link';

export const news = [
    {
        icon: "img/icon/speaker.png",
        title: "New Lab Logo",
        date: "Feb 20 2025",
        content: "Our lab got a new logo designed by Changheyon Park! Thanks all members for the feedback!",
        images: ["/Logo_White.png"],
        
    },
    {
        icon: "img/icon/graduation.png",
        title: "2025 Graduation",
        date: "Feb 14 2025",
        content: "Hyung Il, Soyeong, Dongkyu, Min-yung, Junghoon, Kyungeun, Kyungjin, and Nicha graudated. Congrats!",
        images: ["img/Lab/2502/Grad_1.jpeg", "img/Lab/2502/Grad_2.png", "img/Lab/2502/Grad_3.JPG"],
        
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to IEEE TVCG",
        date: "Jan 26 2025",
        content: (
            <>Our paper "Neck Goes VRrr: Reducing Rotation-Induced Virtual Reality Sickness through Neck Muscle Vibrations" led by Kun-Woo is accepted to <Link href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=2945" target="_blank">IEEE Transactions on Visualization and Computer Graphics (TVCG)</Link>.</>
        ),
        images: [],
        
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "Four papers accepted to CHI 2025",
        date: "Jan 17 2025",
        content: (
            <>Four papers from HCI Tech Lab and collaborators have been accepted to <Link href="https://chi2025.acm.org/" target="_blank">CHI 2025</Link>. Congratulations to Hyunyoung Han, Kyungeun Jung, Jina Kim, and Youjin Sung!</>
        ),
        images: [],
        extraContent: (
            <>
                <div class = "row research_item">
                    <div class="col-md-12">
                        <h4>ChoreoCraft: In-situ Crafting of Choreography in Virtual Reality through Creativity Support Tool</h4>
                        <h6><b>AUTHORS</b> Hyunyoung Han*, Kyungeun Jung*, Sang Ho Yoon</h6>
                    </div>
                </div>
                <div class = "row research_item">
                    <div class="col-md-12">
                        <h4>T2IRay: Design of Thumb-to-Index based Indirect Pointing for Continuous and Robust AR/VR Input</h4>
                        <h6><b>AUTHORS</b> Jina Kim, Yang Zhang, Sang Ho Yoon</h6>
                    </div>
                </div>
                <div class = "row research_item">
                    <div class="col-md-12">
                        <h4>HapticGen: Generative Text-to-Vibration Model for Streamlining Haptic Design</h4>
                        <h6><b>AUTHORS</b> Youjin Sung*, Kevin John*, Sang Ho Yoon**, Hasti Seifi**</h6>
                    </div>
                </div>
                <div class = "row research_item">
                    <div class="col-md-12">
                        <h4>VibWalk: Mapping Lower-limb Haptic Experiences of Everyday Walking</h4>
                        <h6><b>AUTHORS</b> Shih Ying-Lei, Tang Dongxu, Weiming Hu, Sang Ho Yoon, Yitian Shao</h6>
                    </div>
                </div>  
            </>
        )
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Interns",
        date: "Jan 1 2025",
        content: "Welcome our winter interns Rachel Jungmin Kim, Eun Ho Kim, and Hyunwook Jung!",
        images: []
    },
    {
        icon: "img/icon/speaker.png",
        title: "Winter 2025 Undergraduate Research Internship",
        date: "Nov 12 2024",
        content: <div>We are looking for research interns (including 1 URP) for 2024 Winter. <Link href="/recruiting_under">Application</Link> deadline is Nov 24th.</div>,
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "ISMAR 2024 Participation",
        date: "Oct 21 2024",
        content: "Our lab participated in ISMAR 2024 held in Bellevue. HyungIl presented a paper!",
        images: ["img/Lab/2411/ISMAR3.jpeg", "img/Lab/2411/ISMAR1.png"]
    },
    {
        icon: "img/icon/conf.png",
        title: "UbiComp/ISWC 2024 Participation",
        date: "Oct 9 2024",
        content: "Our lab participated in UbiComp/ISWC 2024 held in Melbourne. Youjin & Hojeong presented their papers!",
        images: ["img/Lab/2411/ubicomp1.jpg", "img/Lab/2411/ubicomp2.jpg", "img/Lab/2411/ubicomp3.jpg"]
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to NeurIPS 2024",
        date: "Sep 26 2024",
        content: <div>Our paper "Posture-Informed Muscular Force Learning for Robust Hand Pressure Estimation" led by Kyungjin and Junghoon is accepted to <Link href="https://neurips.cc/" target="_blank">NeurIPS2024</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Aug 26 2024",
        content: "Welcome our new Ph.D. students Kyungeun Jung, Kyungjin Seo and MS student Dohui Lee!",
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "KHC 2024 Participation",
        date: "Aug 21 2024",
        content: <div>Our lab participated in the 2nd Korea Haptics Conference. Our lab received the Poster Presentation Award (Kyungjin, Junghoon, Hanseok)! Check <Link href="https://haptics.or.kr/conference/2024/award.php" target="_blank">here</Link> for more detail.</div>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to IMWUT (UbiComp 2024)",
        date: "Aug 10 2024",
        content: <div>Our paper "EStatiG: Wearable Haptic Feedback with Multi-Phalanx Electrostatic Brake for Enhanced Object Perception in VR" led by Nicha and Hojeong is accepted to <Link href="https://dl.acm.org/journal/imwut" target="_blank">Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to ISMAR 2024",
        date: "Aug 10 2024",
        content: <div>Our paper "ThermicVib: Enabling Dynamic Thermal Sensation with Multimodal Haptic Glove for Thermal-Responsive Interaction" led by Hyung Il is accepted to <Link href="https://ieeeismar.org/" target="_blank">IEEE ISMAR2024</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "KCC 2024 Participation",
        date: "Jul 1 2024",
        content: "Our lab participated in KCC 2024. Hanseok received Outstanding Paper Award.",
        images: ["img/Lab/2406/KCC1.jpg", "img/Lab/2406/KCC7.png"]
    },
    {
        icon: "img/icon/thesis.png",
        title: "Kyungjin, Kyungeun, and Nicha successfully defended their M.S. Theses",
        date: "Jun 11 2024",
        content: "Kyungjin Seo, Kyungeun Jung, Nicha Vanichvoranun successfully defended their M.S. Theses. Congrats! Kyungjin and Kyungeun will continue as Ph.D. students in HCI Tech Lab.",
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "CHI 2024 Participation",
        date: "May 16 2024",
        content: <div>Our lab participated in CHI'24 in Hawaii. Our lab demo received <Link href="https://chi2024.acm.org/" target="_blank">Popular Choice Winner!</Link></div>,
        images: ["img/Lab/2405/CHI1.jpg", "img/Lab/2405/CHI3.png"]
    },
    {
        icon: "img/icon/speaker.png",
        title: "Summer 2024 Undergraduate Research Internship",
        date: "May 6 2024",
        content: "We are looking for research interns (including URP) for 2024 Summer. Application deadline is May 20th.",
        images: []
    },
    {
        icon: "",
        title: "Student Fellowship",
        date: "Apr 15 2024",
        content: "Kunwoo & Hyunyoung are selected for 'Master's Student Research Grant' from the National Research Foundation of Korea.",
        images: []
    },
    {
        icon: "",
        title: "Venture Research Program",
        date: "Apr 1 2024",
        content: "Youjin's Venture Research Proposal on 'Generative Haptic for VR Experience Design' was selected.",
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "VR 2024 Participation",
        date: "Mar 18 2024",
        content: "Our lab participated in IEEE Virtual Reality 2024.",
        images: ["img/Lab/2403/VR1.jpg", "img/Lab/2403/VR2.jpg"]
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Mar 1 2024",
        content: "Welcome our new Ph.D. student Jina Kim and MS students Hanseok Jeong, Yubin Lee, Changhyeon Park, and Kyoungwhan Mheen!",
        images: []
    },
    {
        icon: "img/icon/graduation.png",
        title: "Graduation",
        date: "Feb 16 2024",
        content: "Jina & Youjin graduated. Congrats!",
        images: ["img/Lab/2402/Graduation1.JPG"]
    },
    {
        icon: "img/icon/conf.png",
        title: "HCI Korea 2024 Participation",
        date: "Feb 1 2024",
        content: "Our lab participated in HCI Korea 2024.",
        images: ["img/Lab/2402/HCIK_01.jpeg"]
    },
    {
        icon: "img/icon/project.png",
        title: "Research Collaboration",
        date: "Jan 26 2024",
        content: "HMC Research Team visited HCI Tech Lab for potential research collaboration.",
        images: ["img/Lab/2402/HMC1.jpg"]
    },
    {
        icon: "img/icon/thesis.png",
        title: "Jina successfully defended her M.S. Thesis",
        date: "Dec 5 2023",
        content: "Jina Kim successfully defended her M.S. Thesis. Congrats! Jina will continue as a Ph.D. student in HCI Tech Lab.",
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "KHC 2023 Participation",
        date: "Nov 25 2023",
        content: <div> Our lab participated in the 1st Korea Haptics Conference. Our lab received the Best Paper Award (Hyung IL), Best Demo Award (Kyungeun), Young Researcher Award (Prof. Yoon) and many other awards (Dongkyu, Hyunyoung, Soyeong, Youjin)! Check <Link href="https://haptics.or.kr/conference/award.php" target="_blank">here</Link> for more detail.</div>,
        images: ["img/Lab/2311/KHC14.JPG"]
    },
    {
        icon: "img/icon/speaker.png",
        title: "Winter 2024 Undergraduate Research Internship",
        date: "Nov 17 2023",
        content: <div>We are looking for research interns (including 1 URP) for 2024 Winter. <Link href="https://hcitech.org/recruiting/recruiting_under_2024.html" target="_blank">Application</Link> deadline is Nov 24th.</div>,
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "UIST 2023 Participation",
        date: "Nov 1 2023",
        content: <div>Our lab participated in ACM Symposium on User Interface Software and Technology (UIST) in San Francisco. Kyungeun received <Link href="https://uist.acm.org/2023/" target="_blank">People's Choice Demo Award!</Link></div>,
        images: ["img/Lab/2310/UIST4.png", "img/Lab/2310/UIST2.JPG"]
    },
    {
        icon: "img/icon/conf.png",
        title: "ISMAR 2023 Participation",
        date: "Oct 20 2023",
        content: "Our lab participated in IEEE International Symposium on Mixed and Augmented Reality held in Sydney.",
        images: ["img/Lab/2310/ISMAR1.JPG", "img/Lab/2310/ISMAR2.JPG"]
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to IMWUT (UbiComp 2024)",
        date: "Oct 15 2023",
        content: <div>Our paper "HapticPilot: Authoring In-situ Hand Posture-Adaptive Vibrotactile Feedback for Virtual Reality" led by Youjin is accepted to <Link href="https://dl.acm.org/journal/imwut" target="_blank">Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "SUI 2023 Participation",
        date: "Oct 13 2023",
        content: "Our lab participated in ACM Symposium on Spatial User Interaction Conference held in Sydney. Jina presented a paper!",
        images: ["img/Lab/2310/SUI1.jpeg", "img/Lab/2310/SUI2.jpeg"]
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to Virtual Reality (Springer VR)",
        date: "Oct 9 2023",
        content: <div>Our paper "HapMotion: Motion-to-Tactile Framework with Wearable Haptic Devices for Immersive VR Performance Experience" led by Kyungeun is accepted to <Link href="https://www.springer.com/journal/10055" target="_blank">Virtual Reality (Springer)</Link>.</div>,
        images: []
    },
    {
        icon: "",
        title: "📣 HCI Tech lab in the MERRIC News Letter",
        date: "Sep 6 2023",
        content: <div>HCI Tech Lab has been featured on <Link href="https://www.materic.or.kr/v2/mp/content.asp?f_id=145&page=1&listType=20" target="_blank">Merric</Link> (Mechanical Engineering and Robotics Research Information Center) news letter.</div>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Sep 1 2023",
        content: "Welcome our new Ph.D. student Youjin Sung and MS students Hyunyoung Han, Kun-Woo Song, Hojeong Lee, Fangqing Li, and Hyung Wook Yi!",
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A paper accepted to SUI 2023",
        date: "Aug 25 2023",
        content: <div>Our paper "VibAware: Context-Aware Tap and Swipe Gestures Using Bio-Acoustic Sensing" led by Jina is accepted to <Link href="https://sui.acm.org/2023/" target="_blank">SUI2023</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "A demo accepted to UIST 2023",
        date: "Aug 25 2023",
        content: <div>Our demo "Mo2Hap: Rendering performer’s Motion Flow to Upper-body Vibrotactile Haptic Feedback for VR performance" will be presented at <Link href="https://uist.acm.org/2023/" target="_blank">UIST 2023</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/project.png",
        title: "Research Collaboration",
        date: "Aug 24 2023",
        content: "ETRI & 1Million visited HCI Tech Lab for research collaboration.",
        images: ["img/Lab/2308/1Mil.JPG"]
    },
    {
        icon: "img/icon/press.png",
        title: "Research Collaboration on Press Release",
        date: "Jul 19 2023",
        content: <div>KAIST CT, 1Million, and EBS sign a Dance Education Technology Development Agreement (<Link href="https://ct.kaist.ac.kr/boards/view/news_board/4083" target="_blank">Press Release</Link>).</div>,
        images: ["img/Lab/2307/MOU.jpg"]
    },
    {
        icon: "img/icon/conf.png",
        title: "WHC 2023 Participation",
        date: "Jul 10 2023",
        content: "Our lab participated in IEEE World Haptics Conference held in Delft for oral presentation & demo!",
        images: ["img/Lab/2307/WHC1.JPG", "img/Lab/2307/WHC2.JPG"]
    },
    {
        icon: "img/icon/project.png",
        title: "Research Collaboration",
        date: "Jul 7 2023",
        content: "HCI Tech Lab participated summer workshop with Korea University & KETI on '4D Content Generation and Copyright Protection with Artificial Intelligence'.",
        images: ["img/Lab/2307/KOCCA.jpg", "img/Lab/2307/KOCCA2.jpg"]
    },
    {
        icon: "img/icon/speaker.png",
        title: "Recruiting Graduate Students",
        date: "Jun 14 2023",
        content: <div>We have positions for M.S. & Ph.D for Spring 2024 (Graduate School of Culture Technology & Metaverse Program). Please check <Link href="recruiting/recruiting_graduate.html" target="_blank">Open Positions</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/thesis.png",
        title: "Youjin successfully defended her M.S. Thesis",
        date: "Jun 13 2023",
        content: "Youjin Sung successfully defended her M.S. Thesis. Congrats! Youjin will continue as a Ph.D. student in HCI Tech Lab.",
        images: []
    },
    {
        icon: "img/icon/project.png",
        title: "New Research Project",
        date: "Jun 1 2023",
        content: "New research project on 'Real-time virtual convergence-based performing arts education platform technology' collaborated with ETRI, 1Million, and EBS.",
        images: []
    },
    {
        icon: "img/icon/project.png",
        title: "New Research Project",
        date: "Jun 1 2023",
        content: "New research project on 'In-camera based interactive digital VFX content production pipeline technology' collaborated with KETI, DexterStudios, Studio EON, and Metalocat.",
        images: []
    },
    {
        icon: "img/icon/speaker.png",
        title: "Summer 2023 Undergraduate Research Internship",
        date: "May 10 2023",
        content: "We are looking for research interns for 2023 Summer. Application deadline is May 17th.",
        images: []
    },
    {
        icon: "img/icon/conf.png",
        title: "VR 2023 Participation",
        date: "Mar 25 2023",
        content: "Jina, Kyungeun, Nicha participated in IEEE VR conference held in Shanghai to present posters!",
        images: ["img/Lab/2303/IEEEVR_JK.jpg", "img/Lab/2303/IEEEVR_KJ.jpg", "img/Lab/2303/IEEEVR_Nicha.jpg"]
    },
    {
        icon: "",
        title: "Venture Research Program",
        date: "Mar 20 2023",
        content: "Jina & Min-yung's Venture Research Proposal on 'Interaction improvement using sensing technology' was selected!",
        images: []
    },
    {
        icon: "img/icon/project.png",
        title: "New Research Project",
        date: "Mar 17 2023",
        content: "Outstanding Young Scientist Grants (NRF) on 'A wearable multimodal sensing framework for adaptive interaction in extended reality' selected.",
        images: []
    },
    {
        icon: "img/icon/speaker.png",
        title: "Recruiting Graduate Students",
        date: "Mar 10 2023",
        content: "We have positions for M.S. & Ph.D for Spring 2023. Please register for information session for Graduate School of Culture Technology.",
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students & Intern",
        date: "Mar 6 2023",
        content: "Welcome our new Ph.D. student Seo Young Oh (Co-advising), and spring intern Hyunyoung Han!",
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Feb 27 2023",
        content: "Welcome our new MS students Dong Kyu, Min-yung, Hyung Il, Soyeong, and Junghoon!",
        images: []
    },
    {
        icon: "img/icon/graduation.png",
        title: "Graduation",
        date: "Feb 17 2023",
        content: "Minjae successfully defended his M.S. Thesis & graduated.",
        images: ["img/Lab/2302_1/G1.png"]
    },
    {
        icon: "",
        title: "HCI Korea 2023",
        date: "Feb 3 2023",
        content: "Our lab participated in HCI Korea 2023!",
        images: ["img/Lab/2302/HCIKorea2023.png"]
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "VR 2023 Posters",
        date: "Jan 30 2023",
        content: <div>Three posters will be presented at <Link href="https://ieeevr.org/2023/" target="_blank">VR 2023</Link>.</div>,
        images: [],
        extraContent: (
            <>
                <small><p><strong>VibAware: Context-Aware Tap and Swipe Gestures Using Bio-Acoustic</strong> Jina Kim, Minyung Kim, Woo Suk Lee, Sang Ho Yoon (in collaboration with Microsoft)</p>
                <p><strong>Mo2Hap: Rendering performer's Motion Flow to Upper-body Vibrotactile Haptic Feedback for VR performance</strong> Kyungeun Jung, Seungjae Oh, Sang Ho Yoon (in collaboration with Kyung Hee University)</p>
                <p><strong>A Lightweight Wearable Multi-joint Force Feedback for High Definition Grasping in VR</strong> Nicha Vanichvoranun, Sang Ho Yoon</p></small>
            </>
        )
    },
    {
        icon: "",
        title: "HaptX Training!",
        date: "Jan 20 2023",
        content: "Our team had HaptX Gloves tutorial training provided by HaptX HQ.",
        images: ["img/Lab/2301/230120_HaptX2.JPG"]
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Winter Research Kickoff Meeting",
        date: "Jan 9 2023",
        content: "Welcome our new winter interns (Dongkyu, Hyung Il, Soyeong, Min-yung, Kun-woo).",
        images: ["img/Lab/2212/230110_Lab_Meeting.jpg"]
    },
    {
        icon: "img/icon/speaker.png",
        title: "Winter 2023 Undergraduate Research Internship",
        date: "Dec 7 2022",
        content: "We are looking for research interns for 2023 Winter. Internship Application deadline is Dec 19th.",
        images: []
    },
    {
        icon: "img/icon/award.png",
        title: "VRST Best In-Person Poster/Demo Award",
        date: "Dec 1 2022",
        content: <div>Our <Link href="https://dl.acm.org/doi/abs/10.1145/3562939.3565672" target="_blank">Exploring Vibration Intensity Map Of Hand Postures</Link> poster wins the Best In-Person Poster/Demo Award Voted by Attendees at VRST 2022!</div>,
        images: ["img/Lab/2212/Award_Certificate.png", "img/Lab/2212/YS_Award1.jpg"]
    },
    {
        icon: "img/icon/speaker.png",
        title: "Recruiting Graduate Students",
        date: "Sep 15 2022",
        content: <div>We have positions for M.S. & Ph.D for Spring 2023. Please check <Link href="recruiting_graduate.html" target="_blank">Open Positions</Link> & <Link href="https://meta.kaist.ac.kr" target="_blank">KAIST Metaverse program</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "VRST 2022 Posters",
        date: "Sep 7 2022",
        content: <div>Youjin's work on vibration intensity map based on hand posture in collaboration with Technische Universität Dresden & Zofia's work (URP) on finger-worn haptic actuator will be presented at <Link href="https://vrst.acm.org/vrst2022/" target="_blank">VRST2022</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "ISMAR 2022 Posters",
        date: "Aug 22 2022",
        content: <div>Three poster papers from <Link href="https://hcitech.org/course/CTP445_Spring2022.html" target="_blank">CTP445</Link> class will be presented at <Link href="https://ismar2022.org/" target="_blank">ISMAR2022</Link>.</div>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Aug 29 2022",
        content: "Welcome our new MS students Kyungjin and Kyungeun!",
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "SIGGRAPH 2022 Emerging Technologies",
        date: "Jul 4 2022",
        content: <>Our SIGGRAPH 2022 Emerging Technologies paper <Link href="https://s2022.siggraph.org/presentation/?id=gensub_329&sess=sess220" target="_blank">Sense of Embodiment Inducement for People With Reduced Lower-body Mobility and Sensations With Partial-visuomotor Stimulation</Link> in collaboration with LAVA Lab & Visual Cognition Lab is highlighted on <Link href="https://blog.siggraph.org/2022/06/researchers-make-sense-of-embodiment-available-to-all.html/" target="_blank">SIGGRAPH Blog</Link>!</>,
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "ECCV 2022",
        date: "Jul 4 2022",
        content: <>Sound-Guided Semantic Video Generation in collaboration with Computer Vision Lab is accepted to <Link href="https://eccv2022.ecva.net/" target="_blank">ECCV2022</Link>!</>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Summer Interns",
        date: "June 24 2022",
        content: "Welcome summer interns Dong Kyu, Min-yung, and Jungmin.",
        images: ["img/Lab/220624_Meeting.jpg"]
    },
    {
        icon: "img/icon/project.png",
        title: "New Research Projects",
        date: "June 1 2022",
        content: "Research projects supported by Korea Creative Content Agency (KOCCA) & National Research Foundation of Korea (NRF).",
        images: []
    },
    {
        icon: "img/icon/speaker.png",
        title: "Undergraduate Research Internship",
        date: "May 2022",
        content: "We are looking for research interns for 2022 Summer.",
        images: []
    },
    {
        icon: "",
        title: "Lab Meeting & Lunch Gathering",
        date: "Apr 29 2022",
        content: "Kicked off regular research meeting!",
        images: ["img/Lab/220429_Lab Meeting.jpg", "img/Lab/220429_Lunch.jpg"]
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Student",
        date: "Mar 2 2022",
        content: "Welcome our new MS student Youjin!",
        images: []
    },
    {
        icon: "img/icon/paper2.jpg",
        title: "CVPR 2022",
        date: "Mar 2 2022",
        content: <>Sound-Guided Semantic Image Manipulation in collaboration with Computer Vision Lab is accepted to <Link href="https://cvpr2022.thecvf.com/" target="_blank">CVPR2022</Link>!</>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Winter Interns",
        date: "Jan 17 2022",
        content: "Welcome KAIST undergraduate interns Nicha, Yoonseo, and Haebin.",
        images: []
    },
    {
        icon: "",
        title: "First Lab Meeting",
        date: "Jan 13 2022",
        content: "First Lab Meeting including Graduate Students & Undergraduate Interns.",
        images: ["img/Lab/211201_Group.jpg"]
    },
    {
        icon: "",
        title: "Lab Opening!",
        date: "Jan 3 2022",
        content: "Officially opened the lab area. Work-in-progress setting up the lab with members.",
        images: []
    },
    {
        icon: "",
        title: "URP Individual Research Selected",
        date: "Dec 21 2021",
        content: <>Individual Research Proposal by Zofia has been accepted. This is exploratory research to enable <i>Novel Haptic Interface</i>.</>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Students",
        date: "Dec 13 2021",
        content: "Welcome our new MS student Minjae and Interns Zofia and Kyungeun.",
        images: []
    },
    {
        icon: "img/icon/project.png",
        title: "New Research Project",
        date: "Dec 1 2021",
        content: <><strong>Development of Open XR platform for high immersive collaboration</strong> supported by National Research Council of Science and Technology (NST) for 6 years.</>,
        images: []
    },
    {
        icon: "img/icon/Welcome.jpg",
        title: "Graduate Student",
        date: "Nov 4 2021",
        content: "Welcome our new MS student Jina!",
        images: []
    },
    {
        icon: "",
        title: "Lab Website Open!",
        date: "Sep 27 2021",
        content: "Beta version website is open. The website will be actively updated.",
        images: []
    }
];
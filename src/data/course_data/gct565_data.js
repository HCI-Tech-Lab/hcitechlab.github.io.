import trophy from "@/dynamic_assets/trophy.jpg";

export const gct565_data = [
    {
        course_info: {
            code: "GCT565 Fall 2024", 
            title: "Augmented Humans",
            desc: "The idea of augmenting the human intellect has long trandition. The advancement of digital technologies has enabled physical, cognitive, and perceptual augmentation of humans. This course will introduce concepts and examples related to augmented humans where technologies enhance human capabilities beyond the individual. Students will learn basic research approach and state-of-art works in the field of augmented humans.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
        ],
        ta: [
            {name: "Jina Kim", link: ""}, 
            {name: "Kun-woo Song", link: ""},
        ],
        time: "10:30-12:00pm Mon/Wed",
        loc: "N5 #2332",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "Email", link: ""},
        announcements: [
            {date: "11/25", content: "Final Presentation on 12/9 will be held in N5 #2332."},
            {date: "10/3", content: "Course schedule has been updated"},
            {date: "9/30", content: "Project Proposal Presentation"},
            {date: "9/13", content: "Team Project Announcement"},
            {date: "9/6", content: "Paper Seminar Group & Schedule Announcement"},
            {date: "9/2", content: "Class Starts!"},
            {date: "8/31", content: "Course website has been updated"},
        ],
        projects: [],
        schedule: [
            {
                day1: {
                    date: "9/2", titles: ["Course Overview"], type: 0,
                    notes: [{name: "HW#1 Handout (KLMS)", link: ""}],
                    dues: [],
                },
                day2: {
                    date: "9/4", titles: ["Augmented Interfaces"], type: 0,
                    notes: [],
                    dues: [{name: "HW#1 due by 9/5 (Fri) 12pm", link: "https://klms.kaist.ac.kr/"}],
                },
            },
            {
                day1: {
                    date: "9/9", titles: ["Project Workshop"], type: 1,
                    notes: [],
                    dues: [{name: "Team Formation Activity Form due by 9/8 (Sun)", link: ""}, {name: "Paper Seminar Sign Up due by 9/8 (Sun)", link: ""}],
                },
                day2: {
                    date: "9/11", titles: ["Augmented Display"], type: 0,
                    notes: [{name: "HW#2 Handout (KLMS)", link: ""}],
                    dues: [{name: "Project Team Sign Up due by 9/12(Thu) 12pm", link: ""}],
                },
            },
            {
                day1: {
                    date: "9/16", titles: ["No Class (Chuseok)"], type: 2,
                    notes: [],
                    dues: []
                },
                day2: {
                    date: "9/18", titles: ["No Class (Chuseok)"], type: 2,
                    notes: [],
                    dues: [{name: "HW#2 due by 9/20 (Fri)", link: "https://klms.kaist.ac.kr/"}, {name: "RR#1 due by 9/22 (Sun)", link: "https://klms.kaist.ac.kr/"}]
                }
            },
            {
                day1: {date: "9/23", titles: ["Augmented Sensing I (Optical Sensing & Wearables)"], type: 0, notes: [], dues: []},
                day2: {date: "9/25", titles: ["Paper Seminar #1", "Project Proposal Q&A"], type: 1, notes: [
                    {name: "Team Project Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "RR#2 due by 9/29 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "9/30", titles: ["Project Proposal Presentation"], type: 1, notes: [
                    {name: "Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "Proposal Presentation Slides due by 9/30 (Mon)", link: "https://klms.kaist.ac.kr/"}
                ]},
                day2: {date: "10/2", titles: ["Paper Seminar #2", "Project Proposal Feedback"], type: 1, notes: [
                    {name: "Feedback Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: []}
            },
            {
                day1: {date: "10/7", titles: ["Machine Learning & Data Mining Toolkit I"], type: 0, notes: [], dues: []},
                day2: {date: "10/9", titles: ["No Class (Hangul Day)"], type: 2, notes: [], dues: []}
            },
            {
                day1: {date: "10/14", titles: ["Augmented Sensing II", "On-body Interface"], type: 0, notes: [
                    {name: "HW#3 Handout (KLMS)", link: ""}
                ], dues: [
                    {name: "RR#3 due by 10/13 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]},
                day2: {date: "10/16", titles: ["Paper Seminar #3"], type: 1, notes: [], dues: []}
            },
            {
                day1: {date: "10/21", titles: ["No class (Midterms Week)"], type: 2, notes: [], dues: []},
                day2: {date: "10/23", titles: ["No class (Midterms Week)"], type: 2, notes: [], dues: [
                    {name: "HW#3 due by 10/24 (Thu)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "10/28", titles: ["Machine Learning & Data Mining Toolkit II", "EMG Data Collection"], type: 0, notes: [
                    {name: "HW#4 Handout (KLMS)", link: ""}
                ], dues: []},
                day2: {date: "10/30", titles: ["Project Progress Discussion (Zoom)"], type: 0, notes: [
                    {name: "Discussion Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: []}
            },
            {
                day1: {date: "11/4", titles: ["Project Progress Presentation"], type: 1, notes: [
                    {name: "Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "Progress Presentation Slides due by 11/4 (Mon)", link: "https://klms.kaist.ac.kr/"},
                    {name: "Audience Evaluation Form due by 11/5 (Tue)", link: "https://klms.kaist.ac.kr/"}
                ]},
                day2: {date: "11/6", titles: ["Augmented Sensing III (Remote/Ambient)"], type: 0, notes: [], dues: [
                    {name: "RR#4 due by 11/7 (Thu)", link: "https://klms.kaist.ac.kr/"},
                    {name: "HW#4 due by 11/10 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "11/11", titles: ["Paper Seminar #4", "Technical Evaluation"], type: 1, notes: [], dues: []},
                day2: {date: "11/13", titles: ["Project Feedback"], type: 1, notes: [
                    {name: "Feedback Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "Progress Report due by 11/15 (Fri)", link: "https://klms.kaist.ac.kr/"},
                    {name: "Peer Evaluation due by 11/15 (Fri)", link: "https://klms.kaist.ac.kr/"},
                    {name: "RR#5 due by 11/17 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "11/18", titles: ["Augmented Haptic Feedback"], type: 0, notes: [], dues: []},
                day2: {date: "11/20", titles: ["Paper Seminar #5", "Quantitative and Qualitative Study"], type: 1, notes: [], dues: []}
            },
            {
                day1: {date: "11/25", titles: ["Applied Machine Learning for Augmented Humans"], type: 0, notes: [], dues: [
                    {name: "RR#6 due by 11/24 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]},
                day2: {date: "11/27", titles: ["Paper Seminar #6", "Augmented hearing, taste, and smell"], type: 1, notes: [
                    {name: "HW#5 Handout (KLMS)", link: ""}
                ], dues: []}
            },
            {
                day1: {date: "12/2", titles: ["Augmented Humans Storytelling & Design Approaches"], type: 0, notes: [], dues: []},
                day2: {date: "12/4", titles: ["Project Preparation"], type: 0, notes: [], dues: [
                    {name: "HW#5 due by 12/4 (Wed)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "12/9", titles: ["Final Presentation"], type: 1, notes: [
                    {name: "Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "Final Presentation Slides due by 12/8 (Sun)", link: "https://klms.kaist.ac.kr/"}
                ]},
                day2: {date: "12/11", titles: ["Final Project Feedback"], type: 1, notes: [
                    {name: "Feedback Schedule", link: "https://docs.google.com/spreadsheets/d/1WWG8XswphFn51tshabZKuBCW55KJ4bcAFqdLtyEh2Rw/edit?usp=sharing"}
                ], dues: [
                    {name: "Audience Evaluation Form due by 12/12 (Thu)", link: "https://klms.kaist.ac.kr/"}
                ]}
            },
            {
                day1: {date: "12/16", titles: ["No class (Finals Week)"], type: 2, notes: [], dues: []},
                day2: {date: "12/18", titles: ["No class (Finals Week)"], type: 2, notes: [], dues: [
                    {name: "Final Report due by 12/17 (Tue)", link: "https://klms.kaist.ac.kr/"},
                    {name: "Peer Evaluation due by 12/17 (Tue)", link: "https://klms.kaist.ac.kr/"}
                ]}
            }
        ]
    },
    {
        course_info: {
            code: "GCT565 Fall 2023", 
            title: "Augmented Humans",
            desc: "The idea of augmenting the human intellect has long trandition. The advancement of digital technologies has enabled physical, cognitive, and perceptual augmentation of humans. This course will introduce concepts and examples related to augmented humans where technologies enhance human capabilities beyond the individual. Students will learn basic research approach and state-of-art works in the field of augmented humans.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
        ],
        ta: [
            {name: "Youjin Sung", link: ""}, 
            {name: "Kyungjin Seo", link: ""},
            {name: "Jina Kim", link: ""}, 
        ],
        time: "9:00-10:30am Tue/Thu",
        loc: "N5 #2332",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "Classum", link: "https://classum.com/"},
        announcements: [
            { date: "12/27", content: "Check out the fantastic videos/presentations from Augmented Humans Project in the Project Gallery!" },
            { date: "11/4", content: "Final Presentation on 12/5 will be held in N25 #3229 from 12-2:30pm." },
            { date: "10/24", content: "Progress Presentation on 10/31 & 11/2 will be held in N25 #3229." },
            { date: "9/13", content: "Paper Seminar Group & Schedule Announcement" },
            { date: "9/5", content: "Reading Group Announcement" },
            { date: "8/29", content: "Class Starts!" }
        ],
        projects: [
            {
                title: "Athem",
                members: "Yi Hyung Il, Yi Hyung Wook, Kwak Dong Kyu",
                desc: "Thermal Illusions in VR: Enhancing Perception of Distance and VelocitySpeech-Gesture integration method for enhancement of egocentric pose estimation in VR remote collaboration",
                videoLink: "https://www.youtube.com/embed/5OPypDY-G3k",
                slideLink: "",
                imageLink: "",
                recognition: "Best Augmented Humans Project (Best)",
            },
            {
                title: "h(eye)de",
                members: "Min-yung Kim, Yohan Lim, Kun Woo Song",
                desc: "Collision Prevention in Diminished Reality through the Use of Peripheral Vision",
                videoLink: "https://www.youtube.com/embed/PDGqpaoq7VA",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "Teams JMT",
                members: "Junghoon Seo, Tamana Pirzad, Minji Park",
                desc: "",
                videoLink: "",
                slideLink: "/GCT565_Fall2023/Team1.pdf",
                imageLink: "/GCT565_Fall2023/Team1.jpg",
                recognition: "",
            },
            {
                title: "OddEye",
                members: "Jeeseung Ryu, Minhong Jeong, Seungmin Lee",
                desc: "Communication Enhancement in VR Multi-talker Environment using EEG-Based Auditory Attention Decoding",
                videoLink: "https://www.youtube.com/embed/T95e0fDtgoE",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "The Augmenters",
                members: "Hyunyoung Han, Jisu Yim, Eunhee Jeong",
                desc: "You Only Look at Yourself: Real-time Visual and Haptic Guidance System for Golf Swing in Virtual RealityA methodology of classifying sounds to objects through awareness of both the physical environmental context and user behavior signals",
                videoLink: "https://www.youtube.com/embed/F4O0P7j7Nj4",
                slideLink: "",
                imageLink: "",
                recognition: "Best Augmented Humans Project (Runner-up)",
            },
            {
                title: "Fresh",
                members: "Zosia Marciniak, Hojeong Lee, Fangqing Li",
                desc: "Multimodal Haptic Display for Varying Texture Perception in Virtual Reality using Vibrotactile and Thermal FeedbackVibrotactile glove for improving navigation in the 3D game environment for visually impaired people",
                videoLink: "",
                slideLink: "GCT565_Fall2023/Team2.pdf",
                imageLink: "GCT565_Fall2023/Team2.jpg",
                recognition: "",
            },
            {
                title: "Team VC",
                members: "Hyunsong Kwon, Pooseung Koh, Vanessa Tan",
                desc: "Enhancing Participation in VR Concerts through Motion Interaction and Immersive Audio",
                videoLink: "https://www.youtube.com/embed/qGL8z7rRI_o",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "RealityRifters",
                members: "Ryan Gallagher, David Rudebjer, Yong Won Choi",
                desc: "MARIMOGOTCHI: Harnessing the Fusion of Nature and Technology for Interactive Environmental Engagement",
                videoLink: "https://www.youtube.com/embed/3cjT2TmyFYI",
                slideLink: "",
                imageLink: "",
                recognition: "",
            }
        ],
        schedule: []
    },
    {
        course_info: {
            code: "GCT565 Fall 2022", 
            title: "Augmented Humans",
            desc: "The idea of augmenting the human intellect has long trandition. The advancement of digital technologies has enabled physical, cognitive, and perceptual augmentation of humans. This course will introduce concepts and examples related to augmented humans where technologies enhance human capabilities beyond the individual. Students will learn basic research approach and state-of-art works in the field of augmented humans.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
        ],
        ta: [
            {name: "Hyeonho Na", link: ""}, 
            {name: "Eunji Oh", link: ""},
        ],
        time: "1:00-2:30pm Mon/Wed",
        loc: "N25 #3229",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "CLASSUM", link: "https://classum.com/"},
        announcements: [
            {date: "12/27", content: "Check out the fantastic videos/presentations from Augmented Humans Project in the Project Gallery!"},
            {date: "11/4", content: "Final Presentation on 12/5 will be held in N25 #3229 from 12-2:30pm."},
            {date: "10/24", content: "Progress Presentation on 10/31 & 11/2 will be held in N25 #3229."},
            {date: "9/13", content: "Paper Seminar Group & Schedule Announcement"},
            {date: "9/5", content: "Reading Group Announcement"},
            {date: "8/29", content: "Class Starts!"},
        ],
        schedule: [

        ],
        projects: [
            {
                title: "Avatar-Ego",
                members: "Sungwoo Jeon, Seoyoung Kang",
                desc: "Speech-Gesture integration method for enhancement of egocentric pose estimation in VR remote collaboration",
                videoLink: "https://www.youtube.com/embed/A6HGqyw1QCM",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "HAPTICtactoc (HCIKorea 2023)",
                members: "Youjin Sung, Kyungeun Jung, Yoonjae Hong",
                desc: "Customizable VR Controller with Multi-input Kinesthetic Haptic Feedback",
                videoLink: "https://www.youtube.com/embed/8qIUiHDd8tQ",
                slideLink: "",
                imageLink: "",
                recognition: "Best Augmented Humans Project",
            },
            {
                title: "AHHA",
                members: "Minju Baeck, Kwan Yun",
                desc: "MR Physics Simulation Authoring Tool for Teachers with AR/MR Glasses",
                videoLink: "https://www.youtube.com/embed/mg-SmMgKpT8",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "WEinVR",
                members: "Byeoli Choi, Taeyeon Kim, Seungchan Lim",
                desc: "The sense of embodiment derived by Customized full-body avatar in VR Reduces pain",
                videoLink: "https://www.youtube.com/embed/U6blNLrL1hc",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "CONTEXTuAALs",
                members: "Kyungjin Seo, Nicha Vanichvoranun, Emily Liu",
                desc: "A methodology of classifying sounds to objects through awareness of both the physical environmental context and user behavior signals",
                videoLink: "https://www.youtube.com/embed/ROYv521fjrc",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "Echipa",
                members: "Bianca Budulacu, Martina Lackova",
                desc: "Vibrotactile glove for improving navigation in the 3D game environment for visually impaired people",
                videoLink: "https://www.youtube.com/embed/WY6hi7w32oc",
                slideLink: "",
                imageLink: "",
                recognition: "",
            },
            {
                title: "VR Walking",
                members: "Xintong Wu, Aylar Akbari",
                desc: "Assessing General Mental Pressure in Virtual Walking Scenarios Using Human Factors Approach - a Pilot Study",
                videoLink: "",
                slideLink: "/GCT565_Fall2022/Team1.pdf",
                imageLink: "/GCT565_Fall2022/Team1.jpg",
                recognition: "",
            },

            {
                title: "Team BJ",
                members: "Minjae Jo, Ki-Dong Baek",
                desc: "Enabling physical interaction through wrist-mounted haptic controller with force feedback",
                videoLink: "",
                slideLink: "/GCT565_Fall2022/Team2.pdf",
                imageLink: "/GCT565_Fall2022/Team2.jpg",
                recognition: "",
            },
        ]
    },
    {
        course_info: {
            code: "GCT565 Fall 2021", 
            title: "Augmented Humans",
            desc: "The idea of augmenting the human intellect has long trandition. The advancement of digital technologies has enabled physical, cognitive, and perceptual augmentation of humans. This course will introduce concepts and examples related to augmented humans where technologies enhance human capabilities beyond the individual. Students will learn basic research approach and state-of-art works in the field of augmented humans.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
        ],
        ta: [
            
        ],
        time: "",
        loc: "",
        submission: {name: "", link: ""},
        discussion: {name: "", link: ""},
        announcements: [],
        schedule: [],
        projects: [
            {
                title: "Immersive Multimodal MR Environment for Relieve Stress",
                authors: "Seonji Kim & Seongjin Park",
                slideLink: "/GCT565_Fall2021/Team1.pdf",
                imageLink: "/GCT565_Fall2021/Team1.jpg",
                videoLink: "",
                recognition: ""
            },
            {
                title: "Depth aware Real-time 6DoF Object Pose Tracking for Augmented Reality",
                authors: "Chaejung Maeng",
                slideLink: "/GCT565_Fall2021/Team2.pdf",
                imageLink: "/GCT565_Fall2021/Team2.jpg",
                videoLink: "",
                recognition: ""
            },
            {
                title: "A Comprehensive Procedure for Personalized Happiness Recommender System: Using Multi-Faceted Signal Processing with Holistic Quantified Self (HQS)",
                authors: "Eunhwa Song & Byeong-Yun Ko",
                slideLink: "/GCT565_Fall2021/Team3.pdf",
                imageLink: "/GCT565_Fall2021/Team3.jpg",
                videoLink: "",
                recognition: ""
            },
            {
                title: "Sense of Embodiment(SoE) Amplification for Paraplegic People by Lower Body Motion Generation in Virtual Reality",
                authors: "Hyuckjin Jang & Taehei Kim",
                slideLink: "/GCT565_Fall2021/Team4.pdf",
                imageLink: "/GCT565_Fall2021/Team4.jpg",
                videoLink: "",
                recognition: "SIGGRAPH 2022 Emerging Technologies"
            },
            {
                title: "The Impact of the Displayed Emotions of the Virtual Avatar on the Emotional State of the User",
                authors: "Tatiana Chivisova & Bowon Kim",
                slideLink: "/GCT565_Fall2021/Team5.pdf",
                imageLink: "/GCT565_Fall2021/Team5.jpg",
                videoLink: "",
                recognition: ""
            },
            {
                title: "Co-presence in MR Museum: on the magnitude of physical and behavior manifestation",
                authors: "Eunseo Kim & Taewook Ha",
                slideLink: "/GCT565_Fall2021/Team6.pdf",
                imageLink: "/GCT565_Fall2021/Team6.jpg",
                videoLink: "",
                recognition: ""
            }
        ]
    },
]
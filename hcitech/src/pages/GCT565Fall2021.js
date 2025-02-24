import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <h2 class="card-title">Project Gallery<br />GCT565 (Augmented Humans), Fall 2021</h2>
        <div class = "row research_item mt-4">
            <div class="col-md-6">
                <h3><b>Immersive Multimodal MR Environment for Relieve stress</b><br /><br /></h3>
                <h4><i> Seonji Kim & Seongjin Park</i> <a href="./GCT565_Fall2021/Team1.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team1.jpg" style={{height: "200px"}} />
            </div>
            <div class="col-md-6">
                <h3><b>Depth aware Real-time 6DoF Object Pose Tracking for Augmented Reality</b></h3>
                <h4><i>Chaejung Maeng</i> <a href="./GCT565_Fall2021/Team2.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team2.jpg" style={{height: "200px"}} />
            </div>
        </div>

        <div class = "row research_item mt-4">
            <div class="col-md-6">
                <h3><b>A Comprehensive Procedure for Personalized Happiness Recommender System: Using Multi-Faceted Signal Processing with Holistic Quantified Self (HQS)</b></h3>
                <h4><i>Eunhwa Song & Byeong-Yun Ko</i> <a href="./GCT565_Fall2021/Team3.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team3.jpg" style={{height: "200px"}} />
            </div>
            <div class="col-md-6">
                <h3><b>Sense of Embodiment(SoE) Amplification for Paraplegic People by Lower Body Motion Generation in Virtual Reality<br /><span class="blue">SIGGRAPH 2022 Emerging Technologies</span></b></h3>
                <h4><i>Hyuckjin Jang & Taehei Kim</i> <a href="./GCT565_Fall2021/Team4.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team4.jpg" style={{height: "200px"}} />
            </div>
        </div>

        <div class = "row research_item mt-4">
            <div class="col-md-6">
                <h3><b>The Impact of the Displayed Emotions of the Virtual Avatar on the Emotional State of the User</b></h3>
                <h4><i>Tatiana Chivisova & Bowon Kim</i> <a href="./GCT565_Fall2021/Team5.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team5.jpg" style={{height: "200px"}} />
            </div>
            <div class="col-md-6">
                <h3><b>Co-presence in MR Museum: on the magnitude of physical and behavior manisfestation</b></h3>
                <h4><i>Eunseo Kim & Taewook Ha</i> <a href="./GCT565_Fall2021/Team6.pdf" target="_blank">[Slide]</a></h4>
                <img class="img-fluid" src="/GCT565_Fall2021/Team6.jpg" style={{height: "200px"}}/>
            </div>
        </div>

    </SectionContainer>
  );
}
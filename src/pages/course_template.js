import SectionContainer from "@/components/section_container";

export default function CourseTemplate({code, title, description}) {
    return (
        <SectionContainer>
            <div class="container-fluid mb-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card h-100">
                            <div class="card-header bg-secondary text-white">
                                <br /><br /><center><h1 class="card-title">{code}<br />{title}</h1></center><br /><br />
                            </div>
                            <div class="card-body">{description}<br/></div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
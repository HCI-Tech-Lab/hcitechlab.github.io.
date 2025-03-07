import SectionContainer from "@/components/section_container";
import Link from "next/link";
import {gradStudents, interns, gradAlumni, internAlumni} from "@/data/members_data";
import MemberImage from "@/components/member_image";
import { Fragment } from "react";

export default function Team() {
    return (
      <SectionContainer>
        <div>
            <div className="col-lg-12 col-12" style={{textAlign: "center", paddingBottom: "20px"}}>
                <img className="img-fluid img-thumbnail img-title" src="./img/Lab/Group/2024_02.JPG" /><br />
                <h5><Link href="/gallery">See All Group Photos</Link></h5>
            </div>
        </div>
        <ProfessorCard />
        <GradStudents />
        {/*<Interns /> */}
        <AdministrativeStaff />
        <GradAlumni />
        <InternAlumni />
      </SectionContainer>
    );
  }

const ProfessorCard = () => {
  return (
    <div className = "row">
        <h2 className="card-title">Faculty</h2>
        <div className="col-lg-3 col-6" style={{paddingBottom: "20px", paddingLeft: "60px"}}>
          <MemberImage originalImage = "/img/Member/Sang.jpg" hoverImage = "/main_icon.png" />
        </div>
        <div className="col-lg-6 col-6" style={{textAlign: "left", paddingBottom: "20px"}}>
            <b style={{fontSize: "24px"}}>Sang Ho Yoon</b>
            <br/>Assistant Professor @ <Link href="https://ct.kaist.ac.kr/boards/view/faculty_board/119" target="_blank">Graduate School of Culture Technology</Link>
            <br/>Joint Professor @ <Link href="https://cs.kaist.ac.kr/people/view?idx=626&kind=faculty&menu=160" target="_blank">School of Computing</Link> & <Link href="https://meta.kaist.ac.kr/" target="_blank">Graduate School of Metaverse</Link>
            <br/>Member of <Link href="https://hci.kaist.ac.kr/" target="_blank">KAIST HCI Group</Link><br/>
            Office: N5 3F #2327<br/><br/>
            <div className = "contact-box">
              <Link href="https://sanghoy.com/" target="_blank"><i className = "bi bi-house-door-fill"/></Link>
              {/* <Link href="mailto:ProfessorMail" target="_blank"><i className = "bi bi-envelope-fill"/></Link>
              <Link href="ProfessorLinkedIn" target="_blank"><i className = "bi bi-linkedin"/></Link> */}
            </div>
        </div>
        <div className="col-lg-3 col-6" style={{textAlign: "center", paddingBottom: "20px"}}>
        </div>
        <div className="col-lg-3 col-6" style={{textAlign: "left", paddingBottom: "20px"}}>
        </div>
    </div>
  );
}

const GradStudents = () => {
  return (
    <div className = "row">
      <h2 className="card-title">Graduate Students</h2>
      {
        gradStudents.map(
          (member, index) => (
            <Fragment key = {index}>
              <div className = "col-lg-3 col-3" style={{paddingBottom: "20px", paddingLeft: "60px"}}>
                <MemberImage originalImage = {member['img']} hoverImage = {member['hoverImg']} />
              </div>
              <div className="col-lg-3 col-3">
                <b style={{fontSize: "24px"}}>{member['name']} </b><br/>
                {member['title']}<br/>
                {member['note']}<br/>
                <br/>
                <div className = "contact-box">
                  {member['link'] == "#" ? null : <Link href={member['link']} target="_blank"><i className = "bi bi-house-door-fill"/></Link>}
                  {member['mail'] == "#" ? null : <Link href={`mailto:${member['mail']}`} target="_blank"><i className = "bi bi-envelope-fill"/></Link>}
                  {member['linkedin'] == "#" ? null : <Link href={member['linkedin']} target="_blank"><i className = "bi bi-linkedin"/></Link>}
                </div>
              </div>
              
            </Fragment>
          )
        )
      }
      <div className="col-lg-3 col-6" style={{textAlign: "center", paddingBottom: "20px"}}>
            <picture>
                <img className="img-fluid img-thumbnail img-people" src="/main_icon.PNG" />
            </picture>
      </div>
      <div className="col-lg-3 col-6" style={{textAlign: "left"}}>
            <br/><br/><br/><b><Link href="/recruiting_graduate">See Openings</Link></b>
      </div>
    </div>
    
  );
}

const Interns = () => {
  return (
    <div className = "row">
      <h2 className="card-title">Interns</h2>
      {
        interns.map(
          (member, index) => (
            <Fragment key = {index}>
              <div key = {index} className = "col-lg-3 col-3" style={{paddingBottom: "20px", paddingLeft: "60px"}}>
                <MemberImage originalImage = {member['img']} hoverImage = {member['hoverImg']}/>
              </div>
              <div className="col-lg-3 col-3">
                  <b style={{fontSize: "24px"}}>{member['name']}</b><br/>
                  {member['title']}<br/>
                  {member['note']}<br/>
                  <div className = "contact-box">
                    {member['link'] == "#" ? null : <Link href={member['link']} target="_blank"><i className = "bi bi-house-door-fill"/></Link>}
                    {member['mail'] == "#" ? null : <Link href={`mailto:${member['mail']}`} target="_blank"><i className = "bi bi-envelope-fill"/></Link>}
                    {member['linkedin'] == "#" ? null : <Link href={member['linkedin']} target="_blank"><i className = "bi bi-linkedin"/></Link>}
                </div>
              </div>
            </Fragment>
          )
        )
      }
    </div>
    
  );
}

const AdministrativeStaff = () => {
  return (
    <div className = "row">
      <h2 className="card-title">Administrative Staff</h2>
      <div className = "col-lg-3 col-3" style={{paddingBottom: "20px", paddingLeft: "60px"}}>
        <MemberImage originalImage = "/img/Member/DY.jpeg" hoverImage = "/main_icon.png" />
      </div>
      <div className="col-lg-3 col-6" style={{textAlign: "left"}}>
        <b>Dasom Yoo</b><br/>
        <br/>
        Tel: +82-42-350-5915<br/>
        Office: N25 2F #3241
      </div>
    </div>
  );
}

const GradAlumni = () => {
  return (
    <div>
      <h2 className="card-title">Alumni (Graduate Students)</h2>
      {
        gradAlumni.map(
          (member, index) => (
            <p key = {index} className="alumni">
              {member['nameLink'] == '#' ? member['name'] + " " : <Link href={member['nameLink']} target="_blank">{member['name']} </Link>} 
              <span className="type">{member['title']} </span>
              <span className="period">{member['period']} </span>
              {member['thesisLink'] == "#" ? "" : <Link href={member['thesisLink']} target="_blank">Thesis </Link>} 
              <span className = "type">{member['current']}</span>
            </p>
          )
        )
      }
    </div>
  );
}

const InternAlumni = () => {
  return (
    <div>
      <h2 className="card-title">Alumni (Interns)</h2>
      {
        internAlumni.map(
          (member, index) => (
            <p key = {index} className="alumni">
              {member['nameLink'] == '#' ? member['name'] + " " : <Link href={member['nameLink']} target="_blank">{member['name']} </Link>} 
              <span className="type">{member['title']} </span>
              <span className="period">{member['period']} </span>
              <span className = "type">{member['current']}</span>
            </p>
          )
        )
      }
    </div>
  );
}

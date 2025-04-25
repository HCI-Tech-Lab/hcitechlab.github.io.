import SectionContainer from "@/components/section_container";
import Link from "next/link";
import {phdStudents, interns, msStudents, gradAlumni, internAlumni} from "@/data/members_data";
import MemberImage from "@/components/member_image";
import { Fragment } from "react";

export default function Team() {
    return (
      <SectionContainer>
        <div>
            <div className="col-lg-12 col-12" style={{textAlign: "center", paddingBottom: "20px"}}>
                <img className="img-fluid img-thumbnail img-title" src="./img/Lab/Group/2024_05_0.jpg" /><br />
                <h5><Link href="/gallery">See All Group Photos</Link></h5>
            </div>
        </div>
        <ProfessorCard />
        <PhdStudents />
        <MasterStudents />
        {/*<Interns /> */}
        <AdministrativeStaff />
        <GradAlumni />
        <InternAlumni />
      </SectionContainer>
    );
  }

const ProfessorCard = () => {
  return (
    <div className = "container-fluid">
      <div className = "row justify-content-center">
        <h1 className="card-title" style = {{textAlign: "center"}}>Faculty</h1>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{paddingBottom: "20px"}}>
          <MemberImage originalImage = "img/Member/Sang.jpg" hoverImage = "main_icon.png" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{textAlign: "left", paddingBottom: "20px"}}>
            <b style={{fontSize: "24px"}}>Sang Ho Yoon</b>
            <br/>Associate Professor @ <Link href="https://ct.kaist.ac.kr/boards/view/faculty_board/119" target="_blank">Graduate School of Culture Technology</Link>
            <br/>Joint Professor @ <Link href="https://cs.kaist.ac.kr/people/view?idx=626&kind=faculty&menu=160" target="_blank">School of Computing</Link><br /> <Link href="https://robots.kaist.ac.kr/" target="_blank">Robotics Program</Link><br /> <Link href="https://meta.kaist.ac.kr/" target="_blank">Graduate School of Metaverse</Link>
            <br/>Member of <Link href="https://hci.kaist.ac.kr/" target="_blank">KAIST HCI Group</Link><br/>
            Office: N5 3F #2327<br/><br/>
            <div className = "contact-box">
              <Link href="https://sanghoy.com/" target="_blank"><i className = "bi bi-house-door-fill"/></Link>
              <Link href="mailto:sangho@kaist.ac.kr" target="_blank"><i className = "bi bi-envelope-fill"/></Link>
              <Link href="https://www.linkedin.com/in/sanghoy" target="_blank"><i className = "bi bi-linkedin"/></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

const PhdStudents = () => {
  return (
    <div className = "container-fluid">
      <div className = "row justify-content-center">
      <h1 className="card-title" style = {{textAlign: "center"}}>PhD Students</h1>
        {
          phdStudents.map(
            (member, index) => (
              <Fragment key = {index}>
                <div className = "col-lg-3 col-md-4 col-sm-6 col-12" style = {{textAlign: "center"}}>
                  <MemberImage originalImage = {member['img']} hoverImage = {member['hoverImg']} />
                  <b style={{fontSize: "24px"}}>{member['name']} </b><br/>
                  <span style={{fontSize: "14px"}}>{member['interest'] == "Research Interest" ? "" : member['interest']}</span><br/>
                  <br/>
                  <div className = "contact-box">
                    {member['link'] == "#" ? null : <Link href={member['link']} target="_blank"><i className = "bi bi-house-door-fill"/></Link>}
                    {member['mail'] == "#" ? null : <Link href={`mailto:${member['mail']}`} target="_blank"><i className = "bi bi-envelope-fill"/></Link>}
                    {member['linkedin'] == "#" ? null : <Link href={member['linkedin']} target="_blank"><i className = "bi bi-linkedin"/></Link>}
                  </div>
                  <span style={{fontSize: "12px"}}>{member['note']}</span><br/><br/>
                </div>
              </Fragment>
            )
          )
        }
      </div>
    </div>
  );
}

const MasterStudents = () => {
  return (
    <div className = "container-fluid">
      <div className = "row justify-content-center">
      <h1 className="card-title" style = {{textAlign: "center"}}>MS Students</h1>
        {
          msStudents.map(
            (member, index) => (
              <Fragment key = {index}>
                <div className = "col-lg-3 col-md-4 col-sm-6 col-12" style = {{textAlign: "center"}}>
                  <MemberImage originalImage = {member['img']} hoverImage = {member['hoverImg']} />
                  <b style={{fontSize: "24px"}}>{member['name']} </b><br/>
                  <span style={{fontSize: "14px"}}>{member['interest'] == "Research Interest" ? "" : member['interest']}</span><br/>
                  <br/>
                  <div className = "contact-box">
                    {member['link'] == "#" ? null : <Link href={member['link']} target="_blank"><i className = "bi bi-house-door-fill"/></Link>}
                    {member['mail'] == "#" ? null : <Link href={`mailto:${member['mail']}`} target="_blank"><i className = "bi bi-envelope-fill"/></Link>}
                    {member['linkedin'] == "#" ? null : <Link href={member['linkedin']} target="_blank"><i className = "bi bi-linkedin"/></Link>}
                  </div>
                  <span style={{fontSize: "12px"}}>{member['note']}</span><br/><br/>
                </div>
              </Fragment>
            )
          )
        }
      </div>
    </div>
  );
}

// const Interns = () => {
//   return (
//     <div className = "row">
//       <h2 className="card-title">Interns</h2>
//       {
//         interns.map(
//           (member, index) => (
//             <Fragment key = {index}>
//               <div key = {index} className = "col-lg-3 col-3" style={{paddingBottom: "20px", paddingLeft: "60px"}}>
//                 <MemberImage originalImage = {member['img']} hoverImage = {member['hoverImg']}/>
//               </div>
//               <div className="col-lg-3 col-3">
//                   <b style={{fontSize: "24px"}}>{member['name']}</b><br/>
//                   {member['title']}<br/>
//                   {member['note']}<br/>
//                   <div className = "contact-box">
//                     {member['link'] == "#" ? null : <Link href={member['link']} target="_blank"><i className = "bi bi-house-door-fill"/></Link>}
//                     {member['mail'] == "#" ? null : <Link href={`mailto:${member['mail']}`} target="_blank"><i className = "bi bi-envelope-fill"/></Link>}
//                     {member['linkedin'] == "#" ? null : <Link href={member['linkedin']} target="_blank"><i className = "bi bi-linkedin"/></Link>}
//                 </div>
//               </div>
//             </Fragment>
//           )
//         )
//       }
//     </div>
    
//   );
// }

const AdministrativeStaff = () => {
  return (
    <div className = "container-fluid">
      <div className = "row justify-content-center">
      <h1 className="card-title" style = {{textAlign: "center"}}>Administrative Staff</h1>
        <div className = "col-lg-3 col-md-4 col-sm-6 col-12" style={{paddingBottom: "20px"}}>
          <MemberImage originalImage = "img/Member/DY.jpeg" hoverImage = "main_icon.png" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{textAlign: "left"}}>
          <b style={{fontSize: "24px"}}>Dasom Yoo</b><br/>
          <br/>
          Tel: +82-42-350-5915<br/>
          Office: N25 2F #3241
        </div>

        <div className = "col-lg-3 col-md-4 col-sm-6 col-12" style={{paddingBottom: "20px"}}>
          <MemberImage originalImage = "img/Member/NK.jpg" hoverImage = "main_icon.png" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{textAlign: "left"}}>
          <b style={{fontSize: "24px"}}>Nahyeong Kim</b><br/>
          <br/>
          Tel: +82-42-350-5914<br/>
          Office: N25 2F #3241
        </div>
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

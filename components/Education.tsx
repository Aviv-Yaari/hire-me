import { Tag } from "./shared/general.styled";
import Section from "./shared/Section";

export default function Education() {
  return (
    <Section>
      <h2>Education</h2>
      <ul>
        <li>
          2021: Coding-Academy Full-Stack Bootcamp. A 4 months, 640 hours intensive bootcamp. 
          Curriculum includes: <Tag>Sass</Tag>, <Tag>Javascript</Tag>, <Tag>Typescript</Tag>, <Tag>React</Tag>, <Tag>Bootstrap</Tag>, <Tag>jQuery</Tag>, 
          <Tag>Node</Tag>, <Tag>Express</Tag>, <Tag>Mongodb</Tag> and more.
          <br/>
          <a target="_blank" href="https://www.coding-academy.org/pdf/syllabus.pdf" rel="noreferrer">Syllabus</a>, <a target="_blank" href="https://github.com/martin-shn/swello" rel="noreferrer">Final project</a>.
        </li>
        <li>2015: SAP base training - IDF, &quot;Basmach&quot;.</li>
        <li>2014-2015: Software Engineering Technician diploma - &quot;Ort Kfar Saba&quot; College.</li>
        <li>2011-2014: High School Graduation, majored in computer science and physics - &quot;Aviv&quot; High School, Raanana.</li>
        <p>Hebrew - Mother tongue. English - Native</p>
      </ul>
    </Section>
  )
}

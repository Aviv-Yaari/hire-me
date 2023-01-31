import { PrimaryButton } from "./shared/Buttons.styled";
import { Tag } from "./shared/general.styled";
import Section from "./shared/Section";
import styled from "styled-components";
import { useRef } from "react";
import LazyLoad from "@/components/shared/LazyLoad";
import { fadeInAnimation } from "@/styles/animations";

export default function Experience() {
  const impervaRef = useRef<HTMLDivElement>(null);
  return (
    <Section>
      <Actions>
        <PrimaryButton onClick={() => window.open("https://drive.google.com/file/d/1MLUKvMlx77lTVCuu1qTUPoe_6dympmil/view?usp=sharing")}>Get PDF</PrimaryButton>
      </Actions>

      <h2>Experience</h2>

      {/* Imperva */}
      <div>
        <h3>2021 - Present: Fullstack Developer - Imperva</h3>
        <ul>
          <li>
            Created the infrastructure for <Tag>Typescript</Tag>-based frontend microservices in the organization, driven by a <Tag>Jenkins</Tag> job, and led its implementation.
          </li>
          <li>
            Led many frontend key features using <Tag>React</Tag> and <Tag>Redux</Tag>; Wrote tests using <Tag>Jest</Tag>.
          </li>
          <li>
            Contributed to frontend guild projects - used and configured popular frontend libraries and tools including: <Tag>Eslint</Tag>, <Tag>Styled-Components</Tag>, <Tag>Storybook</Tag>, <Tag>Vite</Tag>.
          </li>
          <li>
            Delivered new APIs and backend features using <Tag>microservices architecture</Tag>, <Tag>Java Spring Boot</Tag> and <Tag>MySQL</Tag> database; Wrote component tests and used tools such as: <Tag>Grafana</Tag>, <Tag>Coralogix</Tag>, <Tag>Docker</Tag>, <Tag>Kubernetes</Tag>, <Tag>Datadog</Tag>.
          </li>
        </ul>
      </div>

      {/* Yes */}
      <SAPJobs ref={impervaRef}>        
        <LazyLoad parentRef={impervaRef} threshold={1}>
          <div>
            <h3>2020: SAP Consultant - Yes</h3>
            <ul>
              <li>
                Sole responsible for SAP HR implementation.
              </li>
              <li>
                Led new developments from end to end - from understanding the client&apos;s demand and writing specification documents to working with the development teams, testing and debugging, production deployment, bug fixing and support.
              </li>
            </ul>
          </div>

          {/* IDF */}
          <div>
            <h3>2015 - 2019: SAP Consultant - IDF, “Mazpen” Unit</h3>
            <ul>
              <li>
                Significant contribution to <a target="_blank" href="https://www.pc.co.il/news/240446/" rel="noreferrer">&quot;Yesodot&quot;</a> project, from Blueprint to Go Live & Support.
              </li>
              <li>
                Experience in writing specification documents for a large number of new developments, Extensive QA and Debugging.
              </li>
            </ul>
          </div>
        </LazyLoad>
      </SAPJobs>
    </Section>
  )
};

const SAPJobs = styled.div`
  min-height: 20em;
  div {
    animation: ${fadeInAnimation} 3s;
  }
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

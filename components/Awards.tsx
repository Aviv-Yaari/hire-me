import Image from "next/image";
import Section from "./shared/Section";
import mvpAwardImage from '../public/mvp-award.jpg'
import styled from "styled-components";

export default function Awards() {
  return (
    <Section>
      <h2>Awards</h2>
      <ul>
        <li>Frontend Guild&apos;s 2022 MVP - Imperva.</li>
        <li>Scholarship for excellence - Coding Academy.</li>
        <li>Outstanding contribution and dedication - SAP HR Consultant, IDF.</li>
        <li>#1 performing graduate (picked among ~20 participants) - SAP base training, IDF.</li>
      </ul>
      <ImageContainer>
        <Image src={mvpAwardImage} alt="MVP Award" />
      </ImageContainer>
    </Section>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`
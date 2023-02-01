import Image from "next/image";
import styled from "styled-components";
import Section from "./shared/Section";
import githubImage from '../public/github-mark.svg'
import linkedinImage from '../public/linkedin-mark.svg'
import profileImage from '../public/profile.jpeg'
import LazyLoad from "@/components/shared/LazyLoad";
import { fadeInAnimation } from "@/styles/animations";
import { useRef } from "react";
import { mobileBreakpoint } from "@/styles/theme";

export default function AboutMe() {
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <Section>
      <h2>About me</h2>
      <p>Currently working for <b>Imperva</b> as a <b>Fullstack developer</b>.</p>
      <p>Received the <b>“MVP”</b> <a target='_blank' href="https://drive.google.com/file/d/1Fv9LUQyqrrl682j4J8uMTmNMsRzFhpBB/view?usp=share_link" rel="noreferrer">award in 2022</a>  for significant contribution to Imperva&apos;s frontend guild.</p>
      <p>Prior to that, I finished the <a target='_blank' href="https://www.coding-academy.org/pdf/syllabus.pdf" rel="noreferrer">Coding Academy bootcamp</a> with a <b>scholarship for excellence</b>. </p>
      <p>I&apos;m an autodidact and motivated team player with a passion for technology.</p>
      <p>Looking for my next challenge as a <b>Fullstack / Frontend Developer</b>.</p>
      <p>PS - Other than that, I enjoy traveling, reading books, cooking, watching football and playing the guitar. OK, and making memes.</p>
      <ContactInfo>
        <span>☎️ +972-52-8953410</span>
        <a target='_blank' href="mailto:avivyar@gmail.com" rel="noreferrer">✉️ <span>avivyar@gmail.com</span></a>
        <a target='_blank' href="https://github.com/Aviv-Yaari" rel="noreferrer"><Image src={githubImage} alt="github" width={16}/><span>Github</span></a>
        <a target='_blank' href="https://www.linkedin.com/in/aviv-yaari" rel="noreferrer"><Image src={linkedinImage} alt="linkedin" width={16}/><span>Linkedin</span></a>
      </ContactInfo>
      <ImageContainer ref={imageRef}>
        <LazyLoad parentRef={imageRef}>
          <Image src={profileImage} alt="Profile image" />
        </LazyLoad>
      </ImageContainer>
    </Section>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;

  @media (${mobileBreakpoint}) {
    min-height: 400px;
  }

  img {
    animation: ${fadeInAnimation} ease 750ms;
    border-radius: 6px;
    width: 100%;
    max-width: 600px;
    height: auto;
  }
`

const ContactInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-block: 3em;
  flex-wrap: wrap;
  flex-direction: column;

  @media (${mobileBreakpoint}) {
    flex-direction: row;
  }
  
  > span, > a {
    border: 1px dashed black;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;

    &:hover span {
      text-decoration: underline; 
    }
  }
`
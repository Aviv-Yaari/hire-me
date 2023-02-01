import { mobileBreakpoint } from "@/styles/theme";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./shared/Buttons.styled";
import Section from "./shared/Section";

interface Props {
  onLearnMore: () => void;
}

export default function Introduction({ onLearnMore }: Props) {
  return (
    <Section>
      <Title>Hi! My name is Aviv,<br></br>and I can center a div in CSS.</Title>
      <Actions>
        <PrimaryButton onClick={() => window.open('mailto:avivyar@gmail.com')}>Hire me</PrimaryButton>
        <SecondaryButton onClick={onLearnMore}>Learn more</SecondaryButton>
      </Actions>
    </Section>
  )
};

export const Title = styled.h1`
  @media (${mobileBreakpoint}) {
    text-align: center;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

import { mobileBreakpoint } from "@/styles/theme";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./shared/Buttons.styled";
import { TypeAnimation } from 'react-type-animation';
import Section from "./shared/Section";
import { useState } from "react";
import { fadeInAnimation } from "@/styles/animations";

interface Props {
  onLearnMore: () => void;
}

export default function Introduction({ onLearnMore }: Props) {
  const [doneTyping, setDoneTyping] = useState(false);
  return (
    <Section>
      <Title>
        <TypeAnimation
          sequence={[
            'Hi! My name is Aviv,',
            300,
            'Hi! My name is Aviv, and I xan',
            300,
            "Hi! My name is Aviv, and I can center a div in CSS.",
            () => setDoneTyping(true)
          ]}
          wrapper="span"
          cursor={true}
        />
      </Title>
      {doneTyping && (
        <Actions>
          <PrimaryButton onClick={() => window.open('mailto:avivyar@gmail.com')}>Hire me</PrimaryButton>
          <SecondaryButton onClick={onLearnMore}>Learn more</SecondaryButton>
        </Actions>
      )}
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
  animation: ${fadeInAnimation} ease 800ms;
`

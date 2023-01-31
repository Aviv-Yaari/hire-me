import LazyLoad from "@/hooks/useLazyLoad";
import { fadeInAnimation } from "@/styles/animations";
import { mobileBreakpoint } from "@/styles/theme";
import { useRef } from "react";
import styled from "styled-components"

export default function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <SectionContainer ref={ref}>
      <LazyLoad parentRef={ref}>
        <SectionBox>{children}</SectionBox>
      </LazyLoad>
    </SectionContainer>
  )
};

export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionBox = styled.article`
  animation: ${fadeInAnimation} ease 750ms;
  background: ${({theme}) => theme.background.secondary};
  border-radius: 10px;
  border: 1px dashed black;
  width: 100%;
  max-width: 850px;
  position: relative;
  margin-block: 1em;
  padding: 1em;
  
  @media (${mobileBreakpoint}) {
    padding: 4em;
  }

  h1, h2 {
    margin-block-start: 0;
  }
`
import LazyLoad from "@/components/shared/LazyLoad";
import { fadeInAnimation } from "@/styles/animations";
import { mobileBreakpoint } from "@/styles/theme";
import { useRef } from "react";
import styled, { css } from "styled-components"

interface Props {
  children?: React.ReactNode;
  minHeight?: string;
}

export default function Section({ minHeight, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  return (
    <SectionContainer ref={ref}>
      <LazyLoad parentRef={ref}>
        <SectionBox minHeight={minHeight}>{children}</SectionBox>
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

export const SectionBox = styled.article<{ minHeight: Props['minHeight'] }>`
  animation: ${fadeInAnimation} ease 750ms;
  background: ${({theme}) => theme.background.secondary};
  border-radius: 10px;
  border: 1px dashed black;
  width: 100%;
  max-width: 850px;
  position: relative;
  margin-block: 1em;
  padding: 1em;
  ${({minHeight}) => minHeight && css`min-height: ${minHeight};`}  

  @media (${mobileBreakpoint}) {
    padding: 4em;
  }

  h1, h2 {
    margin-block-start: 0;
  }
`
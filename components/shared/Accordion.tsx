import styled from 'styled-components';

interface Props extends React.PropsWithChildren {
    title: string;
    open?: HTMLDetailsElement['open'];
}

export default function Accordion({ title, open, children }: Props) {
  return (
    <Container open={open}>
      <Summary><h3>{title}</h3></Summary>
      {children}
    </Container>
  )
}

const Container = styled.details`
  &[open] > summary::before {
    transform: rotate(180deg);
  }

  /* Open animation: */

  >:nth-child(2) {
    transition: transform 200ms, opacity 200ms;
  }

  &[open] > :nth-child(2) {
    opacity: 1;
  }

  &:not([open]) > :nth-child(2) {
    opacity: 0;
    transform: translateY(-0.5em);
  }
`

const Summary = styled.summary`
  display: flex;
  align-items: center;
  cursor: pointer;

  ::before {
    transition: transform 200ms;
    background-image: url('/expand-more.svg');
    background-size: 1.75em;
    width: 1.75em;
    height: 1.75em;
    content: "";
  }

  :hover {
    color: ${({theme}) => theme.text.secondary}
  }
`
import Image from 'next/image';
import styled from 'styled-components';
import expandMore from '../../public/expand-more.svg'
import { openAnimation } from '@/styles/animations';

interface Props extends React.PropsWithChildren {
    title: string;
    open?: HTMLDetailsElement['open'];
}

export default function Accordion({ title, open, children }: Props) {
  return (
    <Container open={open}>
      <Summary>
        <Image src={expandMore} alt='Expand' width={24} />
        <h3>{title}</h3>
      </Summary>
      {children}
    </Container>
  )
}

const Container = styled.details`
  &[open] > summary img {
    transform: rotate(180deg);
  }

  >:nth-child(2) {
    animation: ${openAnimation} 400ms;
  }
`

const Summary = styled.summary`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    transition: transform 200ms;
  }

  :hover {
    color: ${({theme}) => theme.text.secondary}
  }
`
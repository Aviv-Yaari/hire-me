import Image from 'next/image';
import styled from 'styled-components';
import expandMore from '../../public/expand-more.svg'
import { useState } from 'react';

/* note: for some reason, only for the <details> html element,
the simple css open and close transitions work on firefox yet don't work on chrome and other browsers.
therefeore i needed to decide if to manually add them using js, or use other elements instead of <details>.
i decided to use other elements because manually adding the animation made the code too complex compared to the benefits */

interface Props extends React.PropsWithChildren {
    title: string;
}

export default function Accordion({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(open => !open);
  }

  return (
    <Container open={open}>
      <Summary onClick={handleClick}>
        <Image src={expandMore} alt='Expand' width={24} />
        <h3>{title}</h3>
      </Summary>
      {children}
    </Container>
  )
}

const Container = styled.section<{open: boolean}>`
  &[open] > summary img {
    transform: rotate(180deg);
  }

  >:nth-child(2) {
    transition: all 250ms;
    max-height: 1000px;
    margin: 0;
    overflow: hidden;
  }

  &:not([open])>:nth-child(2) {
    max-height: 0;
    opacity: 0;
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
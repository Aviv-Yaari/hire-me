import styled from "styled-components";
import { IBM_Plex_Sans } from '@next/font/google'

const ibmPlexSans = IBM_Plex_Sans({subsets: ['latin'], weight: ['400','500','600']});

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 1.25em;
  font-family: ${ibmPlexSans.style.fontFamily};
  transition: background-color 200ms;
`

// TODO: use theme only once in the top level.

export const PrimaryButton = styled(Button)`
  background: ${({theme}) => theme.buttons.primaryBg};
  color: ${({theme}) => theme.buttons.primaryText};
  border: 1px solid ${({theme}) => theme.buttons.primaryHoverBg};
  :hover {
    background: ${({theme}) => theme.buttons.primaryHoverBg};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${({theme}) => theme.buttons.secondaryBg};
  color: ${({theme}) => theme.buttons.secondaryText};
  border: 1px solid ${({theme}) => theme.buttons.secondaryHoverBg};
  :hover {
    background: ${({theme}) => theme.buttons.secondaryHoverBg};
  }
`;
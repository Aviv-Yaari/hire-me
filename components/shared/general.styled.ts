import { IBM_Plex_Sans } from "@next/font/google";
import styled from "styled-components";

const ibmPlexSans = IBM_Plex_Sans({subsets: ['latin'], weight: ['400','500','600']});

export const Tag = styled.span`
  background: ${({theme}) => theme.tag.bg};
  padding: 2px 4px;
  font-size: 0.9em;
  border: 1px solid ${({theme}) => theme.tag.border};
  border-radius: 4px;
  font-family: ${ibmPlexSans.style.fontFamily};
  cursor: default;

  :hover {
    background: ${({theme}) => theme.buttons.primaryBg};
    color: ${({theme}) => theme.buttons.primaryText};
  }
`
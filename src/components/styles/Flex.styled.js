import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  /* any direct div or ul  will be set to 1
  flex-grow : 1;    ➜ The div will grow in same proportion as the window-size       
flex-shrink : 1;  ➜ The div will shrink in same proportion as the window-size 
flex-basis : 0;   ➜ The div does not have a starting value as such and will 
                     take up screen as per the screen size available for
                     e.g:- if 3 divs are in the wrapper then each div will take 33%.
  */
  & > div,
  & > ul {
    flex: 1;
  }
`;

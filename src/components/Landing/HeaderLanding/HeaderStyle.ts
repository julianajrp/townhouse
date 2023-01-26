import styled from "styled-components";

export const StyledHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 40px;
align-items: center;


@media (max-width: 474px){
  gap: 20px;
  padding: 10px;
 
} 

`
export const TitleLogo = styled.h1`
font-family: Inter;
color: #fff;
` 
export const Navigatore = styled.nav`
display: flex;
gap: 40px;

a {
    color: #fff
    
  }

  a:hover {
    border-bottom: #fff solid 2px;
    ;
  }
  img {
    display:none;
   }
   @media (max-width: 474px){
   img{
    display: block;
    width: 35px;
    height: 40px;
   }
   a:hover {
    border-bottom: none;
    ;
  }
  }
  
` 
export const StyledP = styled.p`
@media (max-width: 474px){
  display:none
}
`
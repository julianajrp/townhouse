
import styled from "styled-components";

export const Background = styled.div`
background-color: #00684d;
width: 100vw;
height: 100vh;
padding-top: 10px;
img{
    width: 80vw;
    height: 80vh;
    border-radius: 15px;
    }
    @media (max-width: 474px) {
        img{
            height: 40vh;
        }
        @media (max-width: 380px)  
    `

export const Faixa = styled.div`
background-color: #00c8936e;
width: 50%;
padding: 15px 80px 15px 20px;
position: absolute; 
top: 30px;
right:507px;
p{
    color: #fff;
    font-size: 30px;
}
strong{
    color: transparent;
}

@media (max-width: 1020px) {

    right:405px   
}
@media (max-width: 1010px) {

    right:390px   
}
@media (max-width: 937px) {

    right:370px   
}
@media (max-width: 877px) {

    right:350px   
}
@media (max-width: 817px) {

    right:325px   
}
@media (max-width: 777px) {

    right:305px   
}
@media (max-width: 722px) {

    right:285px   
}
@media (max-width: 697px) {

    right:270px   
}
@media (max-width: 650px) {

width: 92%;
padding: 5px 40px 5px 20px;
position: fixed; 
top: 30px;
right: 20px;  
}
@media (max-width: 474px) {

    width: 92%;
    padding: 5px 40px 5px 20px;
    position: fixed; 
    top: 30px;
    right: 20px;  

    p{
        color: #fff;
        font-size: 20px;
    }
    }
`
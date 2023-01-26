import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
.btn {
   /* --c1: var(--color-primary);
   --c2: lightgreen; */
   width: 100%;
   height: 48px;
   text-align: center;
   transition: 0.5s;
   /* background: linear-gradient(90deg, var(--c1, var(--color-primary)), var(--c2, #00C894) 51%, var(--c1, var(--color-primary))) var(--x, 0)/ 200%; */
   color: white;
   font-weight: 700;
   font-size: 16px;
   border: none;
   border-radius: 8px;
   font-family: var(font-secundary);
   background-color: var(--color-primary-focus);
   cursor: pointer;
}

.btn:hover {
   /* --x: 100%; */
   background-color: var(--color-primary);
}

.btn:disabled{
   opacity: 0.5;
}

.btn2:hover {
   background-color: var(--gray-2);
   cursor: pointer;
}

.btn.second {
   background-color: var(--gray-1);
   opacity: 0.4;
   cursor: pointer;
}

.btn.second:hover {
   opacity:1;
}
`;

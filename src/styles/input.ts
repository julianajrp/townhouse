import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.input {
font-family: var(--font-secundary);
 line-height: 28px;
 border: 2px solid transparent;
 border-bottom-color: var(--gray-1);
 padding: .2rem 0;
 outline: none;
 background-color: transparent;
 color: #0d0c22;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.input:focus, input:hover {
 outline: none;
 padding: .2rem 1rem;
 border-radius: 8px;
 border-color: var(--color-primary);
}

.input::placeholder {
 color: var(--gray-1);
}

.input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}
`;

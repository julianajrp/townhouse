import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    
    --color-primary: #00C894;
    --color-primary-focus: #00804B;
    --color-primary-error: #00684d;
    
    --black: #121214;
    --black-opacity: rgba(0, 0, 0, 0.2);
    --gray-0: #212529;
    --gray-1: #868E96;
    --gray-2: #DEE2E6;
    --gray-3: #F8F9FA;
    --gray-4: #d9d9d9
    
    --white: #FFFFFF;

    --sucess: #82C91E;
    --error: #F03E3E;
    --warning: #FCC419;

    


    --font-primary: 'Roboto', sans-serif;
    --font-secundary: 'Inter', sans-serif;
    }
    
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--font-secundary);
    text-decoration: none;
    list-style: none;
    }

    body,html{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    }

    .mainTitle {
        font-family: var(--font-primary);
        color: var(--black);
        font-size: 26px;
        font-weight: 900;
    }

    .heading {
        font-family: var(--font-secundary);
        color: var(--black);
        font-size: 26px;
        font-weight: 700;
    }

    .heading.two {
        font-size: 22px;
    }

    .heading.three {
        font-size: 18px;
    }

    .heading.four {
        font-size: 14px;
    }

    .body {
        font-size: 14px;
        font-weight: 500;
    }

    .headline {
        font-weight: 400;
        font-size: 16px;
        font-family: var(--font-secundary);
    }

    .headline.error{
        font-size: 10px;
        color: var(--color-primary-error);
    }

    .caption {
        font-size: 10px;
        font-weight: 500;
    }

    @media(min-width: 1024px){
            /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #00804ba6 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00804ba6;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
    }
`;

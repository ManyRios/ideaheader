import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`

:root{
    --white: #fff;
    --black: #000;
    --idea-color: #021d5b;
    --light-gray: #fffa; 

}

body{
    background-color: var(--white);
   
}

.navbar-brand{
    text-decoration: none;
    margin-left: 10%;
    font-size: 30px;
    font-weight: bold;
    color: var(--white);
  }

  .nav{
    display: flex;
   
    align-items: center;
  }




  .dropdown{
    margin-left: 3%; 
  }

  .dropdown-menu{
    
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }

  .dropdown-menu::before{
    border-bottom: 9px solid rgba(0, 0, 0, 0.2);
    border-left: 9px solid rgba(0, 0, 0, 0);
    border-right: 9px solid rgba(0, 0, 0, 0);
    content: "";
    display: inline-block;
    left: 16px;
    position: absolute;
    top: -8px;
}
  .dropdown-menu::after{
    border-bottom: 8px solid #FFFFFF;
    border-left: 9px solid rgba(0, 0, 0, 0);
    border-right: 9px solid rgba(0, 0, 0, 0);
    content: "";
    display: inline-block;
    left: 16px;
    position: absolute;
    top: -7px;
  }

  .rocket{
      color: blue;
  }

  .whitepaper{
      color: green;
  }

  .podcast{
      color: orange;
  }

  .twitter{
      color: blue;
  }

  .discord{
    color: lightgray;
  }

  .resources{
    color: blue;
  }
    

`;


export default GlobalStyle;
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background : #f0f2f5;
    --red : #E52E4D;
    --blue : #5429CC;
    --green : #33CC95;

    --blue-light :#6933FF;
    
    --text-title: #363F5F;
    --text-body : #969CB2;

    --shape: #FFFFFF;
}


*{
    margin : 0 ;
    padding : 0 ;
    box-sizing: border-box ;
}

html {
    @media (max-width : 1080px) {
        font-size : 93.75;                  // 15px  configuring the size of font accordingly the size screen of device   
    }

    @media (max-width : 720px){
        font-size : 87.5%;                  // 14px
    }
                                            // REM = 1rem = font size   
}


body {
    background :  var(--background);
    -webkit-font-smoothing : antialiased; 
}


body, input, textarea, button {             // these areas have his own font, so is necessary configure 
    font-family: 'Poppings',sans-serif;
    font-weight: 400 ;                      // we need back to 400
}


h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}


button {
    cursor : pointer ;
}


[disabled] {
    opacity: 0.6;
    cursor : not-allowed;
}


.react-modal-overlay {
    background : rgba(0, 0, 0, 0.5);
    position : fixed ; 
    top : 0 ;
    bottom : 0 ;
    right : 0 ;
    left : 0;
    display : flex ;
    align-items : center ;
    justify-content : center ;

}
.react-modal-content {
    width : 100% ;
    max-width: 576px;
    background : var(--background);
    padding : 3rem ;
    position : relative;  // to position items
    border-radius : 0.24rem;
} 


.react-modal-close {
    position : absolute ;
    right : 1.5rem;
    top : 1.5rem ;
    border: 0 ;
    background :transparent ;

    transition : filter 0.2s ;

    &:hover {
        filter : brightness(0.8);
    }
}

`
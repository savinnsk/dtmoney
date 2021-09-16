import  styled from 'styled-components' ;

export const Container = styled.div `

display : grid ;
grid-template-columns : repeat(3 , 1fr); // = 1fr 1fr 1fr
gap : 2rem;
margin-top : -10rem;


 @media (max-width : 720px){

       
    
        &{
            display: block;
           
        }

    }


div{
    background : var(--shape);
    padding : 1.5rem 2rem ;
    border-radius : 0.25rem;
    color : var(--text-title)
}


header {
    display:flex ;
    align-items : center ;
    justify-content : space-between;
}


strong {
    display : block ;  // margin inline don't have top 
    margin-top : 1rem ;
    font-size : 2rem ;
    font-weight : 500 ;
}

.highlight-background {
    background : var(--green);
    color : #FFF;
}


`

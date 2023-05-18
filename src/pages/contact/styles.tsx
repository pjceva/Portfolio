import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .contact-left{
        flex: 1.5;
        min-width: 209px;
        p{
            margin-top: 30px;
            i{
                color: #AEA1EA;
                margin-right: 15px;
                font-size: 25px;
            }
        }
    }
    .contact-right{
        flex: 2;
        min-width: 300px;
        form{
            width: 100%;
            input, textarea{
                width: 100%;
                border: 0px;
                outline: none;
                background: #262626;
                padding: 15px;
                margin: 15px 0;
                color: #fff;
                font-size: 18px;
                border-radius: 6px;
            }
        }
    }
    .fa-phone-square-alt                                                                                                                                                                                    {
        transform: rotateY(180deg)
    }

    .social-icons{
        margin-top: 30px;
        a{
            text-decoration: none;
            font-size: 30px;
            margin-right: 15px;
            color: #ababab;
            display: inline-block;
            transition: transform 0.5s;
            :hover{
                color: #AEA1EA;
                transform: translateY(-5px)
            }
        }
    }

    .btn2{
        display: inline-block;
    }

    @media (max-width: 400px){
        .contact-right, .contact-left{
            min-width: 170px;
        }
    }
    
`

import styled from 'styled-components'

export const Header = styled.header`
    height: 70px;

    box-shadow: 2px 2px 2px gray;

    .header__container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 70px;
        padding: 0 10px;

        &__logo{
            font-family: 'Dancing Script';
            text-align: center;

            padding-left: 20px;

            &__title{
                font-size: 30px;
            }
        }
    }
`
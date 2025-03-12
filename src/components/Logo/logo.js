import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 11rem;
    height: 2.3rem;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`

const LogoButton = styled.button`
    letter-spacing: 3px;
    text-decoration: none;
    font-size: 2rem;
    font-family: "Arial";
    margin: 0;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--primary-color);
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    transition: all .7s;    

    &:hover .hover-text{
        width: 7.2rem;
        filter: drop-shadow(0 0 23px var(--secondary-color));
        transition: all .7s;
    }
`

const HoverText = styled.span`
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--secondary-color);
    width: 0%;
    inset: 0;
    border-right: 6px solid var(--secondary-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--secondary-color);
    transition: all .7s;
`

function Logo() {
    return (
            <LogoContainer>
                <LinkStyled to="/">
                    <LogoButton data-text="Awesome">
                        <span>&nbsp;Star&nbsp;</span>
                        <HoverText className="hover-text" aria-hidden="true">&nbsp;Star&nbsp;</HoverText>
                    </LogoButton>
                </LinkStyled>
            </LogoContainer>
    );
}

export default Logo
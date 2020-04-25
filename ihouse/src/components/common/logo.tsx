import styled from "styled-components";
import React, {Component} from "react";

interface ILogoProps{
    size?: number
}

const DEFAULT_LOGO_SIZE = 210;
const LOGO = "/logo.png";
const LogoImage = styled.img`
  width: ${(props: ILogoProps) => props.size ? 
    props.size : 
    DEFAULT_LOGO_SIZE}px;
  height: auto;
`;

const Logo = ({size = DEFAULT_LOGO_SIZE}: ILogoProps) => {
    return (
        <LogoImage src={LOGO} size={size} />
    )
}

export default Logo;
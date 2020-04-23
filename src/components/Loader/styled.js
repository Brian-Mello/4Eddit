import styled, { keyframes } from "styled-components";

// loader animado 

export const Loading = styled.text `
    font-size: 9px;
    text-align: center;
`

const dash = keyframes  `
    100% { stroke-dashoffset: 136; }
`

export const Triangle = styled.polygon`
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`
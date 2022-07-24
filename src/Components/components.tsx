import styled from 'styled-components'

export const P = styled.p`
    line-height: 1.5;
    color: hsl(229, 8%, 60%);
    margin-block-end: 1.8rem;
    font-size: 1rem;

    &.card {
        margin-block-end: 1.5rem;
    }

    &.question {
        margin-block-start: 1.5rem;
    }
`

export const Button = styled.button`
    text-transform: capitalize;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
    padding-block: 1rem;
    padding-inline: .9rem;
    border: none;
    font-weight: bold;
    font-size: .9rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    /* filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2)); */
    border-radius: 8px;

    &.blue {
        /* box-shadow: none; */
        background-color: hsl(231, 69%, 60%);
        color: #ffffff;
    }

    &.blue.hidden {
        display: none;
    }

    &.blue.lg {
        padding-inline: 1.5rem;
        padding-block: 1rem;
        margin-block-start: 2rem;
    }

    &.red {

    }
`
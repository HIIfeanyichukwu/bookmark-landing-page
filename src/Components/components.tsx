import styled from 'styled-components'

export const P = styled.p`
    line-height: 1.5;
    color: hsl(229, 8%, 60%);
    margin-block-end: 1.8rem;
    font-size: 1rem;

    &.sect1 {
        @media (min-width: 1024px) {
            max-inline-size: 58ch;
        }

        @media (min-width: 1440px) {

        }
    }

    &.card {
        margin-block-end: 1.5rem;
    }

    &.question {
        margin-block-start: 1.5rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.2rem;
    }
`

export const Button = styled.button`
    cursor: pointer;
    transition: all .3s;
    text-transform: capitalize;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
    padding-block: 1rem;
    padding-inline: .9rem;
    border: 1px solid transparent;
    font-weight: bold;
    font-size: .95rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;


    @media (hover: hover) {
        :hover {
            background-color: transparent;
            border: 1px solid hsl(229, 31%, 21%);
        }
    }

    &.blue {
        /* box-shadow: none; */
        background-color: hsl(231, 69%, 60%);
        color: #ffffff;

        @media (hover: hover) {
            :hover {
                background-color: transparent;
                color: hsl(231, 69%, 60%);
                border: 1px solid hsl(231, 69%, 60%);
            }
        }
    }

    &.blue.hidden {
        display: none;

        @media (min-width: 768px) {
            display: block;
            margin-block-start: 2rem;
        }
    }

    &.blue.lg {
        padding-inline: 1.5rem;
        padding-block: 1rem;
        margin-block-start: 2rem;
    }

    &.red {
        background-color: hsl(0, 94%, 66%);
        color: #ffffff;
        inline-size: 100%;
        font-size: 1rem;

        @media (hover: hover) {
            :hover {
                color: hsl(0, 94%, 66%);
                border: 1px solid hsl(0, 94%, 66%);
                background-color: #ffffff;
            }
        }

        @media (min-width: 768px) {
            flex: 1;
        }
    }
`
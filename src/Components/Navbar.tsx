import styled from 'styled-components'

import logo from'/images/logo-bookmark.svg'
import fb from '/images/icon-facebook.svg'
import twitter from '/images/icon-twitter.svg'
import hamburger from '/images/icon-hamburger.svg'
import close from '/images/icon-close.svg'

type Props = {}

const Logo = styled.div`
    
`
const Nav = styled.nav`
    position: relative;
    block-size: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 3rem;
`

const NavList = styled.ul`
    list-style: none;
    text-transform: uppercase;
    text-align: center;

    li {
        padding-block: 1.5rem;
        border-block-start: 1px solid hsl(229, 8%, 60%);

        a {
            text-decoration: none;
            color: #fff;
        }

        a.login {
            border: 1px solid #fff;
            display: inline-block;
            inline-size: 100%;
            padding-block: .5rem;
            border-radius: 4px;
            font-weight: 500;
        }
    }
`

const Socials = styled.div`
    position: absolute;
    bottom: 10%;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    @media (min-width: 1024px) {
        display: none;
    }
`

const Menu = styled.div`

    .navigation {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: hsl(229, 31%, 21%);
        opacity: .9;
        z-index: 10;
        padding-block-start: 8rem;
        padding-inline: 10%;
    }

    .navigation.shownav {
        display: block;
        ::after {
            content: "";
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            inline-size: 100%;
            block-size: 100%;
            height: 100%;
            filter: blur(5px);
            filter: opacity(1);
            /* background-color: rgba(0, 0, 0, 0.5); */
            
        }
    }

    @media (min-width: 1024px) {
        .navigation {
            display: block;
        }
    }
`

const MenuBtn = styled.button`
    position: relative;
    z-index: 100;
    text-indent: 100%;
    overflow: hidden;
    background-image: url(${hamburger});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: transparent;
    border: none;
    width: 100px;
    height: 100px;
    right: -30%;

    &.close {
        background-image: url(${close});
        position: fixed;
        z-index: 1000;
        width: 100px;
        height: 100px;
        right: 1.5%;
        right: 0;
        /* left: 2%; */
        top: 2%;
        /* left: 5%; */

    }
`

type E = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function Navbar({}: Props) {

    const handleClick = (e: E) => {
        const target = e.target as HTMLElement;
        document.querySelector('.navigation')?.classList.toggle('shownav')
        target.classList.toggle('close')
    }

  return (
    <div className="container">
        <Nav>

            <Logo>
                <a href="/">

                    <img src={logo} alt="main page logo" />
                </a>
            </Logo>
            <Menu>

                <MenuBtn
                    onClick={handleClick}
                >menu</MenuBtn>


                <div className="navigation">

                    <NavList>
                        <li><a href="#">features</a></li>
                        <li><a href="#">pricing</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a className='login' href="#">login</a></li>
                    </NavList>

                    <Socials>
                        <a href="#">
                            <img src={fb} alt="facebook logo" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="twitter logo" />
                        </a>
                    </Socials>
                </div>

            </Menu>
        </Nav>
    </div>
  )
}
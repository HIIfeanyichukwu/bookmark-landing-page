import styled from 'styled-components'
import hero from '/images/illustration-hero.svg'
import { P, Button } from '../components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-end: 10rem;
    /* position: relative; */
`

const Article = styled.article`
    order: 2;
    margin-block-start: 5rem;
    text-align: center;
    line-height: 1.5;

    h1 {
        font-size: 1.8rem;
        text-transform: capitalize;
        margin-block-end: 1rem;
    }
`

const Figure = styled.div`
    order: 1;
    padding-block-end: 2.2rem;
    display: flex;
    justify-content: center;
    /* overflow: hidden; */
`

const IMG = styled.img`
    inline-size: 100%;
    block-size: auto;
    margin: 0 auto;
    transform: scale(1.15);
    overflow: hidden;
`

const Pattern = styled.div`
    /* block-size: 200px; */
    /* block-size: 46%; */
    background-color: hsl(231, 69%, 60%);
    inline-size: 100%;
    /* height: 50%; */
    border-top-left-radius: 30%;
    border-bottom-left-radius: 30%;
    position: absolute;
    top: 10%;
    bottom: calc((100% - 45%) + 1rem);
    /* bottom: 45%; */
    z-index: -1;
    right: -23%;
    /* transform: scale(1.15); */
    padding: 1rem;
`

const CTA = styled.div`
    //CTA call to action button containers
    display: flex;
    justify-content: space-between;
`

export default function Section1() {
  return (
    <section className="section">
        <div className="container">
            <Content>
                <Article>
                    <h1>A simple bookmark manager</h1>
                    <P>
                        A clean and simple interface to organize your favourite websites. Open a new browser tap and see your sites load instantly. Try it for free.
                    </P>
                    <CTA>
                        <Button className='blue'>get it on chrome</Button>
                        <Button>get it on firefox</Button>
                    </CTA>
                </Article>

                <Figure>
                    <IMG alt="" src={hero} />
                    <Pattern></Pattern>
                </Figure>
            </Content>
        </div>
    </section>
  )
}
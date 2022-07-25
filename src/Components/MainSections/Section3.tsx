import styled from "styled-components"
import { P, Button } from "../components"

import chrome from '/images/logo-chrome.svg'
import firefox from '/images/logo-firefox.svg'
import opera from '/images/logo-opera.svg'
import dots from '/images/bg-dots.svg'


const Top = styled.div`
  text-align : center ;

  h2 {
    margin-block-end: 1.2rem;
    font-weight: 1.7rem;
  }

  p {
    @media (min-width: 1024px) {
      max-inline-size: 50ch;
      margin: 0 auto;
    }
  }
`

const Bottom = styled.div`
  margin-block: 3rem 8rem;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
`

const Card = styled.article`
  padding-inline: 1.5rem;
  padding-block: 2.5rem 2rem;
  border-radius: 8px;
  position: relative;
  text-align: center;
  justify-content: center;
  line-height: 1.5;
  box-shadow: 4px 8px 10px  rgba(0, 0, 0, 0.08),
  -4px 8px 10px rgba(0, 0, 0, 0.1);
  max-block-size: 360px;

  & + & {
    margin-block-start: 4.5rem;

    @media (min-width: 1024px) {
      margin-block-start: 0;
    }
  }


  @media (min-width: 1024px) {
    &.second {
      margin-block-start: 2rem;
    }
    &.third {
      margin-block-start: 4rem;
    }
  }



`

const IMG = styled.img`
  margin: 0 auto;
  inline-size: auto;
  block-size: auto;

  &.card {
    margin-block-end: 1.5rem;
  }

  &.dots {
    inline-size: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }
`

export default function Section3() {
  return (
    <div className="section">
      <div className="container">
        <Top>
          <h2>Download the extension</h2>
          <P>
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
          </P>
        </Top>

        <Bottom>
          <Card>
            <IMG className="card" src={chrome} alt="chrome browser logo"/>
            <h3>Add to Chrome</h3>
            <P className="card">Minimum version 62</P>
            <IMG className="dots" src={dots} alt=""/>

            <Button className="blue lg">Add & install Extension</Button>
          </Card>

          <Card className="second">
            <IMG className="card" src={firefox} alt="firefox browser logo"/>
            <h3>Add to Chrome</h3>
            <P className="card">Minimum version 55</P>
            <IMG className="dots" src={dots} alt=""/>

            <Button className="blue lg">Add & install Extension</Button>
          </Card>

          <Card className="third">
            <IMG className="card" src={opera} alt="opera browser logo"/>
            <h3>Add to Chrome</h3>
            <P className="card">Minimum version 62</P>
            <IMG className="dots" src={dots} alt=""/>

            <Button className="blue lg">Add & install Extension</Button>
          </Card>


        </Bottom>
      </div>
    </div>
  )
}
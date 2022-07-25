import { useState } from "react"
import styled from "styled-components"
import { P, Button } from "../components"

import tabone from '/images/illustration-features-tab-1.svg'
import tabtwo from '/images/illustration-features-tab-2.svg'
import tabthree from '/images/illustration-features-tab-3.svg'



const Container = styled.div`
  text-align: center;
  margin-block-end: 5rem;

  .tab {
    margin-block-start: 2rem;
  }
`
const Article = styled.article`
  line-height: 1.5;
  order: 2;


  h2 {
    margin-block-end: 1rem;
    font-size: 1.7rem;
  }

  p {
    @media (min-width: 1024px) {
      max-inline-size: 60ch;
      margin: 0 auto;
      padding-inline: 4rem;
    }

    @media (min-width: 1280px) {
      padding-inline: 4.5rem;
    }
  }
`

const Tabs = styled.div`
  border-block: .5px solid #afb0b8;
  margin-block-end: 2rem;

  @media (min-width: 1024px) {
    border-block-start: none;
    display: flex;
    max-inline-size: 750px;
    margin: 0 auto;
    margin-block-start: 3.5rem;
  }

  .tab_container + .tab_container {
    border-block-start: .5px solid #afb0b8;

    @media (min-width: 1024px) {
      border: none;
    }
  }




`

const Tab = styled.button`
  border: none;
  background-color: transparent;
  display: inline-block;
  block-size: 100%;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 500;
  padding-block: 1rem;
  color: #575a68;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: block;
    flex-grow: 1;
    flex-basis: 100%;
    padding-inline: 2rem;
    padding-block: 0 1.5rem;
    font-weight: bold;
    inline-size: 250px;
  }
  
  &.current {
    color: hsl(229, 31%, 21%);
    position: relative;
    ::after {
      content: "";
      position: absolute;
      background-color: hsl(0, 94%, 66%);
      bottom: 0;
      left: 0;
      right: 0;
      inline-size: 90%;
      margin: 0 auto;
      block-size: 4px;

      @media (min-width: 1024px) {
        inline-size: 100%;
      }
    }
  }
`

const TabContent = styled.div`
  .tab_content {
    display: flex;
    flex-direction: column;


    @media (min-width: 1024px) {
      flex-direction: row;
      /* gap: 4.5rem; */
      gap: 8rem;
      /* justify-content: space-between; */
      align-items: center;
      text-align: start;

      p {
        padding-inline: 0 ;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin-block-end: 1rem;
    }
  }
`

const Figure = styled.figure`
  order: 1;
  position: relative;
  margin-block: 3.5rem 5rem;

  @media (min-width: 1280px) {
    flex-basis: 75%;
  }
`

const IMG = styled.img`
  inline-size: 100%;
`

const Pattern = styled.div`
  block-size: 100%;
  inline-size: 110%;
  background-color: hsl(231, 69%, 60%);
  /* padding: 2rem; */
  position: absolute;
  z-index: -1;
  top: 20%;
  left: -25%;
  border-bottom-right-radius: 28%;
`

type TabType = 'booking' | 'sharing' | 'searching'

type E = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function Section2() {

  const [tab, setTab] = useState<TabType>('booking')

  const handleClick = (e: E, tab: TabType) => {
    setTab(tab)
    let current = document.querySelector('button.current');
    current?.classList.remove('current');
    let target = e.target as HTMLElement
    target.className += " current";
  }

  let content;
  if (tab == 'booking') {
    content = (
      <>
        <Article>
          <h3>Bookmark in one click</h3>
          <P>
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </P>
         <Button className="blue hidden">more info</Button>
        </Article>

        <Figure>
          <IMG alt="" src={tabone} />
          <Pattern></Pattern>
        </Figure>
      </>
    )
  }else if (tab == 'searching') {
    content = (
      <>
        <Article>
          <h3>intelligent search</h3>
          <P>
            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
          </P>
         <Button className="blue hidden">more info</Button>
        </Article>

        <Figure>
          <IMG alt="" src={tabtwo} />
          <Pattern></Pattern>
        </Figure>
      </>
    )
  }else {
    content = (
      <>
        <Article>
          <h3>share your bookmarks</h3>
          <P>
            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
          </P>
         <Button className="blue hidden">more info</Button>
        </Article>

        <Figure>
          <IMG alt="" src={tabthree} />
          <Pattern></Pattern>
        </Figure>
      </>
    )
  }

  return (
    <div className="section">
      <div className="container">
        <Container>
          <section>
            <Article>
              <h2>Features</h2>
              <P>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
              </P>
            </Article>
          </section>
          <section className="tab">
            <Tabs>
              <div className="tab_container">
                <Tab 
                  onClick={(e) => handleClick(e, 'booking')}
                  className="current">
                  simple bookmarking
                </Tab>
              </div>

              <div className="tab_container">
                <Tab 
                  onClick={(e) => handleClick(e, 'searching')}
                >
                  speedy searching
                </Tab>
              </div>

              <div className="tab_container">
                <Tab 
                  onClick={(e) => handleClick(e, 'sharing')}
                >
                  easy sharing
                </Tab>
              </div>
            </Tabs>
            <TabContent>
              <div className="tab_content">
                {content}
              </div>
            </TabContent>
          </section>
        </Container>
      </div>
    </div>
  )
}
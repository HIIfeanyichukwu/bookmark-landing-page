import styled from "styled-components"
import { P, Button } from "../components"

const Contents = styled.div`
  text-align: center;
  margin-block-end: 5rem;
  line-height: 1.5;
  color: hsl(229, 31%, 21%);

  h2 {
    margin-block-end: 1rem;
  }

  > p {
    @media (min-width: 1024px) {
      max-inline-size: 45ch;
      margin: 0 auto;
    }
  }
`

const Questions = styled.section`
  text-align: start;
  margin-block: 2rem 1.5rem;

  @media (min-width: 1024px) {
    max-inline-size: 45ch;
    margin: 0 auto;
    border-block-start: .5px solid hsl(229, 8%, 60%);
    margin-block-start: 2.5rem;
  }
`

const Detail = styled.details`
  border-bottom: .5px solid hsl(229, 8%, 60%);
  cursor: pointer;

  .rotate{
    transform: rotate(180deg);
  }

  .stroke {
    stroke: hsl(0, 94%, 66%);
  }
`

const Summary = styled.summary`
  padding-block: 1.2rem;
  list-style: none;
  list-style-image: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type e = React.SyntheticEvent<HTMLDetailsElement, Event>

export default function Section4() {

  const handleToggle = (e: e) => {
    const target = e.target as HTMLElement;
    const svg = target.querySelector('svg');
    svg?.classList.toggle('rotate')
    svg?.querySelector('path')?.classList.toggle('stroke');
  }

  return (
    <div className="section">
      <div className="container">
        <Contents>

          <h2>Frequently Asked Questions</h2>
          <P>
            Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
          </P>
          
          <Questions>
            <Detail
              onToggle={handleToggle}
            >
              <Summary>
                What is Bookmark?

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
              </Summary>
              <P className="question">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
              </P>
            </Detail>


            <Detail
              onToggle={handleToggle}
            >
              <Summary>
                How can I request a new browser?

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
              </Summary>
              <P className="question">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
              </P>
            </Detail>


            <Detail
              onToggle={handleToggle}
            >
              <Summary>
                Is there a mobile app?

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
              </Summary>
              <P className="question">
                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
              </P>
            </Detail>


            <Detail
              onToggle={handleToggle}
            >
              <Summary>
                What about other Chromium browsers?

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
              </Summary>
              <P className="question">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit
              </P>
            </Detail>
          </Questions>

          <Button className="blue lg sect4">
            More Info
          </Button>
        </Contents>
      </div>
    </div>
  )
}
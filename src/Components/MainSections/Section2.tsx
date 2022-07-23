import styled from "styled-components"
import { P, Button } from "../components"
const Container = styled.div`
  
`
const Article = styled.article`
  
`

const Tabs = styled.div`
  
`

const TabContent = styled.div`
  
`

export default function Section2() {
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

            </Tabs>
            <TabContent>

            </TabContent>
          </section>
        </Container>
      </div>
    </div>
  )
}
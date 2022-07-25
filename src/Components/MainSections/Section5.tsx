import styled from 'styled-components'
import { Button } from '../components'


const Container = styled.div`
  background-color: hsl(231, 69%, 60%);
  padding-block: 5rem;
  text-align: center;

  @media (min-width: 1024px) {
    .container {
      max-inline-size: 50ch;
      margin: 0 auto;
    }
  }

  h2, h3 {
    color: #ffffff;
  }

  h2 {
    font-size: .9rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
    margin-block-end: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-block-end: 2rem;

    @media (min-width: 1024px) {
      max-inline-size: 20ch;
      font-size: 1.8rem;
      margin-block-end: 2.5rem;
      margin-inline: auto;
    }
  }
`

const Form = styled.form`
  label {
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const InputBox = styled.div`
  margin-block-end: 1rem;
  position: relative;
  transition: all .2s;

  @media (min-width: 1024px) {
    margin: 0;
    flex-basis: 70%;
    flex: 3;
  }

  svg {
    display: none;
  }
  .invalid_text {
    display: none;
  }

  &.invalid {
    background-color: hsl(0, 94%, 66%);
    padding-block: .2rem .3rem;
    padding-inline: .2rem;
    border-radius: 4px;

    svg {
      position: absolute;
      display: block;
      top: 20%;
      right: 5%;
    }
    
    .invalid_text {
      color: #ffffff;
      font-style: italic;
      text-align: start;
      padding-inline-start: .5rem;
      padding-block: .5rem;
      font-size: .8rem;
      display: block;
    }

    .show {
      display: block;
    }
  }

  input {
    inline-size: 100%;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
  }
`

export default function Section5() {
  return (
    <div className="section">
      <Container>
        <div className="container">
          <h2>35,000 + already joined</h2>
          <h3>Stay up-to-date with what we're doing</h3>

          <Form>
            <label htmlFor="email">Email address</label>
            <InputBox className='inputbox'>
              <input
                onInvalid={(e) => {
                  e.preventDefault()
                  const target = e.target as  HTMLInputElement;
                  target?.setCustomValidity('')
                  document.querySelector('.inputbox')?.classList.add('invalid');
                }}

                onChange={(e) => {
                  document.querySelector('.inputbox')?.classList.remove('invalid')
                }}
              placeholder='Enter your email address' type="email" id='email' />


              <p className="invalid_text">
                whoops, make sure it's an email
              </p>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
            </InputBox>
            <Button type='submit' className='red'>
              contact us
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}
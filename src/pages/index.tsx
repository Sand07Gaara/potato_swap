import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'

import CalculatorForm from 'app/components/calculator-form'
import Footer from 'app/components/footer'
import Header from 'app/components/header'
import PageBackground from 'app/components/page-background'
import PageDescriptionText from 'app/components/page-description-text'
import PageLargeTitle from 'app/components/page-large-title'
import mainContainer from 'app/styles/main-container'
import { BREAKPOINTS } from 'helpers/constants'

const MainPageWrapper = styled.section`
  ${mainContainer};
  min-height: calc(100vh - 100px);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1.2;
  padding: 50px 0 150px;
  position: relative;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    min-height: 0;
    padding: 40px 0;
    gap: 40px;
    flex-direction: column;
  }
`

const PageDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 43%;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    max-width: 100%;
  }
`
const PotatoRight = styled.div`
  z-index: 10;
  position: absolute;
  right: 0px;
  bottom: -20px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`

const PotatoLeft = styled.div`
  z-index: 10;
  position: absolute;
  left: 0px;
  bottom: -20px;
  transform: scaleX(-1);
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`

const IndexPage: NextPage = () => (
  <>
    <Header />
    <PageBackground>
      <PotatoRight>
        <Image src='/images/footer.png' alt='banana tree' width={350} height={350} />
      </PotatoRight>
      <PotatoLeft>
        <Image src='/images/footer.png' alt='banana tree' width={350} height={350} />
      </PotatoLeft>
      <MainPageWrapper>
        <PageDescriptionWrapper>
          <PageLargeTitle title='Exchange Cryptocurrency Instantly' label='Best Rates' />
          <PageDescriptionText
            text='Instant and unlimited exchange between 500+ assets in the world of cryptocurrencies.
Enjoy fast swaps on a non&#8209;custodial exchange platform.'
          />
        </PageDescriptionWrapper>
        <CalculatorForm />
      </MainPageWrapper>
    </PageBackground>
    <Footer />
  </>
)

export default IndexPage

import styled from 'styled-components'
import { Box, Flex, Link } from '@pancakeswap/uikit'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'

const StyledPage = styled.div<{ $removePadding: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
  padding-bottom: 0;
  min-height: calc(100vh - 121px);
  margin-top: 48px;
  // background: ${({ theme }) => theme.colors.backgroundAlt};

  // ${({ theme }) => theme.mediaQueries.xs} {
  //   background-size: auto;
  // }

  // ${({ theme }) => theme.mediaQueries.sm} {
  //   padding: ${({ $removePadding }) => ($removePadding ? '0' : '24px')};
  //   padding-bottom: 0;
  // }

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   padding: ${({ $removePadding }) => ($removePadding ? '0' : '32px')};
  //   padding-bottom: 0;
  // }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 90%;
  }
`

const Page: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { removePadding?: boolean; hideFooterOnDesktop?: boolean }
> = ({ children, removePadding = false, hideFooterOnDesktop = false, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage $removePadding={removePadding} {...props}>
        <Box display={['block', null, null, hideFooterOnDesktop ? 'none' : 'block']} width="100%" style={{display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img src="/images/Coin Design.png" alt="" width="400" />
        </Box>
        {children}
        {/* <Flex flexGrow={1} /> */}
        <Box display={['block', null, null, hideFooterOnDesktop ? 'none' : 'block']} width="100%" style={{display: "flex", justifyContent: "center" }}>
          {/* <Footer /> */}
          {/* <Link
            small
            external
            ellipsis
            href="https://bet.hodlx.exchange/rangefinder/hodlx"
            style={{ justifyContent: "center", width: "auto" }}
          > */}
            <StyledImg src="/images/flow_images.gif" style={{ marginBottom: "50px", marginTop: "50px" }} alt='' />
          {/* </Link> */}
        </Box>
      </StyledPage>
      <Footer />
    </>
  )
}

export default Page

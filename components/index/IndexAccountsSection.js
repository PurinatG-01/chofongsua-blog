import React from "react"
import main from "components/index/index.global"
import { Card, Button } from "components/global"
import styled from "styled-components"
import accountList from "config/account"
import { motion } from "framer-motion"

const AccountsSection = styled(main.section)`
  .title {
    text-align: center;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 16px;
    border-right: 4px solid var(--page-text-color);
    animation: clipText 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }
  .quote {
    text-align: center;
    display: block;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 48px;
    overflow: hidden;
    width: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    @media (min-width: 1320px) {
      margin-bottom: 48px;
    }
  }
`

const AccountsList = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding: 16px;
  max-width: var(--page-container-max-width);
  margin: 0 auto;
`

const AccountCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  width: 100%;
  position: relative;
  &:hover {
    transform: translateY(-8px);
  }
  .active-badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: -12px;
    left: -30px;
    border: 4px solid var(--page-bg);
  }
  ::before {
    content: "${({ type }) => type}";
    color: var(--reverse-text-color);
    text-transform: uppercase;
    font-weight: 800;
    display: block;
    position: absolute;
    bottom: 20px;
    left: -24px;
    padding: 4px;
    transform-origin: 0 0;
    transform: rotate(270deg);
  }
  border: none;
  border-left: 16px solid ${({ typecolor }) => typecolor};
`

const CardTitle = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 800;
  display: flex;
  svg {
    margin-right: 16px;
  }
`

const CardDescription = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 200;
`

const CardLogo = styled.div``

const CardButton = styled(Button)``

const goTo = (url) => {
  if (!window) return
  window.open(url)
}

export default function IndexAccountsSection() {
  return (
    <AccountsSection id="account-section">
      <main.sectionTitle className="__title title">ACCOUNTS</main.sectionTitle>
      <span className="quote">PAST | PRESENT | FUTURE</span>
      <AccountsList>
        {accountList.map((account, key) => (
          <AccountCard
            key={key}
            typecolor={account?.typeColor}
            type={account?.type}
          >
            {account?.active && (
              <motion.div
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="active-badge _bg-green _base-shadow"
              ></motion.div>
            )}
            <CardTitle>
              <CardLogo>{account.icon()}</CardLogo>
              {account.title}
            </CardTitle>
            <CardDescription>{account.description}</CardDescription>
            <CardButton
              onClick={() => {
                goTo(account.url)
              }}
            >
              {"->"} &nbsp;PROFILE
            </CardButton>
          </AccountCard>
        ))}
      </AccountsList>
    </AccountsSection>
  )
}

import styled, { css, keyframes } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 720px) {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

interface SummaryCardProps {
  variant?: 'green' | 'small-green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-500']};
  border-radius: 6px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-100']};
    width: 100%;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-500']};
    `}
`

const pulseAnimation = keyframes`
   0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`

export const Skeleton = styled.span`
  display: block;
  height: 2.5rem;
  width: 60%;
  background: ${(props) => props.theme['gray-400']};
  border-radius: ${(props) => props.theme['br-card']};
  animation: ${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

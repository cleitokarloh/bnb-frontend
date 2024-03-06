import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 3.25rem;
  margin-bottom: 3.25rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
`

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme['br-card']};

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme['gray-100']};
  }
`

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  padding: 1rem 1.5rem;

  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`

export const FilterWrapper = styled.div`
  width: 250px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
interface FilterItemProps {
  status: 'inactive' | 'active'
}
export const FilterItem = styled.div<FilterItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;

  ${(props) =>
    props.status === 'active' &&
    css`
      font-weight: 500;
      color: ${({ theme }) => theme['green-500']};
      text-decoration: underline;
    `}

  cursor: pointer;
`

export const Items = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  padding-bottom: 2rem;

  > div + div {
    border-top: 1px solid ${({ theme }) => theme['gray-100']};
  }
`

export const EmptyList = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-500']};

  padding: 1rem;

  border-radius: ${({ theme }) => theme['br-card']};
  border: 1px solid ${({ theme }) => theme['gray-100']};

  a {
    color: ${({ theme }) => theme['green-500']};
    text-decoration: none;
  }
`

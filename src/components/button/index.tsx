import { Container, Spinner } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'submit'
  title: string
  isLoading?: boolean
}
export function Button({ title, isLoading, ...rest }: ButtonProps) {
  return <Container {...rest}>{isLoading ? <Spinner /> : title}</Container>
}

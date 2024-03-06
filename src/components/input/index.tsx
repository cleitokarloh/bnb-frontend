import { Container, InputComponent, LabelComponent, Error } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export function Input({ error, ...rest }: InputProps) {
  const hasError = !!(error && error.toString() !== '')

  return (
    <Container>
      <InputComponent
        {...rest}
        id={rest.name}
        attention={String(hasError) as 'true' | 'false'}
      />
      <LabelComponent>{rest.placeholder}</LabelComponent>
      {error && <Error>{error}</Error>}
    </Container>
  )
}

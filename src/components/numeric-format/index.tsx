import { NumericFormatProps } from 'react-number-format'
import { Container, InputComponent, LabelComponent, Error } from './styles'

interface InputProps extends NumericFormatProps {
  error?: string
}

export function NumericFormat({ error, ...rest }: InputProps) {
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

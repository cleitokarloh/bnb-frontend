import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Container, FormContainer, Form, FormTitle, Footer } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import { api } from '@/lib/axios'
import { useCallback, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/use-auth'
import { Helmet } from 'react-helmet-async'

const singInFormSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .max(40, {
      message: 'Username must be at most 40 characters long',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    }),
})
type SignInFormInputs = z.infer<typeof singInFormSchema>

export function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { handleRefetch } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(singInFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = useCallback(
    (data: SignInFormInputs) => {
      setIsLoading(true)
      api
        .get('sanctum/csrf-cookie')
        .then(() => {
          const dataToRequest = {
            ...data,
            device: 'web',
          }

          api
            .post('/users/token', dataToRequest)
            .then((response) => {
              localStorage.setItem(
                '@bnb-bank:token',
                JSON.stringify(response.data.token as string),
              )
              handleRefetch()
              toast.success('You are log in!')
              navigate('/')
              reset()
              setIsLoading(false)
            })
            .catch((error) => {
              if (error instanceof AxiosError) {
                toast.error(error.response?.data.message || 'An error occurred')
              }
              console.log('error', error)
            })
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data.message || 'An error occurred')
          }
          console.log('error', error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [navigate, handleRefetch, reset],
  )

  return (
    <Container>
      <Helmet title="Sign In" />
      <FormContainer>
        <FormTitle>Sign in</FormTitle>
        <p>Let&#39;s get started. Please fill out the form.</p>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder="Username"
                error={errors.username?.message}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder="Password"
                type="password"
                error={errors.password?.message}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Button isLoading={isLoading} type="submit" title="Sign In" />
        </Form>

        <Footer>
          <hr />
          <p>
            Do you already not have an account?{' '}
            <Link to="/">Create an account</Link>
          </p>
        </Footer>
      </FormContainer>
    </Container>
  )
}

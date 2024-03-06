import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Container, FormContainer, Form, FormTitle, Footer } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { createUser } from '@/query/auth/createUser'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Helmet } from 'react-helmet-async'

const newAccountFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .max(100, {
      message: 'Name must be at most 100 characters long',
    }),
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

type NewAccountFormInputs = z.infer<typeof newAccountFormSchema>

export function Register() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewAccountFormInputs>({
    resolver: zodResolver(newAccountFormSchema),
    defaultValues: {
      name: '',
      username: '',
      password: '',
    },
  })

  const { mutateAsync: createUserRequest, isPending } = useMutation({
    mutationFn: createUser,
  })

  const onSubmit = useCallback(
    async (data: NewAccountFormInputs) => {
      try {
        await createUserRequest(data)
        toast.success('Account created successfully! You can now sign in.')
        reset()
        return navigate('/sign-in')
      } catch (error) {
        console.error(error)
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message || 'An error occurred')
        }
      }
    },
    [createUserRequest, navigate, reset],
  )

  useEffect(() => {
    const token = localStorage.getItem('@bnb-bank:token')

    if (token) {
      navigate('/')
    }
  }, [navigate])

  return (
    <Container>
      <Helmet title="Create an account" />
      <FormContainer>
        <FormTitle>Create an account</FormTitle>
        <p>To begin an outstanding experience, please fill out the form.</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder="Name"
                error={errors.name?.message}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

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

          <Button isLoading={isPending} type="submit" title="Create account" />
        </Form>
        <Footer>
          <hr />
          <p>
            Do you already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </Footer>
      </FormContainer>
    </Container>
  )
}

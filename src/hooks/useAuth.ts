import { useState, useEffect } from 'react'

import { useLoading } from './useLoading'
import { api } from '@/lib/api'
import { setAuthToken, getCurrentUser } from '@/lib/auth'
import { AuthState, AuthResponse } from '@/@types/lib'
import { useToast } from './useToast'

//TODO - make this hook return the user

export function useAuth(): AuthState {
  const showToast = useToast()
  const { loading, withLoading } = useLoading()
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    handleLogin,
  })

  async function handleLogin(email: string, password: string): Promise<void> {
    try {
      const { data } = await withLoading(
        api.post<AuthResponse>('/auth', { email, password }),
      )
      const { accessToken, userData } = data
      localStorage?.setItem('accessToken', accessToken)
      setAuthToken(accessToken)
      setAuthState({ user: userData, loading: false, handleLogin })
    } catch (error) {
      showToast('Invalid credentials', {
        type: 'error',
      })
      throw new Error('Invalid credentials')
    }
  }

  useEffect(() => {
    const user = getCurrentUser()
    setAuthToken(localStorage?.getItem('accessToken') ?? '')
    setAuthState((prevState) => ({
      ...prevState,
      user,
      loading: false,
      handleLogin,
    }))
  }, [])

  return { ...authState, handleLogin }
}

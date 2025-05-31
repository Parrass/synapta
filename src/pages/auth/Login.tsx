
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] rounded-2xl blur opacity-30"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Synapta</h1>
          <p className="text-muted-foreground">Plataforma de Atendimento para Clínicas</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Entrar na sua conta</CardTitle>
            <CardDescription>
              Entre com suas credenciais para acessar o dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="rounded border-input" />
                <span>Lembrar-me</span>
              </label>
              <Link to="#" className="text-sm text-primary hover:underline">
                Esqueceu a senha?
              </Link>
            </div>
            <Button className="w-full bg-gradient-to-r from-[#0A7B83] to-[#5A4B87] hover:from-[#0A7B83]/90 hover:to-[#5A4B87]/90">
              Entrar
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link to="#" className="text-primary hover:underline">
              Solicite acesso
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

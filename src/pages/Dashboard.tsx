
import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao Synapta Flow Hub!
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
            <CardDescription>Total de consultas agendadas para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">+2 em comparação com ontem</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pacientes Ativos</CardTitle>
            <CardDescription>Pacientes com consultas nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">248</div>
            <p className="text-xs text-muted-foreground">+15% em comparação com o mês anterior</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversas no WhatsApp</CardTitle>
            <CardDescription>Conversas ativas no momento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">5</div>
            <p className="text-xs text-muted-foreground">3 aguardando resposta</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Próximas Consultas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                <div>
                  <p className="font-medium">Maria Silva</p>
                  <p className="text-sm text-muted-foreground">Cardiologia</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">10:30</p>
                  <p className="text-xs text-primary">Confirmada</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                <div>
                  <p className="font-medium">João Santos</p>
                  <p className="text-sm text-muted-foreground">Ortopedia</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">11:15</p>
                  <p className="text-xs text-amber-500">Pendente</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                <div>
                  <p className="font-medium">Ana Oliveira</p>
                  <p className="text-sm text-muted-foreground">Clínico Geral</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">14:00</p>
                  <p className="text-xs text-primary">Confirmada</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Nova mensagem de WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Ricardo Almeida perguntou sobre reagendamento</p>
                  <p className="text-xs text-muted-foreground">Há 5 minutos</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Consulta confirmada</p>
                  <p className="text-sm text-muted-foreground">Maria Silva confirmou a consulta de hoje</p>
                  <p className="text-xs text-muted-foreground">Há 12 minutos</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Lembrete enviado</p>
                  <p className="text-sm text-muted-foreground">Lembretes enviados para 5 pacientes</p>
                  <p className="text-xs text-muted-foreground">Há 30 minutos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

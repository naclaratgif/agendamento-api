import { IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class AtualizarAgendamentoDto {
  @ApiPropertyOptional({
    description: 'Nome completo do paciente',
    example: 'João da Silva',
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({
    description: 'Endereço de email válido do paciente',
    example: 'joao.silva@example.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: 'Telefone de contato do paciente',
    example: '+55 11 98765-4321',
  })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiPropertyOptional({
    description: 'Especialidade médica solicitada',
    example: 'Cardiologia',
  })
  @IsOptional()
  @IsString()
  especialidade?: string;

  @ApiPropertyOptional({
    description: 'Data do agendamento no formato YYYY-MM-DD',
    example: '2024-11-28',
  })
  @IsOptional()
  @IsString()
  data?: string;

  @ApiPropertyOptional({
    description: 'Horário do agendamento no formato HH:mm',
    example: '14:30',
  })
  @IsOptional()
  @IsString()
  horario?: string;
}
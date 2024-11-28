import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AgendamentoDto {
  @ApiProperty({
    description: 'Nome completo do paciente',
    example: 'João da Silva',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Endereço de email válido do paciente',
    example: 'joao.silva@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Telefone de contato do paciente',
    example: '+55 11 98765-4321',
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: 'Especialidade médica solicitada',
    example: 'Cardiologia',
  })
  @IsNotEmpty()
  @IsString()
  especialidade: string;

  @ApiProperty({
    description: 'Data do agendamento no formato YYYY-MM-DD',
    example: '2024-11-28',
  })
  @IsNotEmpty()
  @IsString()
  data: string;

  @ApiProperty({
    description: 'Horário do agendamento no formato HH:mm',
    example: '14:30',
  })
  @IsNotEmpty()
  @IsString()
  horario: string;
}
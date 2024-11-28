import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AgendamentoDto } from './dto/agendamento.dto';
import { AtualizarAgendamentoDto } from "./dto/atualizarAgendamento.dto";

@ApiTags('Agendamentos')
@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @ApiResponse({
    status: 200,
    description: 'Lista de agendamentos',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          nome: { type: 'string', example: 'João da Silva' },
          email: { type: 'string', example: 'joao.silva@example.com' },
          telefone: { type: 'string', example: '+55 11 98765-4321' },
          especialidade: { type: 'string', example: 'Cardiologia' },
          data: { type: 'string', example: '2024-11-28' },
          horario: { type: 'string', example: '14:30' },
          protocolo: { type: 'string', example: 'ABC123XYZ' },
        },
      },
    },
  })
  @Get()
  async listarTodos() {
    return await this.agendamentosService.listarAgendamentos();
  }

  @Post()
  async criar(@Body() agendamentoDto: AgendamentoDto) {
    const agendamento =
      await this.agendamentosService.criarAgendamento(agendamentoDto);
    return {
      nome: agendamento.nome,
      especialidade: agendamento.especialidade,
      data: agendamento.data,
      horario: agendamento.horario,
      protocolo: agendamento.protocolo,
    };
  }
  @Patch(':id')
  @ApiBody({
    description: 'Dados para atualização do agendamento',
    type: AtualizarAgendamentoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Agendamento atualizado com sucesso',
    schema: {
      type: 'object',
      properties: {
        nome: { type: 'string', example: 'Maria Clara' },
        especialidade: { type: 'string', example: 'Cardiologia' },
        data: { type: 'string', example: '2024-12-01' },
        horario: { type: 'string', example: '15:00' },
        protocolo: { type: 'string', example: 'ABC123XYZ' },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Agendamento não encontrado',
  })
  async editar(
    @Param('id') id: string,
    @Body() agendamentoDto: AtualizarAgendamentoDto,
  ) {
    return await this.agendamentosService.editarAgendamento(id, agendamentoDto);
  }
}
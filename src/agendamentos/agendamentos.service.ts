import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agendamento, AgendamentoDocument } from './schemas/agendamento.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AgendamentosService {
  constructor(
    @InjectModel(Agendamento.name)
    private agendamentoModel: Model<AgendamentoDocument>,
  ) {}

  async criarAgendamento(dados: Partial<Agendamento>): Promise<Agendamento> {
    const protocolo = this.gerarProtocolo();
    const agendamento = new this.agendamentoModel({ ...dados, protocolo });
    return agendamento.save();
  }

  gerarProtocolo(): string {
    return uuidv4();
  }
  async listarAgendamentos(): Promise<Agendamento[]> {
    return this.agendamentoModel.find().exec();
  }
  async editarAgendamento(
    id: string,
    dadosAtualizados: Partial<Agendamento>,
  ): Promise<Agendamento> {
    const agendamento = await this.agendamentoModel.findByIdAndUpdate(
      id,
      dadosAtualizados,
      { new: true, runValidators: true }, // Retorna o documento atualizado
    );

    if (!agendamento) {
      throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
    }

    return agendamento;
  }
}
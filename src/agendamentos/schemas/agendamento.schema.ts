import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AgendamentoDocument = HydratedDocument<Agendamento>;

@Schema()
export class Agendamento {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  especialidade: string;

  @Prop({ required: true })
  data: string;

  @Prop({ required: true })
  horario: string;

  @Prop({ required: true, unique: true })
  protocolo: string;
}

export const AgendamentoSchema = SchemaFactory.createForClass(Agendamento);
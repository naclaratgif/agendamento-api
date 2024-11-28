import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Carregar variáveis de ambiente
    ConfigModule.forRoot(),
    // Configurar o Mongoose com a variável do .env
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AgendamentosModule,
    UsersModule,
  ],
})
export class AppModule {}
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'SenhaSegura123!' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'SenhaSegura123!' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'NovaSenha123!',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
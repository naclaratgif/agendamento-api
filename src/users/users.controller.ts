import { Body, Controller, Get, Param, Patch, Post, UnauthorizedException } from "@nestjs/common";
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, LoginDto, UpdateUserDto } from '../agendamentos/dto/user.dto';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso' })
  @ApiResponse({ status: 400, description: 'Erro ao registrar usuário' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('login')
  @ApiResponse({ status: 200, description: 'Login bem-sucedido' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return {
      message: 'Login realizado com sucesso',
      user: { id: user.id, name: user.name, email: user.email },
    };
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de usuários' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
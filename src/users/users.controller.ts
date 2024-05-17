import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from 'src/model/role';
import { User } from 'src/model/user';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: Role) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: User) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
} 

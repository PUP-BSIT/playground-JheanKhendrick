import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { role } from 'src/model/role';
import { user } from 'src/model/user';
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(@Query('role') role?: role){
        return this.usersService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() user: user){
        return this.usersService.create(user);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: user) {
        return this.usersService.update(+id, userUpdate)
    }
    
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.usersService.delete(+id);
    }
} 

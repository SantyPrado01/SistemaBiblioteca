import { HttpException } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { Socio } from './entities/socio.entity';
import { Repository } from 'typeorm';
export declare class SociosService {
    private readonly socioRepository;
    constructor(socioRepository: Repository<Socio>);
    create(createSocioDto: CreateSocioDto): Promise<HttpException>;
    findAll(): Promise<Socio[]>;
    findOne(id: number): Promise<Socio>;
    update(id: number, updateSocioDto: UpdateSocioDto): Promise<Socio>;
    remove(id: number): Promise<void>;
}
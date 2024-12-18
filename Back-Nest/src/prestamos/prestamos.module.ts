import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { Prestamo } from './entities/prestamo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from 'src/libros/libros.module';
import { SociosModule } from 'src/socios/socios.module';
import { Libro } from 'src/libros/entities/libro.entity';
import { SociosService } from 'src/socios/socios.service';
import { PagoModule } from 'src/pagos/pagos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo, Libro]), LibrosModule, SociosModule, PagoModule],
  controllers: [PrestamosController],
  providers: [PrestamosService, SociosService],
})
export class PrestamosModule {}

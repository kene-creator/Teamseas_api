import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsResolver } from './donations.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, DonationsResolver, DonationsService],
})
export class DonationsModule {}

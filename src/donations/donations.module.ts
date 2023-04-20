import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsResolver } from './donations.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, DonationsResolver, DonationsService],
})
export class DonationsModule {}

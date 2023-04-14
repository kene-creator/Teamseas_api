import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonationInput } from './dto/create-donation.input';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(donationwhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationwhereUniqueInput,
    });
  }
}

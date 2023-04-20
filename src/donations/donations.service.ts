import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderByParams } from '../graphql';
import { PrismaService } from '../prisma/prisma.service';

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
      take: 10,
    });
  }

  findOne(donationwhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationwhereUniqueInput,
    });
  }

  async getTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: { count: true },
    });
    return response._sum.count;
  }
}

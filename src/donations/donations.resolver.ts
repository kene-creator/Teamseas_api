import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HttpCode } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Prisma } from '@prisma/client';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  @HttpCode(201)
  create(
    @Args('createDonationInput')
    createDonationInput: Prisma.DonationCreateInput,
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll() {
    return this.donationsService.findAll();
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({ id });
  }
}

import { Module } from '@nestjs/common';
import { ProductAttributeValueService } from './product-attribute-value.service';
import { ProductAttributeValueController } from './product-attribute-value.controller';

@Module({
  controllers: [ProductAttributeValueController],
  providers: [ProductAttributeValueService],
})
export class ProductAttributeValueModule {}

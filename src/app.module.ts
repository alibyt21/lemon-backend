import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShippingModule } from './shipping/shipping.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderModule } from './order/order.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CartModule } from './cart/cart.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { BrandModule } from './brand/brand.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AttributeModule } from './attribute/attribute.module';
import { AttributeOptionModule } from './attribute-option/attribute-option.module';
import { ProductAttributeValueModule } from './product-attribute-value/product-attribute-value.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PrismaModule, UserModule, ProductModule, OrderModule, OrderItemModule, CategoryModule, TagModule, AttributeModule, AttributeOptionModule, ProductAttributeValueModule, BrandModule, ProductCategoryModule, CartModule, CartItemModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [PrismaModule, UserModule, ProductModule, OrderModule, OrderItemModule, CategoryModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

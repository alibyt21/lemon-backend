import { Module } from '@nestjs/common';
import { AttributeOptionService } from './attribute-option.service';
import { AttributeOptionController } from './attribute-option.controller';

@Module({
  controllers: [AttributeOptionController],
  providers: [AttributeOptionService],
})
export class AttributeOptionModule {}

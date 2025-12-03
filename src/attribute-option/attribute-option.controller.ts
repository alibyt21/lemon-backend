import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributeOptionService } from './attribute-option.service';
import { CreateAttributeOptionDto } from './dto/create-attribute-option.dto';
import { UpdateAttributeOptionDto } from './dto/update-attribute-option.dto';

@Controller('attribute-options')
export class AttributeOptionController {
  constructor(private readonly attributeOptionService: AttributeOptionService) {}

  @Post()
  create(@Body() createAttributeOptionDto: CreateAttributeOptionDto) {
    return this.attributeOptionService.create(createAttributeOptionDto);
  }

  @Get()
  findAll() {
    return this.attributeOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributeOptionDto: UpdateAttributeOptionDto) {
    return this.attributeOptionService.update(+id, updateAttributeOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributeOptionService.remove(+id);
  }
}

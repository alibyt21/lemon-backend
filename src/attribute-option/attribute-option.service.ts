import { Injectable } from '@nestjs/common';
import { CreateAttributeOptionDto } from './dto/create-attribute-option.dto';
import { UpdateAttributeOptionDto } from './dto/update-attribute-option.dto';

@Injectable()
export class AttributeOptionService {
  create(createAttributeOptionDto: CreateAttributeOptionDto) {
    return 'This action adds a new attributeOption';
  }

  findAll() {
    return `This action returns all attributeOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeOption`;
  }

  update(id: number, updateAttributeOptionDto: UpdateAttributeOptionDto) {
    return `This action updates a #${id} attributeOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeOption`;
  }
}

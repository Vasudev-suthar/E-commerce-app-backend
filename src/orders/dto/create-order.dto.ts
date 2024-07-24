import { Type } from "class-transformer";
import { CreateShippingDto } from "./create-shipping.dto";
import { ValidateNested } from "class-validator";
import { OrderedProductsDto } from "./ordered-product.dt";

export class CreateOrderDto {
    @Type(() => CreateShippingDto)
    @ValidateNested()
    shippingAddress: CreateShippingDto;

    @Type(() => OrderedProductsDto)
    @ValidateNested()
    orderedProducts:OrderedProductsDto[];
}

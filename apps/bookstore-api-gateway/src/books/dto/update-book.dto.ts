import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty({ description: 'The ID of the book' })
  id: number;
  
  @ApiProperty({ description: 'The title of the book' })
  title: string;

  @ApiProperty({ description: 'A brief description of the book' })
  description: string;

  @ApiProperty({ description: 'The author of the book' })
  author: string;

  @ApiProperty({
    description: 'The rating of the book',
    minimum: 0,
    maximum: 5,
  })
  rating: number;
}

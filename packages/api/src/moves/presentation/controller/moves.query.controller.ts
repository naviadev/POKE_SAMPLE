import { Controller } from '@nestjs/common';
import { MovesRepository } from 'src/moves/infrastructure/repository/moves.repository';

@Controller('/moves/query')
export class MovesQueryController {
  constructor(private readonly movesRepository: MovesRepository) {}
}

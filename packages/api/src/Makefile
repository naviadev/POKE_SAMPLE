NAME = $(arg)

create:
	@mkdir -p $(NAME)/application
	@mkdir -p $(NAME)/application/command
	@mkdir -p $(NAME)/application/query
	@mkdir -p $(NAME)/application/query/handler
	@mkdir -p $(NAME)/application/service

	@mkdir -p $(NAME)/domain
	@mkdir -p $(NAME)/domain/entity
	@touch $(NAME)/domain/entity/$(NAME).ts

	@mkdir -p $(NAME)/domain/factory
	@touch $(NAME)/domain/factory/$(NAME).factory.ts

	@mkdir -p $(NAME)/domain/value-object

	@mkdir -p $(NAME)/enum

	@mkdir -p $(NAME)/infrastructure
	@mkdir -p $(NAME)/infrastructure/entity
	@mkdir -p $(NAME)/infrastructure/repository

	@touch $(NAME)/$(NAME).module.ts
	@mkdir -p $(NAME)/presentation
	@mkdir -p $(NAME)/presentation/DTO
	@touch $(NAME)/presentation/DTO/$(NAME).dto.ts
	
	@mkdir -p $(NAME)/presentation/controller
	@touch $(NAME)/presentation/controller/$(NAME).query.controller.ts
	@touch $(NAME)/presentation/controller/$(NAME).command.controller.ts


	@echo "$(NAME) 디렉토리가 생성되었습니다."


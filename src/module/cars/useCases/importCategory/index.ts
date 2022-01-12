import { ImportCategoryUseCase } from "./ImportCategoryUseCase"
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const importCategoryReposity = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(importCategoryReposity);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }
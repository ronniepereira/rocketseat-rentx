import { Router } from "express";
import { createCategoryController } from "../module/cars/useCases/createCategory";
import { importCategoryController } from "../module/cars/useCases/importCategory/";
import { listCategoriesController } from "../module/cars/useCases/listCategories";
import multer from "multer";
const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp/",
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single('file'), (request, response) => {
    return importCategoryController.handle(request, response)
})

export { categoriesRoutes };

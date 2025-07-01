import { replaceMongoIdInArray } from "@/lib/convertData";
import { Category } from "@/model/category-model";

export async function getCategories() {
  const categories = await Category.find({}).lean();
  return replaceMongoIdInArray(categories);
}

import * as recipes from './recipe_service';
import * as ingredients from './ingredient_service';
import * as preparations from './preparation_service';

export const services = {
  recipes,
  ingredients,
  preparations,
  storage: {
    imagePath: process.env.EXPO_PUBLIC_STORAGE_BASE_URL,
  },
};

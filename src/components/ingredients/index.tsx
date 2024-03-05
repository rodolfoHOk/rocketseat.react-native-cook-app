import { ScrollView } from 'react-native';

import { styles } from './styles';
import { Ingredient, IngredientProps } from '@/components/ingredient';

type Props = {
  ingredients: IngredientProps[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={ingredient.image}
        />
      ))}
    </ScrollView>
  );
}

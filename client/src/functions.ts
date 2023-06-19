export const handleButtonClick = (index: number) => {
  const ingredient: Ingredient = ingredientList[index];

  setPerfumeName(ingredient.perfumeName);
  setPerfumeUrl(
    <Image
      src={ ingredient.url }
      style = {{ width: '360px', height: 'auto' }}
      alt = "Perfume"/>
  );
  setPerfumeInfo(ingredient.description);
  setNoteUrl(
    <Image
      src={ ingredient.noteUrl }
      style = {{ width: '150px', height: 'auto' }}
      alt = "Note"
    />
  );
  setHeartNoteUrl(
    <Image
      src={ ingredient.heartNoteUrl }
      style = {{ width: '150px', height: 'auto' }}
      alt = "Heart Note"
    />
  );
  setBaseNoteUrl(
    <Image
      src={ ingredient.baseNoteUrl }
      style = {{ width: '150px', height: 'auto' }}
      alt = "Base Note"
    />
  );
  setButtonVisible(false);
  setIsHeaderVisible(false);
  setIsHomeVisible(true);
};
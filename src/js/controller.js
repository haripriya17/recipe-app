import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = widow.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    //loading recipe
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    // Rendering the recipe
    recipeView.render(model.state.recipe);

    const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
// showRecipe();

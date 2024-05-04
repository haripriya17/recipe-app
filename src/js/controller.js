import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const controlRecipes = async function () {
  try {
    const id = widow.location.hash.slice(1);

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

const controlSearchResults = async function () {
  try {
    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
// showRecipe();

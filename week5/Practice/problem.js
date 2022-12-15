/*
There are n buildings in a line. 
You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. 

A building has an ocean view if the building can see the ocean without obstructions. 

Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

*/

const findView = () => {
  const buildings = [1, 2, 4, 2, 3];
  view = [];
  prevBuildingHeight = 0;
  buildings.reverse();
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i] > prevBuildingHeight) {
      view.push(i);
      prevBuildingHeight = buildings[i];
      console.log(prevBuildingHeight);
    }
  }
};

findView();

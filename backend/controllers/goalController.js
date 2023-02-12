//@desc   Get Goals
//@route  Get /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

//@desc   Set Goal
//@route  Post /api/goals
//@access Private
const setGoal = (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: "Set Goal" });
};

//@desc   Update Goal
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc   Delete Goal
//@route  Delete /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};

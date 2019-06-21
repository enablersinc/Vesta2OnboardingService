const db = require('../../config/db.js');
const WorkSpace = db.WorkSpace;
const User = db.User;

module.exports = {
  getAll,
  getById,
  create,
  update
};

async function create(workspaceParam) {
  const user = await User.findOne({ email: workspaceParam.owner }).exec();
  console.log(await user);
  const workspace = new WorkSpace({
    owner: user._id,
    name: workspaceParam.name
  });

  // save feedback
  await workspace.save();
  return workspace;
}

async function getAll() {
  return await WorkSpace.find();
  // .sort('-createdAt');
}

async function getById(id) {
  return await WorkSpace.findById(id);
}

async function update(id, workspaceParam) {
  const workspace = await WorkSpace.findById(id);

  // copy priceParam properties to price
  Object.assign(workspace, workspaceParam);

  await workspace.save();
  return workspace;
}

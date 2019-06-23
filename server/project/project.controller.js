const db = require('../../config/db.js');
const Project = db.Project;
const WorkSpace = db.WorkSpace;
const User = db.User;

module.exports = {
  getAll,
  getById,
  create,
  update
};

async function create(projectParam) {
  if (projectParam.workspace.match(/^[0-9a-fA-F]{24}$/)) {
    const workspace = await WorkSpace.findById(projectParam.workspace).exec();
    const user = await User.findOne({ email: projectParam.owner }).exec();
    console.log('Values :', workspace, user);

    const project = new Project({
      owner: user._id,
      workspace: workspace._id,
      name: projectParam.name,
      priority: projectParam.priority,
      description: projectParam.description,
      region: projectParam.region,
      fromDate: new Date(projectParam.fromDate),
      toDate: new Date(projectParam.toDate)
    });
    // save Project
    await project.save();
    return project;
  } else return;
}

async function getAll() {
  return await Project.find();
  // .sort('-createdAt');
}

async function getById(id) {
  return await Project.findById(id);
}

async function update(id, projectParam) {
  const project = await Project.findById(id);

  // copy
  Object.assign(project, projectParam);

  await project.save();
  return project;
}

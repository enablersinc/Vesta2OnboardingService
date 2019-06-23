const db = require('../../config/db.js');
const Organization = db.Organization;
const WorkSpace = db.WorkSpace;

module.exports = {
  getAll,
  getById,
  create,
  update
};

async function create(organizationParam) {
  if (organizationParam.workspace.match(/^[0-9a-fA-F]{24}$/)) {
    const workspace = await WorkSpace.findById(organizationParam.workspace).exec();
    console.log(await workspace);
    const organization = new Organization({
      workspace: workspace._id,
      name: organizationParam.name,
      type: organizationParam.type
    });

    // save organization
    await organization.save();
    return organization;
  } else return null;
}

async function getAll() {
  return await Organization.find();
  // .sort('-createdAt');
}

async function getById(id) {
  return await Organization.findById(id);
}

async function update(id, organizationParam) {
  const organization = await Organization.findById(id);

  // copy
  Object.assign(organization, organizationParam);

  await organization.save();
  return organization;
}

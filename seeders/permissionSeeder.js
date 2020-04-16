const usersPermisions = require('../Objects/Users').resolversMap;
const rolesPermissions = require('../Objects/Roles').resolversMap;
const permissionsPermissions = require('../Objects/Permissions').resolversMap;
const schoolsPermissions = require('../Objects/Schools').resolversMap;


const Permission = require('../Objects/Permissions/Permission');

const permissionArray = {
  ...usersPermisions,
  ...rolesPermissions,
  ...permissionsPermissions,
  ...schoolsPermissions,
};


const seedPermission = async () => {
  const existingPermissions = await Permission.find();

  if (Object.keys(existingPermissions).length == 0
      || Object.keys(permissionArray).length != Object.keys(existingPermissions).length) {

      Permission.deleteMany({}, () => {
      console.log('Updating permissions');
      Object.keys(permissionArray).map(key => {
        const newPerm = new Permission({key: key, name: permissionArray[key]});
        newPerm.save();
      });
    });


  }
};




module.exports = {
  seedPermission,
};

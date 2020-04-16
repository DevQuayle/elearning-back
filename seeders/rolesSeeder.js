const Role = require('../Objects/Roles/Role');


const headmasterRolePermissions = [
    'getUsers','getRoles'
];

const seedHeadmasterRoles = async () => {
  const headmasterRole = await Role.findOne({key: 'headmaster'});
  if (headmasterRole) {
    await Role.updateOne({_id: headmasterRole._id},
        {$set: {permissions: headmasterRolePermissions}});
  } else {
    const newRole = new Role({
      key: 'headmaster',
      name: 'Dyrektor Szkoły',
      permissions: headmasterRolePermissions,
    });
    newRole.save();
  }


};

const teacherRolePermissions = [

];

const seedTeacherRoles = async () => {
  const teacherRole = await Role.findOne({key: 'teacher'});
  if (teacherRole) {
    await Role.updateOne({_id: teacherRole._id},
        {$set: {permissions: teacherRolePermissions}});
  } else {
    const newRole = new Role({
      key: 'teacher',
      name: 'Nauczyciel',
      permissions: teacherRolePermissions,
    });
    newRole.save();
  }

};

const studentRolePermissions = [

];

const seedStudentRoles = async () => {
  const studentRole = await Role.findOne({key: 'student'});
  if (studentRole) {
    await Role.updateOne({_id: studentRole._id},
        {$set: {permissions: studentRolePermissions}});
  } else {
      const newRole = new Role({
        key: 'student',
        name: 'Uczeń',
        permissions: studentRolePermissions,
      });
      newRole.save();
  }
};


const setAllRoles = async () => {
  seedHeadmasterRoles();
  seedTeacherRoles();
  seedStudentRoles();
};

module.exports = {
  seedHeadmasterRoles,
  seedTeacherRoles,
  seedStudentRoles,
  setAllRoles,
};

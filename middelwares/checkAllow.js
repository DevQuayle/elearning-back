module.exports = (ctx, action) => {
  if (!ctx.user) throw new Error('Unauthorize', '407');
  const permissions = ctx.user.role.permissions;

  if(!permissions.includes(action)){
    throw new Error('Not permission', '401');
  }
};

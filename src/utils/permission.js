
/* 生成用户可以有权限的菜单 */
export const permission = (role, routers = [], result = []) => {
  for (const router of routers) {
    if (router.children) {
      result.push({
        ...router,
        children: permission(role, router.children, [])
      })
    } else if (router.meta.roles.includes(role)) {
      result.push({ ...router })
    }
  }
  return result
}

export const updateUsername = (id, username) => {
  return $.ajax({
    url: `/api/users/${id}/update_username`,
    method: 'PATCH',
    data: { username }
  });
};

export const deleteUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'DELETE'
  })
}
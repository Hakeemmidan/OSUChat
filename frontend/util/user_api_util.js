export const updateUsername = (id, username) => {
  return $.ajax({
    url: `/api/users/${id}/update_username`,
    method: 'POST',
    data: { username }
  });
};
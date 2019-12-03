export const forgotPassword = (email) => {
    return $.ajax({
        url: '/api/password/forgot',
        method: 'POST',
        data: { email }
    });
};
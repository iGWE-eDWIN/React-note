// Create account or loging Api
const postJSON = async (url, data, token = null) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// get api
const getJSON = async (url, token = null) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// Update api
const patchJSON = async (url, data, token = null) => {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// delete api
const deleteJSON = async (url, token = null) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// // apiUtils.js

// export const apiFetch = async (url, method = 'GET', body = null, token = null) => {
//   const headers = {
//     'Content-Type': 'application/json',
//     // Add any other headers as needed
//   };

//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`;
//   }

//   const options = {
//     method: method,
//     headers: headers,
//   };

//   if (body) {
//     options.body = JSON.stringify(body);
//   }

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('API request error:', error);
//     throw error;
//   }
// };

// const login = async (username, password) => {
//   try {
//     const response = await fetch('your-login-endpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error('Login failed');
//     }

//     const data = await response.json();

//     // Assuming your server returns a token in the response
//     const token = data.token;

//     // Store the token in a secure way (e.g., localStorage, sessionStorage)
//     localStorage.setItem('authToken', token);

//     return token;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };

// const fetchData = async (url, method = 'GET', body) => {
//   try {
//     const token = localStorage.getItem('authToken');

//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };

//     const response = await fetch(url, {
//       method,
//       headers,
//       body: body ? JSON.stringify(body) : undefined,
//     });

//     if (!response.ok) {
//       throw new Error('Request failed');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Fetch data error:', error);
//     throw error;
//   }
// };

// const logout = () => {
//   // Remove the token from storage
//   localStorage.removeItem('authToken');
// };

export { postJSON, patchJSON, deleteJSON, getJSON };

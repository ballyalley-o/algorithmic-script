export const RESPONSE = {
  USER: {
    USER_NOT_FOUND: {
      code: 404,
      message: 'User not found',
    },
    USER_ALREADY_EXIST: {
      code: 409,
      message: 'User already exist',
    },
  },

  AUTH: {
    INVALID_CREDENTIALS: {
      code: 401,
      message: 'Invalid credentials',
    },
    INVALID_TOKEN: {
      code: 401,
      message: 'Invalid token',
    },
    TOKEN_EXPIRED: {
      code: 401,
      message: 'Token expired',
    },
  },

  GENERAL: {
    INVALID_REQUEST: {
      code: 400,
      message: 'Invalid request',
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      message: 'Internal server error',
    },

    INVALID_INDEX: {
      code: 400,
      message: 'Invalid index, out of bounds',
    },

    EMPTY_LIST: {
      code: 400,
      message: 'Empty list found',
    },
  },

  VALIDATION: {
    INVALID_EMAIL: {
      code: 400,
      message: 'Invalid email',
    },
    INVALID_PASSWORD: {
      code: 400,
      message: 'Invalid password',
    },
    INVALID_NAME: {
      code: 400,
      message: 'Invalid name',
    },
    INVALID_PHONE: {
      code: 400,
      message: 'Invalid phone',
    },
    INVALID_ADDRESS: {
      code: 400,
      message: 'Invalid address',
    },
    INVALID_CITY: {
      code: 400,
      message: 'Invalid city',
    },
  },
}

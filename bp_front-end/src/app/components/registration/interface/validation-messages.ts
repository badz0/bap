export class ValidationMessages {
  public static get Messages() {
    return {
        name: {
          required:      'Name is required.',
          minlength:     'Name must be at least 4 characters long.',
          maxlength:     'Name cannot be more than 24 characters long.'
        },
        lastname: {
          required:      'Lastname is required.',
          minlength:     'Lastname must be at least 4 characters long.',
          maxlength:     'Lastname cannot be more than 24 characters long.'
        },
        birthDate: {
          required:      'BirthDate is required.'
        },
        username: {
          required:      'Username is required.',
          minlength:     'Username must be at least 4 characters long.',
          maxlength:     'Username cannot be more than 24 characters long.'
        },
        email: {
          required:      'Email is required.',
          minlength:     'Email must be at least 4 characters long.',
          maxlength:     'Email cannot be more than 24 characters long.'
        },
        password: {
          required:      'Password is required.',
          minlength:     'Password must be at least 4 characters long.',
          maxlength:     'Password cannot be more than 24 characters long.'
        },
        agreement: {
          required:      'Agreement is required.'
        },
      };
  };
}

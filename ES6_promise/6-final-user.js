import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = await Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    console.log(user);
  } catch (error) {
    return [
      {
        status: 'rejected',
        value: error.toString(),
      },
    ];
  }
}

export default handleProfileSignup;
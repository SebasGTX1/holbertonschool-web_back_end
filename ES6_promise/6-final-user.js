import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
      .then((response) => response.body)
      .catch((error) => Promise.reject(error.toString())),
  ];

  return Promise.allSettled(promises);
}

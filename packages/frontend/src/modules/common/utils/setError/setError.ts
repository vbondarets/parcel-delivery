export const setError = (message: string, setErrorMessage: (value: string) => void) => {
  setErrorMessage(message);
  setTimeout(() => {
    setErrorMessage('');
  }, 2000);
};

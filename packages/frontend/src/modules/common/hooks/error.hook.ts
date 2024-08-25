import Swal from 'sweetalert2';

type TUseErrorReturn = {
  handleError: (errorMessage: string) => void;
};

export const useError = (): TUseErrorReturn => {
  const handleError = (errorMessage: string) => {
    Swal.fire({
      icon: 'error',
      title: 'Validation error',
      text: errorMessage
    });
  };
  return { handleError };
};

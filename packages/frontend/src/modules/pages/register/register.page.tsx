/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react';
import { IBasicProps } from '../../common/types/props.types';
import { Formik, Form } from 'formik';
import { Input } from '../../common/components/input';
import { Link } from 'react-router-dom';
import { useRegister } from '../../common/hooks';
import { isAxiosError } from 'axios';
import { onSubmit } from '../../common/utils/onSubmit/onSubmit';
import userSchema from '../../common/utils/validation/schemas/user.schema';
import Swal from 'sweetalert2';
import { DNA } from 'react-loader-spinner';

interface IProps extends IBasicProps {}
const RegisterPageContainer = ({ className }: IProps) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { mutate: register, error, isPending } = useRegister();

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);
  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        icon: 'error',
        title: 'Validation error',
        text: errorMessage,
      });
    }
  }, [errorMessage]);

  useEffect(() => {
    if (error && error instanceof Error) {
      if (isAxiosError(error)) {
        Swal.fire({
          icon: 'error',
          title: 'Request error',
          text: error.response?.data.message as string,
        });
      }
    }
  }, [error]);
  return (
    <div className={className}>
      <div className="login-form-container">
        <p className="login-form-header">REGISTER</p>
        <Formik
          initialValues={{
            email: email,
            password: password,
            passwordConf: passwordConf,
            fullName: fullName,
          }}
          onSubmit={() => {
            onSubmit(
              userSchema,
              {
                email: email,
                password: password,
                password_conf: passwordConf,
                full_name: fullName,
              },
              setErrorMessage,
              () => {
                register({
                  email: email,
                  password: password,
                  password_conf: passwordConf,
                  full_name: fullName,
                });
              }
            );
          }}
        >
          <Form className="login-form">
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              type="email"
            />
            <Input
              label="Fullname"
              value={fullName}
              setValue={setFullName}
              type="text"
            />
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
            />
            <Input
              label="Password Confirmation"
              value={passwordConf}
              setValue={setPasswordConf}
              type="password"
            />
            {/* {errorMessage && <p className="form-error">{errorMessage}</p>} */}
            <button type="submit" className="login-form-button">
              {isLoading ? (
                <DNA
                  height="40"
                  width="40"
                  visible={true}
                  // radius="9"
                  // color="green"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass="login-button-loader"
                />
              ) : (
                <p>Register</p>
              )}
            </button>
            <div className="login-additional">
              <p className="login-additional-text">
                {"Don't have acount yet?"}
              </p>
              <Link to="/login" className="link">
                Go to login
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPageContainer;

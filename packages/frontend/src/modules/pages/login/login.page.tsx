/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, useState } from 'react';
import { IBasicProps } from '../../common/types/props.types';
import { Formik, Form } from 'formik';
import { Input } from '../../common/components/input';
import { Link } from 'react-router-dom';
import { onSubmit } from '../../common/utils/onSubmit/onSubmit';
import userSchema from '../../common/utils/validation/schemas/user.login.schema';
import { useAuth, useError } from '../../common/hooks';
import { DNA } from 'react-loader-spinner';

interface IProps extends IBasicProps {}

const LoginPageContainer = ({ className }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, isLoginLoading } = useAuth();
  const { handleError } = useError();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(isLoginLoading);
  }, [isLoginLoading]);

  return (
    <div className={className}>
      <div className="login-form-container">
        <p className="login-form-header">LOGIN</p>
        <Formik
          initialValues={{
            email: email,
            password: password
          }}
          onSubmit={() => {
            onSubmit(
              userSchema,
              {
                email: email,
                password: password
              },
              handleError,
              () => {
                handleLogin({ email: email, password: password });
              }
            );
          }}
        >
          <Form className="login-form">
            <Input label="Email" value={email} setValue={setEmail} type="email" />
            <Input label="Password" value={password} setValue={setPassword} type="password" />
            <button type="submit" className="login-form-button" disabled={isLoading}>
              {isLoading ? (
                <DNA
                  height="40"
                  width="40"
                  visible={true}
                  ariaLabel="three-dots-loading"
                  wrapperClass="login-button-loader"
                />
              ) : (
                <p>Login</p>
              )}
            </button>
            <div className="login-additional">
              <p className="login-additional-text">{"Don't have acount yet?"}</p>
              <Link to="/register" className="link">
                Go to register
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPageContainer;

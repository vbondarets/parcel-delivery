/* eslint-disable @typescript-eslint/no-empty-object-type */

import { useState } from 'react';
import { IBasicProps } from '../../common/types/props.types';
import { Formik, Form } from 'formik';
import { Input } from '../../common/components/input';
import { Link } from 'react-router-dom';
import { onSubmit } from '../../common/utils/onSubmit/onSubmit';
import { DNA } from 'react-loader-spinner';
import { userRegisterSchema } from '../../common/utils/validation/schemas';
import { useAuth, useError } from '../../common/hooks';

interface IProps extends IBasicProps {}
const RegisterPageContainer = ({ className }: IProps) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const { handleRegister, isRegisterLoading } = useAuth();
  const { handleError } = useError();
  return (
    <div className={className}>
      <div className="login-form-container">
        <p className="login-form-header">REGISTER</p>
        <Formik
          initialValues={{
            email: email,
            password: password,
            passwordConf: passwordConf,
            fullName: fullName
          }}
          onSubmit={() => {
            onSubmit(
              userRegisterSchema,
              {
                email: email,
                password: password,
                password_conf: passwordConf,
                full_name: fullName
              },
              handleError,
              () => {
                handleRegister({
                  email: email,
                  password: password,
                  password_conf: passwordConf,
                  full_name: fullName
                });
              }
            );
          }}
        >
          <Form className="login-form">
            <Input label="Email" value={email} setValue={setEmail} type="email" />
            <Input label="Fullname" value={fullName} setValue={setFullName} type="text" />
            <Input label="Password" value={password} setValue={setPassword} type="password" />
            <Input
              label="Password Confirmation"
              value={passwordConf}
              setValue={setPasswordConf}
              type="password"
            />
            <button type="submit" className="login-form-button" disabled={isRegisterLoading}>
              {isRegisterLoading ? (
                <DNA
                  height="40"
                  width="40"
                  visible={true}
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass="login-button-loader"
                />
              ) : (
                <p>Register</p>
              )}
            </button>
            <div className="login-additional">
              <p className="login-additional-text">{"Don't have acount yet?"}</p>
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

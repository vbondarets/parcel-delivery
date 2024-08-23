/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBasicProps } from '../../types/props.types';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/user.store';

interface IProps extends IBasicProps {}

const HeaderComponent = ({ className }: IProps) => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  return (
    <div className={className}>
      <div className="container">
        <div className="link-container">
          <Link className="link" to="/requests">
            REQUESTS
          </Link>
          <Link className="link" to="/create">
            CREATE
          </Link>
        </div>
        {user ? (
          <button
            className="account-button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/request');
            }}
          >
            <p>Account</p>
          </button>
        ) : (
          <div className="empty-container">
            <button
              className="login-button"
              onClick={(e) => {
                console.log('click');
                e.preventDefault();
                navigate('login');
              }}
            >
              <p>Login</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;

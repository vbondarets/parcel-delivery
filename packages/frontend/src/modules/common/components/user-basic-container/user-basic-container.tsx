import { IBasicProps } from '../../types/props.types';
import { IUser } from '../../types/user.types';

interface IProps extends IBasicProps {
  user: IUser;
}

const UserBasic = ({ className, user }: IProps) => {
  return (
    <div className={className}>
      <div className="user-text-container">
        <p>{`Hi`}</p>
        <p className="bold">{` ${user.full_name}`}</p>
      </div>
    </div>
  );
};

export default UserBasic;

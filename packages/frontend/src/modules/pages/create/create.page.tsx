import { useNavigate } from 'react-router-dom';
import { ParcelForm } from '../../common/components/parcel-form';
import { EParcelType } from '../../common/types/parcel.types';
import { IBasicProps } from '../../common/types/props.types';

interface IProps extends IBasicProps {
  creationType?: 'order' | 'deliver';
}

const CreatePageContainer = ({ className, creationType }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <div className="create-container">
        {creationType ? (
          creationType === 'order' ? (
            <ParcelForm parcelType={EParcelType.ORDER} actionType="create" />
          ) : (
            <ParcelForm parcelType={EParcelType.DELIVER} actionType="create" />
          )
        ) : (
          <div className="buttons-container">
            <button className="button" onClick={() => navigate('order')}>
              <p>Create order</p>
            </button>
            <button className="button" onClick={() => navigate('deliver')}>
              <p>Create deliver</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePageContainer;

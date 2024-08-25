import { IBasicProps } from '../../types/props.types';
import moment from 'moment-timezone';
import { useState } from 'react';
import { ModalComponent } from '../modal-component';
import { IParcel } from '../../types/parcel.types';

interface IProps extends IBasicProps {
  parcel: IParcel;
}

const ParcelComponent = ({ className, parcel }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={className}>
      <div
        className="parcel-container"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <div className="info-container">
          <p>Type: </p>
          <p>{parcel.type}</p>
        </div>
        <div className="info-container">
          <p>City from:</p>
          <p>{parcel.city_from}</p>
        </div>
        <div className="info-container">
          <p>City to:</p>
          <p>{parcel.city_to}</p>
        </div>
        <div className="info-container">
          <p>Date of dispatch:</p>
          <p>{moment(parcel.date_of_dispatch).tz(moment.tz.guess()).format('DD-MM-YYYY')}</p>
        </div>
        <div className="info-container">
          <p>Created at:</p>
          <p>{moment(parcel.createdAt).tz(moment.tz.guess()).format('DD-MM-YYYY LTS')}</p>
        </div>
        {parcel.category && (
          <div className="info-container">
            <p>Category:</p>
            <p>{parcel.category.name}</p>
          </div>
        )}
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        setIsOpen={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <></>
      </ModalComponent>
    </div>
  );
};

export default ParcelComponent;

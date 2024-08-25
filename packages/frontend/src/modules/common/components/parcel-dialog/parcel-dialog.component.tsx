import { IBasicProps } from '../../types/props.types';
import { IParcel } from '../../types/parcel.types';
import { ParcelForm } from '../parcel-form';

interface IProps extends IBasicProps {
  parcel: IParcel;
  handleDelete: (id: string) => void;
  isEdit: boolean;
  setIsEdit: (value: React.SetStateAction<boolean>) => void;
}

const ParcelDialogComponent = ({ className, handleDelete, parcel, isEdit, setIsEdit }: IProps) => {
  return (
    <div className={className}>
      <div className="parcel-dialog">
        {isEdit ? (
          <>
            <ParcelForm actionType="update" parcelType={parcel.type} parcel={parcel} />
            <div className="buttons-container">
              <button
                className="button red"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <p>Cancel</p>
              </button>
            </div>
          </>
        ) : (
          <div className="buttons-container">
            <button
              className="button"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <p>Edit parcel</p>
            </button>
            <button
              className="button red"
              onClick={() => {
                handleDelete(parcel.parcel_id as string);
              }}
            >
              <p>Delete parcel</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParcelDialogComponent;

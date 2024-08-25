import { IBasicProps } from '../../types/props.types';
import { EParcelType, IParcel } from '../../types/parcel.types';
import { Form, Formik } from 'formik';
import { Input } from '../input';
import parcelSchema from '../../utils/validation/schemas/parcel.schema';
import { onSubmit } from '../../utils/onSubmit/onSubmit';
import { useState } from 'react';
import { ICategory } from '../../types/category.type';
import { useParcel } from '../../hooks/parcel.hook';
import { useError } from '../../hooks';
import { DNA } from 'react-loader-spinner';
import { Selector } from '../selector';
import { useCategory } from '../../hooks/category.hook';

interface IProps extends IBasicProps {
  parcelType: EParcelType;
  parcel?: IParcel;
  actionType: 'create' | 'update';
}

const ParcelFormComponent = ({ className, parcel, parcelType, actionType }: IProps) => {
  const { handleParcelCreate, isParcelCreationLoading, handleParcelUpdate, isParcelUpdateLoading } =
    useParcel();
  const { handleError } = useError();
  const { categories } = useCategory();
  const [cityFrom, setCityFrom] = useState(parcel ? parcel.city_from : null);
  const [cityTo, setCityTo] = useState(parcel ? parcel.city_to : null);
  const [category, setCategory] = useState<ICategory | null>(
    parcel ? (parcel.category as ICategory) : null
  );
  const [dateOfDispatch, setDateOfDispatch] = useState(parcel ? parcel.date_of_dispatch : null);
  const [description, setDescription] = useState(parcel ? parcel.description : null);
  const [type, setType] = useState(parcel ? parcel.type : parcelType);
  return (
    <div className={className}>
      <div className="parcel-form-container">
        <p className="parcel-form-header">PARCEL</p>
        <Formik
          initialValues={{
            cityFrom: cityFrom,
            cityTo: cityTo,
            category: category,
            dateOfDispatch: dateOfDispatch,
            description: description,
            type: type
          }}
          onSubmit={() => {
            onSubmit(
              parcelSchema,
              {
                city_from: cityFrom,
                city_to: cityTo,
                category_id: category?.category_id,
                date_of_dispatch: dateOfDispatch,
                description: description,
                type: type
              },
              handleError,
              () => {
                if (actionType === 'create') {
                  handleParcelCreate({
                    city_from: cityFrom as string,
                    city_to: cityTo as string,
                    category_id: category?.category_id as string,
                    date_of_dispatch: dateOfDispatch as string,
                    description: description as string,
                    type: type
                  } as IParcel);
                } else {
                  handleParcelUpdate({
                    city_from: cityFrom as string,
                    city_to: cityTo as string,
                    category_id: category?.category_id as string,
                    date_of_dispatch: dateOfDispatch as string,
                    description: description as string,
                    type: type,
                    parcel_id: parcel?.parcel_id
                  } as IParcel);
                }
              }
            );
          }}
        >
          <Form className="parcel-form">
            {actionType === 'update' && (
              <Selector
                values={[...Object.values(EParcelType)]}
                label="Parcel type"
                value={EParcelType[type]}
                onChange={(value) => {
                  setType(value as EParcelType);
                }}
              />
            )}
            <Input label="City from" value={cityFrom || ''} setValue={setCityFrom} type="text" />
            <Input label="City to" value={cityTo || ''} setValue={setCityTo} type="text" />
            <Input
              label="Date of dispatch"
              value={dateOfDispatch || ''}
              setValue={setDateOfDispatch}
              type="text"
            />
            {type === 'ORDER' && (
              <>
                <Selector
                  values={categories.map((categoryEl) => {
                    return categoryEl.name;
                  })}
                  label="Category"
                  value={category?.name as string}
                  onChange={(value) => {
                    setCategory(
                      categories.find((categoryEl) => categoryEl.name === value) as ICategory
                    );
                  }}
                />
                <Input
                  label="Description"
                  value={description || ''}
                  setValue={setDescription}
                  type="text"
                />
              </>
            )}

            <button
              type="submit"
              className="parcel-form-button"
              disabled={actionType === 'create' ? isParcelCreationLoading : isParcelUpdateLoading}
            >
              {(actionType === 'create' ? isParcelCreationLoading : isParcelUpdateLoading) ? (
                <DNA
                  height="40"
                  width="40"
                  visible={true}
                  ariaLabel="three-dots-loading"
                  wrapperClass="login-button-loader"
                />
              ) : (
                <p>Save</p>
              )}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ParcelFormComponent;

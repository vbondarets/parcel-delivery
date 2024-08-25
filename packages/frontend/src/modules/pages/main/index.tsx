/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Parcel } from '../../common/components/parcel';
import { Selector } from '../../common/components/selector';
import { UserBasicComponent } from '../../common/components/user-basic-container';
// import { useCategory } from '../../common/hooks/category.hook';
import { useParcel } from '../../common/hooks/parcel.hook';
import { IBasicProps } from '../../common/types/props.types';
import { useUserStore } from '../../store/user.store';

interface IProps extends IBasicProps {}
const MainPageContainer = ({ className }: IProps) => {
  const { user } = useUserStore();
  const { parcels, sort, setSort } = useParcel();
  // const { categories } = useCategory();
  return (
    <div className={className}>
      <div className="main-container">
        {user && <UserBasicComponent user={user} />}
        <Selector sortValues={['default', 'dispatch']} value={sort} onChange={setSort} />
        <div className="main-events-contaner">
          <p className="main-table-title">YOUR PARCELS:</p>
          <div className="sort-container"></div>
          <div className="parcels-container"></div>
          {parcels &&
            parcels.map((parcel) => {
              return <Parcel parcel={parcel} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;

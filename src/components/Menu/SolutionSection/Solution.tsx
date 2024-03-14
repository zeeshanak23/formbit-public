import {
  faBoxOpen,
  faBuilding,
  faBus,
  faDumbbell,
  faGift,
  faGraduationCap,
  faHospital,
  faHotel,
  faKitMedical,
  faMoneyBill,
  faPiggyBank,
  faRightLong,
  faSchool,
  faShop,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { FC } from 'react';

const Solution: FC<{ menu: string }> = ({ menu }) => {
  const Stage = [
    {
      icon: <FontAwesomeIcon icon={faBuilding} />,
      name: 'School',
    },
    {
      icon: <FontAwesomeIcon icon={faUniversity} />,
      name: 'University',
    },
  ];

  const UseCase = [
    {
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
      name: 'Bank',
    },
    {
      icon: <FontAwesomeIcon icon={faHospital} />,
      name: 'Hospital',
    },
    {
      icon: <FontAwesomeIcon icon={faShop} />,
      name: 'Shop',
    },
    {
      icon: <FontAwesomeIcon icon={faDumbbell} />,
      name: 'Gym',
    },
    {
      icon: <FontAwesomeIcon icon={faBus} />,
      name: 'Travel Service',
    },
    {
      icon: <FontAwesomeIcon icon={faHotel} />,
      name: 'Hotel',
    },
  ];

  return (
    <>
      <section
        className={`absolute left-40 z-20 m-auto ml-[180px] mt-[2px] w-[700px] rounded-lg  bg-white p-2 `}
      >
        <div>
          <h3 className='mb-0 ml-6 mt-5 text-[18px] font-medium uppercase text-[#666]'>
            For Education
          </h3>

          <div className='ml-7 flex  w-[415px] cursor-pointer justify-between  '>
            {Stage.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <div
                    className='flex items-baseline justify-between  text-[#666]
 hover:text-[#000]'
                  >
                    <a className='h-[16px] w-[16px]'>{item.icon}</a>
                    <h1 className='ml-2 text-[16px] font-normal '>
                      {item.name}
                    </h1>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='mb-2 mt-3 w-[700px] border-b-2 border-dashed' />
          <h3 className='ml-6 mt-6  text-[18px] font-medium uppercase text-[#666]'>
            For Businesses
          </h3>
          <div className='ml-6 grid w-[450px] cursor-pointer grid-flow-col grid-rows-3 justify-between gap-[-10px]'>
            {UseCase.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <div
                    className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                  >
                    <a className='h-[16px] w-[16px]'>{item.icon}</a>
                    <h1 className='pl-3 text-[16px] font-normal '>
                      {item.name}
                    </h1>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Solution;

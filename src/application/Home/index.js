import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

function Home(props) {
  const { route } = props;
  
  return (
    <>
      <div className='flex flex-row justify-between px-2 py-1 bg-rose-600 text-white'>
        <span className='text-base iconfont'>&#xe747;</span>
        <span className='text-base'>WebApp</span>
        <span className='text-base iconfont'>&#xe7b3;</span>
      </div>
      <div className='flex flex-row justify-around bg-rose-600 text-white'>
        <NavLink
          to='/recommend'
          className='flex-1 px-1 py-0 text-sm text-gray-100'>
          <div className='h-full flex flex-row justify-center items-center'>
            <span className='active:py-2 active:px-0 active:text-white active:font-bold active:border-b-2 active:border-white'>
              推荐
            </span>
          </div>
        </NavLink>
        <NavLink
          to='/singers'
          className='flex-1 px-0 py-1 text-sm text-gray-100'>
          <div className='h-full flex flex-row justify-center items-center'>
            <span className='active:py-2 active:px-0 active:text-white active:font-bold active:border-b-2 active:border-white'>
              歌手
            </span>
          </div>
        </NavLink>
        <NavLink to='/rank' className='flex-1 px-0 py-1 text-sm text-gray-100'>
          <div className='h-full flex flex-row justify-center items-center'>
            <span className='active:py-2 active:px-0 active:text-white active:font-bold active:border-b-2 active:border-white'>
              排行榜
            </span>
          </div>
        </NavLink>
      </div>
      {renderRoutes(route.routes)}
    </>
  );
}

export default React.memo(Home);

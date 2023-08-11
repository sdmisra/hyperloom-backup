import './WorldBrowser.css'
import React from  'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';
import WorldCard from '../WorldCard/WorldCard';
import { MainPreview } from '../PreviewComponents/MainPreview/MainPreview';
import { GridPreview } from '../PreviewComponents/GridPreview/GridPreview';
import { CarouselPreview } from '../PreviewComponents/CarouselPreview/CarouselPreview';

export const WorldBrowser = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const loading = useSelector((state) => state.root.isLoading);
  const error = useSelector((state) => state.root.error);

  const gridPreviews = displayedWorlds.slice(0, 9).map(world => <GridPreview world={world}/>)

  // ok first you need to create the component
  // then make sure its taking in the props and adding the info 
  // the right way
  // then stylize
  //then repeat
  // building the carousel components pause and research for a little

  if (useLocation().pathname !== '/worlds') {
    return <PageNotFound />;
  } else if (loading) {
    return <LoadingIcon />;
  } else if (error) {
    return <Error />;
  } else if (displayedWorlds.length > 0) {
    return (
      <div className='world-browser-container'>
        <section className='preview-section red'>

        </section>
        <section className='preview-section blue'>
          
        </section>
        <section className='preview-section'>
          <div className='grid-preview-wrapper'>
            {gridPreviews}
          </div>
        </section>
      </div>
    );
  }
};
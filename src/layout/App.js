import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import './App.css';
import Information from '../Components/Information';
import CoorporateStory from '../Components/CoorporateStory';
import CoorporateLeaderShip from '../Components/CoorporateLeaderShip'
import {useWindowDimensions} from '../Components/useDimension'

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="demoPage" ref={ref}>
          {props.children}
      </div>
  );
});

function App() {
  const {  width } = useWindowDimensions();
  return (
    <div className="App">
      {/* <AppRoute /> */}
      <HTMLFlipBook 
           width={width}
           height="900px"
            size="fixed"
            maxWidth={width}
>
            <Page number="1"><CoorporateLeaderShip/></Page>
            <Page number="2"><Information/></Page>
            <Page number="3"><CoorporateStory/></Page>
        </HTMLFlipBook>
    </div>
  );
}

export default App;

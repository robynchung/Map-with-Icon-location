import React from 'react';
import { Stage, Layer } from 'react-konva';

import Icon from './Icon';

// styles
import StageWrapper from './styles/StageWrapper';

function KonvaTest() {
  const [selectedId, selectShape] = React.useState(null);
  const [stage, setStage] = React.useState(0);

  React.useEffect(() => {
    var container = document.querySelector('#stage-parent');
    setStage(container);
  }, []);

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <StageWrapper id="stage-parent">
      {/* map */}
      <Stage
        width={stage.offsetWidth}
        height={stage.offsetHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        style={{
          backgroundImage: `url('https://www.mcmaster.ca/uts/maps/images/etb5.gif')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Layer>
          {/* ryan icon */}
          <Icon
            selectedId={selectedId}
            id={'icon1'}
            selectShape={selectShape}
          />
        </Layer>
      </Stage>
    </StageWrapper>
  );
}

export default KonvaTest;

import React from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

import useIcon from '../hook/useIcon';

import img from '../assets/images/ryan.png';

export default function Icon({ selectedId, id, selectShape }) {
  const [image] = useImage(img);

  const {
    onSelect,
    handleDragEnd,
    handleTransformEnd,
    handleBoundBox,

    shapeProps,

    // refs
    shapeRef,
    trRef
  } = useIcon({ id, selectedId, selectShape });

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={handleDragEnd}
        onTransformEnd={handleTransformEnd}
      />
      {id === selectedId && (
        <Transformer ref={trRef} boundBoxFunc={handleBoundBox} />
      )}
    </React.Fragment>
  );
}

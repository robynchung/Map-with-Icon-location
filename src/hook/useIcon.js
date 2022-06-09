import React from 'react';

import constants from '../constants';
export default function useIcon({ id, selectedId, selectShape }) {
  // ref
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  // state
  const [shapeProps, setShapeProps] = React.useState({
    ...constants.defaultShapeProps,
    id
  });

  // compare var
  const isSelected = selectedId === id;

  const handleOnChange = newAttr => {
    setShapeProps(newAttr);
  };

  const onSelect = () => {
    selectShape(id);
  };

  const handleDragEnd = e => {
    handleOnChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    });
  };

  const handleTransformEnd = e => {
    // transformer is changing scale of the node
    // and NOT its width or height
    // but in the store we have only width and height
    // to match the data better we will reset scale on transform end
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);
    handleOnChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(node.height() * scaleY)
    });
  };

  const handleBoundBox = (oldBox, newBox) => {
    // limit resize
    if (newBox.width < 5 || newBox.height < 5) {
      return oldBox;
    }
    return newBox;
  };

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return {
    onSelect,
    handleDragEnd,
    handleTransformEnd,
    handleBoundBox,

    shapeProps,

    // refs
    shapeRef,
    trRef
  };
}

import React from 'react';
import merge from 'lodash/merge';

const AnnotationPointers = ({annotations,imageDimensions,handleAnnoClick}) => {
  let allAnnos = merge({},annotations);
  // returns the annotations with their absolute positions on the screen
  let annotationsWithPixelPos = Object.keys(allAnnos).map(anno => {
    let pixelAnno = allAnnos[anno];
    pixelAnno['x_pos'] = Math.floor(((pixelAnno['x_pos']*imageDimensions[0])/100)+$("#artwork-img").offset().left);
    pixelAnno['y_pos'] = Math.floor(((pixelAnno['y_pos']*imageDimensions[1])/100))-($("#github").width()/2);

    let style = {
      position: 'absolute',
      top: pixelAnno['y_pos']+'px',
      left: pixelAnno['x_pos']+'px'
    };
    return {pixelAnno: pixelAnno, style: style};
  });

  return (
    <div className="pointers">
    {annotationsWithPixelPos.map(anno =>
      <button className="pointers" key={`anno-pointer-${anno.pixelAnno.id}`} onClick={handleAnnoClick} style={anno.style}>
        <i id="pointer" className="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
      </button>
    )}
    </div>
  );
};

export default AnnotationPointers;

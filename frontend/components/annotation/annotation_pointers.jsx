import React from 'react';

const AnnotationPointers = ({annotations,imageDimensions,handleAnnoClick}) => {

  // returns the annotations with their absolute positions on the screen
  let annotationsWithPixelPos = Object.values(annotations).map(anno => {
    let pixelAnno = anno;
    pixelAnno['x_pos'] = ((anno['x_pos']*imageDimensions[1])/100)+$("#artwork-img").offset().left;
    pixelAnno['y_pos'] = ((anno['y_pos']*imageDimensions[1])/100);

    let style = {
      position: 'absolute',
      top: pixelAnno['x_pos']+'px',
      left: pixelAnno['y_pos']+'px'
    };
    return {pixelAnno: pixelAnno, style: style};
  });

  console.log(annotationsWithPixelPos);

  return (
    <div className="pointers">
    {annotationsWithPixelPos.map(anno =>
      <button key={`anno-pointer-${anno.pixelAnno.id}`} onClick={handleAnnoClick} style={anno.style}>
        <i className="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
      </button>
    )}
    </div>
  );
};

export default AnnotationPointers;

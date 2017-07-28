import {values} from 'lodash';

export const selectAllArtworks = ({artworks}) => values(artworks.artworks);

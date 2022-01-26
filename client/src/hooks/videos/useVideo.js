import { useContext } from 'react';
import { VideoContext } from '../../context/VideoProvider';

export const useVideo = () => useContext(VideoContext);

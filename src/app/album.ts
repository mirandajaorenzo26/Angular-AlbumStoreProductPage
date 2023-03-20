import { Track } from "./track";

export interface Album {
  name: string;
  releaseDate: string;
  coverImg: string;
  track: Track[];
}

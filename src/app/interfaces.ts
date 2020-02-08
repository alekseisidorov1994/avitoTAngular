export interface ImageList {
  id: number;
  url: string;
}
export interface Img {
  id: number;
  url: string;
  comments: [
    {
      id: number
      text: string
      date: number
    }
  ];
}

export interface FormComment {
  name: string;
  comment: string;
  id?: number;
}

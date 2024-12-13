export interface ImageExtra {
  url: string;
  title: string;
}

export interface VideoExtra {
  url: string;
  title: string;
}

export interface QAItem {
  query: string;
  answer: string;
  search_extra_img?: ImageExtra[];
  search_extra_video?: VideoExtra[];
}

export type QAData = QAItem[];
export interface Article {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  tags: { [key: number]: string };
}

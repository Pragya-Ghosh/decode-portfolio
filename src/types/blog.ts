export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  tags: string[];
  created_at: string;
  cover_image_url?: string | null;
  is_published: boolean;
}
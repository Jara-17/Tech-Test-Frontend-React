export type Pet = {
  id?: number;
  category?: Category;
  name?: string;
  photoUrls?: string[];
  tags?: Tag[];
  status?: Status;
};

export type Category = {
  id: number;
  name: string;
};

export type Tag = {
  id: number;
  name: string;
};

export type Status = "available" | "pending" | "sold";

export type PetFormData = {
  name: string;
  category: {
    name: string;
  };
  tags: Array<{
    name: string;
  }>;
  status: Status;
};

export type courselist = {
  title: string;
};

export type dummySkils = {
  heading: string;
  skilled: string;
  category: string;
  account: string;
  courselist: courseCorousel;
};

export type courseCorousel = {
  title: string;
  courses: courseCard[];
};

export type courseCard = {
  name: string;
  image: string;
};

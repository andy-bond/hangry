export interface NavigationItem {
  name: string;
  icon: string;
  link: string;
  queryParams?: string;
}

export interface NavigationSection {
  name: string;
  icon?: string;
  link: string;
  items: NavigationItem[];
  queryParams?: any;
}

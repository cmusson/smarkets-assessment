export type TSmarketsEvent = {
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string | null;
  created: string;
  description: string | null;
  display_order: number;
  end_date: string | null;
  full_slug: string;
  hidden: boolean;
  id: string;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string;
  seo_description: string;
  short_name: string;
  slug: string;
  special_rules: string | null;
  start_date: string;
  start_datetime: string;
  state: string;
  type: string;
};

export type TSelections = "football" | "baseball" | "cricket" | "boxing";

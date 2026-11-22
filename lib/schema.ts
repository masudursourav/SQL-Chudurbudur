export interface TableInfo {
  name: string;
  label: string;
  columns: string[];
  note: string;
}

/** Every table available in the in-browser SQLite sandbox. */
export const TABLES_INFO: TableInfo[] = [
  {
    name: 'cha_stall',
    label: 'চায়ের দোকান · Cha stall',
    columns: ['id', 'sale_date', 'day_name', 'shift', 'item', 'cups', 'price_per_cup', 'revenue', 'customer', 'sugar_level'],
    note: 'চা, সিঙাড়া, সমোচা — দোকানের হিসাব',
  },
  {
    name: 'divisions',
    label: 'বিভাগ · Divisions',
    columns: ['division_id', 'name_en', 'name_bn', 'area_km2', 'population'],
    note: '৮টি বিভাগের তথ্য',
  },
  {
    name: 'districts',
    label: 'জেলা · Districts',
    columns: ['district_id', 'division_id', 'name_en', 'name_bn', 'population', 'literacy_rate'],
    note: 'জেলা ও সাক্ষরতা',
  },
  {
    name: 'garment_factories',
    label: 'পোশাক কারখানা · Garment factories',
    columns: ['factory_id', 'name', 'district_id', 'workers', 'min_wage', 'max_wage', 'export_usd', 'compliance_score', 'incidents'],
    note: 'শ্রমিক, মজুরি, রপ্তানি',
  },
  {
    name: 'remittance_2026',
    label: 'প্রবাসী অর্থ · Remittance 2026',
    columns: ['id', 'month', 'country', 'usd_amount', 'workers_count'],
    note: 'দেশ ও মাসভিত্তিক অর্থ',
  },
  {
    name: 'inflation_2026',
    label: 'স্ফীতি · Inflation 2026',
    columns: ['id', 'month', 'cpi', 'food_inflation', 'non_food_inflation'],
    note: 'মাসভিত্তিক দাম বৃদ্ধি',
  },
  {
    name: 'idp_2026',
    label: 'বাস্তুচ্যুতি · Displacement',
    columns: ['id', 'division', 'district', 'cause', 'households', 'persons', 'date'],
    note: 'বন্যা, ঘূর্ণিঝড়, লবণাক্ততা',
  },
  {
    name: 'power_outages',
    label: 'বিদ্যুৎ বিভ্রাট · Power outages',
    columns: ['id', 'outage_date', 'district', 'hours', 'affected_customers'],
    note: 'অক্টোবরের লোডশেডিং',
  },
  {
    name: 'e_services',
    label: 'ই-সার্ভিস · e-Services',
    columns: ['service_id', 'service_name', 'ministry', 'digital_status', 'users', 'district_coverage'],
    note: 'মন্ত্রণালয় ও ব্যবহারকারী',
  },
  {
    name: 'rice_prices',
    label: 'চালের দাম · Rice prices',
    columns: ['id', 'price_date', 'district', 'variety', 'price_per_kg'],
    note: 'মিনিকেট, BRRI ধান',
  },
];

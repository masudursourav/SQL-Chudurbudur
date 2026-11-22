/**
 * Synthetic Bangladesh dataset.
 * Inspired by real trends from BBS, Bangladesh Bank, IOM DTM and data.gov.bd.
 * Replace with real CSVs for production use.
 */

/** The cha-stall ledger used by Chapter I — a beginner-friendly world. */
export const CHA_SALES = [
  { id: 1, date: '2026-10-01', day: 'Thursday', shift: 'morning', item: 'Cha', cups: 12, price: 10, revenue: 120, customer: 'Rahim', sugar: 'medium' },
  { id: 2, date: '2026-10-01', day: 'Thursday', shift: 'morning', item: 'Singara', cups: 8, price: 15, revenue: 120, customer: 'Karim', sugar: 'none' },
  { id: 3, date: '2026-10-01', day: 'Thursday', shift: 'morning', item: 'Samocha', cups: 6, price: 20, revenue: 120, customer: 'Sumi', sugar: 'none' },
  { id: 4, date: '2026-10-01', day: 'Thursday', shift: 'evening', item: 'Cha', cups: 15, price: 10, revenue: 150, customer: 'Rahim', sugar: 'sweet' },
  { id: 5, date: '2026-10-02', day: 'Friday', shift: 'evening', item: 'Bread Omelette', cups: 5, price: 30, revenue: 150, customer: 'Tanvir', sugar: 'none' },
  { id: 6, date: '2026-10-02', day: 'Friday', shift: 'morning', item: 'Cha', cups: 9, price: 10, revenue: 90, customer: 'Golapi', sugar: 'medium' },
  { id: 7, date: '2026-10-02', day: 'Friday', shift: 'evening', item: 'Singara', cups: 10, price: 15, revenue: 150, customer: 'Jamai Babu', sugar: 'none' },
  { id: 8, date: '2026-10-03', day: 'Saturday', shift: 'evening', item: 'Cha', cups: 18, price: 10, revenue: 180, customer: 'Hero Alam', sugar: 'sweet' },
  { id: 9, date: '2026-10-03', day: 'Saturday', shift: 'morning', item: 'Samocha', cups: 7, price: 20, revenue: 140, customer: 'Mama', sugar: 'none' },
  { id: 10, date: '2026-10-03', day: 'Saturday', shift: 'morning', item: 'Cha', cups: 11, price: 10, revenue: 110, customer: 'Hena', sugar: 'medium' },
  { id: 11, date: '2026-10-04', day: 'Sunday', shift: 'evening', item: 'Singara', cups: 4, price: 15, revenue: 60, customer: 'Rani', sugar: 'none' },
  { id: 12, date: '2026-10-04', day: 'Sunday', shift: 'evening', item: 'Cha', cups: 20, price: 10, revenue: 200, customer: 'Raja Saheb', sugar: 'sweet' },
  { id: 13, date: '2026-10-04', day: 'Sunday', shift: 'evening', item: 'Bread Omelette', cups: 6, price: 30, revenue: 180, customer: 'Chachchu', sugar: 'none' },
  { id: 14, date: '2026-10-05', day: 'Monday', shift: 'morning', item: 'Samocha', cups: 9, price: 20, revenue: 180, customer: 'Bouma', sugar: 'none' },
] as const;

export const DIVISIONS = [
  { id: 1, nameEn: 'Dhaka', nameBn: 'ঢাকা', area: 3111, population: 45_000_000 },
  { id: 2, nameEn: 'Chittagong', nameBn: 'চট্টগ্রাম', area: 3370, population: 34_000_000 },
  { id: 3, nameEn: 'Rajshahi', nameBn: 'রাজশাহী', area: 1817, population: 19_000_000 },
  { id: 4, nameEn: 'Khulna', nameBn: 'খুলনা', area: 1206, population: 16_000_000 },
  { id: 5, nameEn: 'Barishal', nameBn: 'বরিশাল', area: 1320, population: 9_000_000 },
  { id: 6, nameEn: 'Sylhet', nameBn: 'সিলেট', area: 1256, population: 11_000_000 },
  { id: 7, nameEn: 'Rangpur', nameBn: 'রংপুর', area: 1591, population: 17_000_000 },
  { id: 8, nameEn: 'Mymensingh', nameBn: 'ময়মনসিংহ', area: 1028, population: 12_000_000 },
] as const;

export const DISTRICTS = [
  { id: 1, divisionId: 1, nameEn: 'Dhaka', nameBn: 'ঢাকা', population: 22_000_000, literacy: 78.5 },
  { id: 2, divisionId: 1, nameEn: 'Gazipur', nameBn: 'গাজীপুর', population: 5_000_000, literacy: 72.1 },
  { id: 3, divisionId: 1, nameEn: 'Narayanganj', nameBn: 'নারায়ণগঞ্জ', population: 3_500_000, literacy: 74.0 },
  { id: 4, divisionId: 2, nameEn: 'Chittagong', nameBn: 'চট্টগ্রাম', population: 9_000_000, literacy: 81.2 },
  { id: 5, divisionId: 2, nameEn: "Cox's Bazar", nameBn: 'কক্সবাজার', population: 2_500_000, literacy: 68.4 },
  { id: 6, divisionId: 3, nameEn: 'Rajshahi', nameBn: 'রাজশাহী', population: 7_000_000, literacy: 76.8 },
  { id: 7, divisionId: 4, nameEn: 'Khulna', nameBn: 'খুলনা', population: 6_500_000, literacy: 75.2 },
  { id: 8, divisionId: 5, nameEn: 'Barishal', nameBn: 'বরিশাল', population: 4_000_000, literacy: 70.1 },
  { id: 9, divisionId: 6, nameEn: 'Sylhet', nameBn: 'সিলেট', population: 4_200_000, literacy: 73.5 },
  { id: 10, divisionId: 7, nameEn: 'Rangpur', nameBn: 'রংপুর', population: 5_500_000, literacy: 69.8 },
  { id: 11, divisionId: 8, nameEn: 'Mymensingh', nameBn: 'ময়মনসিংহ', population: 5_800_000, literacy: 68.9 },
] as const;

export const FACTORIES = [
  { id: 101, name: 'Eastern Knitters', districtId: 2, workers: 4500, minWage: 8500, maxWage: 12500, exportUsd: 3_200_000, compliance: 68, incidents: 4 },
  { id: 102, name: 'GreenTextile Ltd', districtId: 2, workers: 3200, minWage: 7800, maxWage: 11000, exportUsd: 2_100_000, compliance: 55, incidents: 7 },
  { id: 103, name: 'Dhaka Apparel', districtId: 1, workers: 6000, minWage: 9200, maxWage: 14000, exportUsd: 4_800_000, compliance: 82, incidents: 1 },
  { id: 104, name: 'Port City Garments', districtId: 4, workers: 2800, minWage: 7500, maxWage: 10800, exportUsd: 1_900_000, compliance: 48, incidents: 9 },
  { id: 105, name: 'Hillside Fashion', districtId: 8, workers: 1200, minWage: 7200, maxWage: 9500, exportUsd: 700_000, compliance: 40, incidents: 12 },
  { id: 106, name: 'Northern Mills', districtId: 10, workers: 2100, minWage: 7000, maxWage: 9800, exportUsd: 1_100_000, compliance: 52, incidents: 6 },
  { id: 107, name: 'Capital Wear', districtId: 1, workers: 5500, minWage: 9500, maxWage: 13000, exportUsd: 4_200_000, compliance: 79, incidents: 2 },
  { id: 108, name: 'Bay Exports', districtId: 8, workers: 1800, minWage: 7400, maxWage: 10500, exportUsd: 950_000, compliance: 45, incidents: 5 },
  { id: 109, name: 'Royal Garments', districtId: 2, workers: 3900, minWage: 8800, maxWage: 12200, exportUsd: 2_700_000, compliance: 70, incidents: 3 },
  { id: 110, name: 'Sylhet Tex', districtId: 9, workers: 1600, minWage: 7300, maxWage: 10100, exportUsd: 800_000, compliance: 44, incidents: 8 },
] as const;

export const REMITTANCE = [
  { id: 1, month: '2026-11', country: 'Saudi Arabia', usd: 125_000_000, workers: 45_000 },
  { id: 2, month: '2026-11', country: 'UAE', usd: 98_000_000, workers: 32_000 },
  { id: 3, month: '2026-11', country: 'Malaysia', usd: 42_000_000, workers: 15_000 },
  { id: 4, month: '2026-11', country: 'UK', usd: 18_000_000, workers: 6_000 },
  { id: 5, month: '2026-11', country: 'USA', usd: 25_000_000, workers: 8_000 },
  { id: 6, month: '2026-10', country: 'Saudi Arabia', usd: 110_000_000, workers: 43_000 },
  { id: 7, month: '2026-10', country: 'UAE', usd: 90_000_000, workers: 30_000 },
  { id: 8, month: '2026-10', country: 'Malaysia', usd: 38_000_000, workers: 14_000 },
  { id: 9, month: '2026-09', country: 'Saudi Arabia', usd: 105_000_000, workers: 41_000 },
  { id: 10, month: '2026-09', country: 'UAE', usd: 85_000_000, workers: 29_000 },
] as const;

export const INFLATION = [
  { id: 1, month: '2026-01', cpi: 158.2, food: 9.1, nonFood: 7.4 },
  { id: 2, month: '2026-02', cpi: 159.1, food: 8.9, nonFood: 7.6 },
  { id: 3, month: '2026-03', cpi: 160.5, food: 9.4, nonFood: 7.8 },
  { id: 4, month: '2026-04', cpi: 161.0, food: 8.7, nonFood: 8.1 },
  { id: 5, month: '2026-05', cpi: 162.3, food: 8.5, nonFood: 8.4 },
  { id: 6, month: '2026-06', cpi: 163.1, food: 8.2, nonFood: 8.9 },
  { id: 7, month: '2026-07', cpi: 164.0, food: 8.6, nonFood: 9.1 },
  { id: 8, month: '2026-08', cpi: 164.8, food: 8.4, nonFood: 9.4 },
  { id: 9, month: '2026-09', cpi: 165.5, food: 8.3, nonFood: 9.7 },
  { id: 10, month: '2026-10', cpi: 166.1, food: 8.27, nonFood: 9.89 },
  { id: 11, month: '2026-11', cpi: 167.0, food: 8.1, nonFood: 10.2 },
] as const;

export const IDP = [
  { id: 1, division: 'Barishal', district: 'Barishal', cause: 'River erosion', households: 450, persons: 1800, date: '2026-09-12' },
  { id: 2, division: 'Barishal', district: 'Pirojpur', cause: 'Cyclone', households: 320, persons: 1280, date: '2026-09-18' },
  { id: 3, division: 'Khulna', district: 'Satkhira', cause: 'Salinity intrusion', households: 600, persons: 2400, date: '2026-09-25' },
  { id: 4, division: 'Khulna', district: 'Khulna', cause: 'Flood', households: 400, persons: 1600, date: '2026-10-02' },
  { id: 5, division: 'Rangpur', district: 'Kurigram', cause: 'Flood', households: 520, persons: 2080, date: '2026-10-10' },
  { id: 6, division: 'Rangpur', district: 'Lalmonirhat', cause: 'River erosion', households: 310, persons: 1240, date: '2026-10-15' },
  { id: 7, division: 'Sylhet', district: 'Sunamganj', cause: 'Flash flood', households: 380, persons: 1520, date: '2026-10-20' },
  { id: 8, division: 'Mymensingh', district: 'Jamalpur', cause: 'River erosion', households: 290, persons: 1160, date: '2026-10-28' },
  { id: 9, division: 'Dhaka', district: 'Dhaka', cause: 'Urban flooding', households: 150, persons: 600, date: '2026-10-30' },
] as const;

export const OUTAGES = [
  { id: 1, date: '2026-10-01', district: 'Dhaka', hours: 8.5, customers: 120_000 },
  { id: 2, date: '2026-10-02', district: 'Gazipur', hours: 12.0, customers: 80_000 },
  { id: 3, date: '2026-10-03', district: 'Chittagong', hours: 6.0, customers: 95_000 },
  { id: 4, date: '2026-10-04', district: 'Khulna', hours: 10.5, customers: 70_000 },
  { id: 5, date: '2026-10-05', district: 'Barishal', hours: 14.0, customers: 45_000 },
  { id: 6, date: '2026-10-06', district: 'Rangpur', hours: 9.0, customers: 60_000 },
  { id: 7, date: '2026-10-07', district: 'Sylhet', hours: 7.5, customers: 55_000 },
  { id: 8, date: '2026-10-08', district: 'Dhaka', hours: 11.0, customers: 130_000 },
  { id: 9, date: '2026-10-09', district: 'Gazipur', hours: 13.5, customers: 85_000 },
  { id: 10, date: '2026-10-10', district: 'Khulna', hours: 15.0, customers: 72_000 },
  { id: 11, date: '2026-10-11', district: 'Barishal', hours: 16.5, customers: 48_000 },
  { id: 12, date: '2026-10-12', district: 'Rangpur', hours: 8.0, customers: 58_000 },
  { id: 13, date: '2026-10-13', district: 'Sylhet', hours: 9.5, customers: 60_000 },
  { id: 14, date: '2026-10-14', district: 'Chittagong', hours: 10.0, customers: 92_000 },
] as const;

export const ESERVICES = [
  { id: 1, name: 'e-GP Procurement', ministry: 'Finance Ministry', status: 'Live', users: 450_000, coverage: 'All' },
  { id: 2, name: 'National ID Online', ministry: 'Home Ministry', status: 'Live', users: 3_200_000, coverage: 'All' },
  { id: 3, name: 'Land Record Digital', ministry: 'Land Ministry', status: 'Pilot', users: 80_000, coverage: 'Dhaka, Gazipur' },
  { id: 4, name: 'Voter Services', ministry: 'Election Commission', status: 'Live', users: 1_500_000, coverage: 'All' },
  { id: 5, name: 'Passport Service', ministry: 'Foreign Ministry', status: 'Live', users: 900_000, coverage: 'All' },
  { id: 6, name: 'e-Trade License', ministry: 'Local Govt', status: 'Pilot', users: 120_000, coverage: 'Chittagong' },
  { id: 7, name: 'Health Registration', ministry: 'Health Ministry', status: 'Beta', users: 200_000, coverage: 'Sylhet, Barishal' },
  { id: 8, name: 'Pension Portal', ministry: 'Finance Ministry', status: 'Live', users: 600_000, coverage: 'All' },
] as const;

export const RICE = [
  { id: 1, date: '2026-10-01', district: 'Dhaka', variety: 'BRRI dhan', price: 48 },
  { id: 2, date: '2026-10-01', district: 'Gazipur', variety: 'BRRI dhan', price: 46 },
  { id: 3, date: '2026-10-01', district: 'Chittagong', variety: 'BRRI dhan', price: 50 },
  { id: 4, date: '2026-10-01', district: 'Khulna', variety: 'BRRI dhan', price: 49 },
  { id: 5, date: '2026-10-01', district: 'Barishal', variety: 'BRRI dhan', price: 52 },
  { id: 6, date: '2026-10-01', district: 'Dhaka', variety: 'Miniket', price: 62 },
  { id: 7, date: '2026-10-01', district: 'Gazipur', variety: 'Miniket', price: 60 },
  { id: 8, date: '2026-10-01', district: 'Chittagong', variety: 'Miniket', price: 64 },
  { id: 9, date: '2026-10-01', district: 'Khulna', variety: 'Miniket', price: 63 },
  { id: 10, date: '2026-10-01', district: 'Barishal', variety: 'Miniket', price: 66 },
] as const;

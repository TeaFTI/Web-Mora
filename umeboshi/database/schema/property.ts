/**
 * Property Table Schema
 */

import { sql } from "drizzle-orm";
import {
  pgTable,
  smallint,
  text,
  uuid,
} from "drizzle-orm/pg-core";

const propertyTable = pgTable("property", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").primaryKey().notNull(),
  addressId: uuid("address_id"),
  parcelNumberLocal: text("parcel_number_local"),
  parcelNumberState: text("parcel_number_state"),
  parcelNumberPropertyId: text("parcel_number_property_id"),
  taxingDistrictCode: text("taxing_district_code"),
  taxingDistrictDescription: text("taxing_district_description"),
  section: smallint("section"),
  township: smallint("township"),
  range: smallint("range"),
  subdivisionName: text("subdivision_name"),
  subdivisionSection: smallint("subdivision_section"),
  deededAcres: smallint("deeded_acres"),
  politicalTownship: text("political_township"),
  lotNumber: smallint("lot_number"),
  stateTaxDistrict: text("state_tax_district"),
  lot: text("lot"),
  block: text("block"),
});

export default propertyTable;

import { Components } from '@src/api/generated/client'

export type InvoiceType = {
  /**
   * example:
   * 5785
   */
  id: number
  /**
   * example:
   * 6773
   */
  customer_id: number | null
  /**
   * example:
   * false
   */
  finalized: boolean
  /**
   * example:
   * true
   */
  paid: boolean
  /**
   * example:
   * 2021-02-03
   */
  date: string | null
  /**
   * example:
   * 2021-03-05
   */
  deadline: string | null
  /**
   * example:
   * 120.00
   */
  total: string | null
  /**
   * example:
   * 20.00
   */
  tax: string | null
  invoice_lines: Components.Schemas.InvoiceLine[]
  customer?: Components.Schemas.Customer
}

export enum Variants {
  SUCCESS = 'success',
  DANGER = 'danger',
}

export enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

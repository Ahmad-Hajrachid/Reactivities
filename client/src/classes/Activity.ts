 export interface Activity{
    id: string
    title: string
    date: Date
    description: string
    category: string
    isCancelled: boolean
    city?: string
    venue: string
    latitude: number
    longitude: number
}

export type CreateActivity = Omit<Activity, 'id' | 'isCancelled'>

export type LocationIQSuggestion = {
  place_id: string
  osm_id: string
  osm_type: string
  licence: string
  lat: string
  lon: string
  boundingbox: string[]
  class: string
  type: string
  display_name: string
  display_place: string
  display_address: string
  address: LocationIQAddress
}

export type LocationIQAddress = {
  name: string
  state?: string
  country: string
  city?:string
  town?: string
  village?:string
  country_code: string
  county?: string
  postcode?: string
}

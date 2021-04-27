export const GET_WEATHER = 'GET_WEATHER';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SET_ALERT = 'SET_ALERT';

// types TS---------------------------------

export type WeatherDataType = {
   base: string
    clouds: {
        all: number
    };
    cod: number
    coord: {
        lon: number
        lat: number
    };
    dt: number
    id: number
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    };
    name: string
    sys: {
        country: string
        id: number
        sunrise: number
        sunset: number
        type: number
    };
    timezone: number
    visibility: number
    weather: WeatherType[]
    wind: {
        speed: number
        deg: number
    };
}

export type WeatherType = {
   description: string
   icon: string
   id: number
   main: string
}

export type WeatherStateType = {
  data: WeatherDataType | null
  loading: boolean
  alert: string
}

export type GetWeatherActionType = {
   type: typeof GET_WEATHER
   payload: WeatherDataType
}

export type ShowLoaderActionType = {
   type: typeof SHOW_LOADER
}

export type HideLoaderActionType = {
   type: typeof HIDE_LOADER
}

export type SetAlertActionType = {
   type: typeof SET_ALERT
   payload: string
}

export type WeatherActionType = GetWeatherActionType | ShowLoaderActionType | HideLoaderActionType | SetAlertActionType

export type WeatherErrorType = {
   cod: string;
   message: string;
}
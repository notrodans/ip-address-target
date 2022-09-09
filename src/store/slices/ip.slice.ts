import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import validator from 'validator'

import { RootState } from '../store'

type LocationType = {
  city: string
  country: string
  geonameId: number
  lat: number
  lng: number
  postalCode: string
  region: string
  timezone: string
}

export interface IIpFetchReturned {
  ip: string
  isp: string
  location: LocationType
  timezone: string
}

interface IIpState {
  inputValue: string
  ip: string
  isp: string
  location: LocationType
  status: 'pending' | 'success' | 'error'
}

export const fetchIp = createAsyncThunk<IIpFetchReturned, string>('ip/fetchIpAddress', async value => {
  const urlAdress = validator.isURL(value) ? `&domain=${validator.ltrim(value, 'httpswww:/')}` : ''

  const { data } = await axios.get<IIpFetchReturned>(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_LO1BPz0MRlapEAfLJrvOIFg5E6FFj${urlAdress}`
  )

  return data
})

const initialState: IIpState = {
  inputValue: '',
  ip: '',
  isp: '',
  location: {} as LocationType,
  status: 'pending'
}

const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {
    setIpInfo: (state, action: PayloadAction<IIpFetchReturned>) => {
      state.ip = action.payload.ip
      state.isp = action.payload.isp
      state.location = action.payload.location
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIp.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchIp.fulfilled, (state, { payload }) => {
        const { ip, isp, location } = payload

        state.inputValue = ''
        state.ip = ip
        state.isp = isp
        state.location = location
        state.status = 'success'
      })
      .addCase(fetchIp.rejected, state => {
        state.status = 'error'
      })
  }
})

export const selectIp = (state: RootState) => state.ipSlice
export const { setIpInfo, setInputValue } = ipSlice.actions

export default ipSlice.reducer

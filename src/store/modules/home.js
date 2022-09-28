import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchDate', (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceAction(res))
  })
  getHomeDiscountData().then((res) => {
    dispatch(changeDisCountAction(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreAction(res))
  })
  getHomeHotRecommendData().then((res) => {
    dispatch(changeHotRecommendAction(res))
  })
  getHomeLongforData().then((res) => {
    dispatch(changeLongForAction(res))
  })
  getHomePlusData().then((res) => {
    dispatch(changePlusAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    disCountInfo: {},
    hightScoreInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeDisCountAction(state, { payload }) {
      state.disCountInfo = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.hightScoreInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongForAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

export const { changeGoodPriceAction, changeDisCountAction, changeHighScoreAction, changeHotRecommendAction, changeLongForAction, changePlusAction } =
  homeSlice.actions

export default homeSlice.reducer

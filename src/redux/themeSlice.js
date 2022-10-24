import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    main_bg_color: "#fcbf49",
    listItem_bg_color: "#fff",
    add_btn_color: "#00b340",
    text_color: "#000000",
  },

  reducers: {
    change_main_bgColor: (state, action) => {
      state.main_bg_color = action.payload
    },
    change_listItem_bg_color: (state, action) => {
      state.listItem_bg_color = action.payload
    },
    change_add_btn_color: (state, action) => {
      state.add_btn_color = action.payload
    },
    change_text_color: (state, action) => {
      state.text_color = action.payload
    },
  },
})

export const {
  change_main_bgColor,
  change_add_btn_color,
  change_text_color,
  change_listItem_bg_color,
} = themeSlice.actions
export default themeSlice.reducer

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  change_main_bgColor,
  change_add_btn_color,
  change_text_color,
  change_listItem_bg_color,
} from "../redux/themeSlice"

export const ThemeChooser = () => {
  const dispatch = useDispatch()
  const { main_bg_color, listItem_bg_color, add_btn_color, text_color } =
    useSelector((state) => state.theme)

  return (
    <div className="theme-chooser">
      <input
        type="color"
        id="main-bg-color"
        value={main_bg_color}
        onChange={(e) => dispatch(change_main_bgColor(e.target.value))}
      />
      <label htmlFor="main-bg-color">Choose main background color</label>
      <input
        type="color"
        id="listItem-bg-color"
        value={listItem_bg_color}
        onChange={(e) => dispatch(change_listItem_bg_color(e.target.value))}
      />
      <label htmlFor="listItem-bg-color">
        Choose list item background color
      </label>
      <input
        type="color"
        id="add-btn-color"
        value={add_btn_color}
        onChange={(e) => dispatch(change_add_btn_color(e.target.value))}
      />
      <label htmlFor="add-btn-color">Choose add button background color</label>
      <input
        type="color"
        id="text-color"
        value={text_color}
        onChange={(e) => dispatch(change_text_color(e.target.value))}
      />
      <label htmlFor="text-color">Choose text color</label>
    </div>
  )
}

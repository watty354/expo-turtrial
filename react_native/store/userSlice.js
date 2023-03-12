import { createSlice } from '@reduxjs/toolkit'

//初期値
const initialState  = {
    clips: []
  }


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action) => {
        const newClip = action.payload;
        state.clips.push(newClip);
    },

    deleteClip: (state, action) => {
        const deletingClip = action.payload;
        const currentClip = state.clips;
        const filteredClips = currentClip.filter((clip) => clip.url !== deletingClip.url);
        state.clips = filteredClips;
    },

  },
})

// Action creators are generated for each case reducer function
export const { addClip, deleteClip} = userSlice.actions

export default userSlice.reducer
import api from '../../api/api'
const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit')

// read only
const initialState = {
  all: {},
  message: '',
  error: '',

  user: { loading: false, apiCall: false, data: {} },
  student: { loading: false, apiCall: false, data: {} },
  teacher: { loading: false, apiCall: false, data: {} },
  parent: { loading: false, apiCall: false, data: {} },
  agent: { loading: false, apiCall: false, data: {} },
  team: { loading: false, apiCall: false, data: {} },
  admin: { loading: false, apiCall: false, data: {} },
}

const user = createAsyncThunk('user', async () => {
  try {
    const { data } = await api().get(`/admin/user`)
    console.log({ data })
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const teacher = createAsyncThunk('teacher', async () => {
  try {
    const { data } = await api().get(`/admin/teacher`)
    // console.log({data})
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const parent = createAsyncThunk('parent', async () => {
  try {
    const { data } = await api().get(`/admin/parent`)
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const agent = createAsyncThunk('agent', async (obj) => {
  try {
    const { data } = await api().post(`/admin/agent`, obj)
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const team = createAsyncThunk('team', async (obj) => {
  try {
    const { data } = await api().post(`/admin/team`, obj)
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const admin = createAsyncThunk('admin', async (obj) => {
  try {
    const { data } = await api().post(`/admin/admin`, obj)
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
})

const { reducer } = createSlice({
  name: 'admin',
  initialState,
  extraReducers: {
    [user.pending]: (state) => {
      state.loading = true
    },
    [user.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
      state.user.data = payload
      state.user.apiCall = false
    },
    [user.rejected]: (state, { payload }) => {
      state.user = payload
      state.loading = false
      state.error = payload?.error
      state.user.data = payload
      state.message = 'request rejected ! '
    },
    [teacher.pending]: (state) => {
      state.loading = true
    },

    [teacher.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.teacher.data = payload
      state.teacher.apiCall = true
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
    },
    [teacher.rejected]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.error = payload.error
      state.message = 'request rejected ! '
    },
    [parent.pending]: (state) => {
      state.loading = true
    },

    [parent.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.parent.data = payload
      state.parent.apiCall = true
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
    },
    [parent.rejected]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.error = payload.error
      state.message = 'request rejected ! '
    },

    [agent.pending]: (state) => {
      state.loading = true
    },
    [agent.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.agent.data = payload
      state.agent.apiCall = true
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
    },
    [agent.rejected]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.error = payload.error
      state.message = 'request rejected ! '
    },

    [team.pending]: (state) => {
      state.loading = true
    },
    [team.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.team.data = payload
      state.team.apiCall = true
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
    },
    [team.rejected]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.error = payload.error
      state.message = 'request rejected ! '
    },

    [admin.pending]: (state) => {
      state.loading = true
    },

    [admin.fulfilled]: (state, { payload }) => {
      state.all = payload
      state.admin.data = payload
      state.admin.apiCall = true
      state.loading = false
      state.message = payload?.message
      state.error = payload?.error
    },

    [admin.rejected]: (state, { payload }) => {
      state.all = payload
      state.loading = false
      state.error = payload.error
      state.message = 'request rejected ! '
    },
  },
})

export const adminReducer = reducer

export const adminActions = {
  user,
  teacher,
  parent,
  agent,
  team,
  admin,
}

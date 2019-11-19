import React from 'react'
import Layout from './js/common/Layout/Layout'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from './js/redux/actions/postUserAction'
function App() {
    const mySelect = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(mySelect)
  return (
      <Layout>
          <div onClick={() => dispatch(setUser('example name'))}>App</div>
      </Layout>
  );
}

export default App;

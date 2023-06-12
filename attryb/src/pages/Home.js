import React, {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'

const Home = () => {
  const {cars, loading} = useSelector(state=>state.carsReducer)
  const dispatch = useDispatch()
  

  useEffect(() => {
      dispatch(getAllCars())

      
  }, [])

  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h1>The length of cars of array is {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home

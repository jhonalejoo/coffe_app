import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Money from '../lotties/Money';
import { getCoffeesLoading } from '../../state/features/coffee/reducers';
import CoffeeItem from './components/CoffeeItem';


const Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const coffeeState = useSelector(state => state.coffee.getCoffees);

  useEffect(() => {
    dispatch(getCoffeesLoading())
  }, [])


  const handleAction = (item) => {
    
  }
  const renderItem = ({ item, index }) => {
    return (
      <CoffeeItem action={() => handleAction(item)} index={index} item={item} />
    )
  }

  return (
    <View style={[styles.container, coffeeState.isLoading && { alignItems: 'center', justifyContent: 'center' }]}>
      {
        coffeeState.isLoading &&
        <Money />
      }
      <FlatList
        keyExtractor={item => item.id}
        data={coffeeState.coffees}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})